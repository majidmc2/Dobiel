function parseAttributeObject(obj) {
	let re = {};
	for (let key in obj.attributes) {
		if (typeof obj.attributes[key] === "object") {
			if (obj.attributes[key]["name"] === "style")
				continue;
			re[obj.attributes[key]["name"]] = obj.attributes[key]["nodeValue"];
		}
	}
	return re;
}

function parsStyleObject(obj) {
    let re = {};
    if (obj.style) {
        let styles = {... obj.style};
        for (const i in styles)
            re[styles[i]] = obj.style[styles[i]];
    }
    return re;
}

function sendMutation(mutation) {
    const xhr = new XMLHttpRequest;
    xhr.open("POST", "http://192.168.1.103:5007/send_mutation", true)
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhr.addEventListener("load", () => {
		if (xhr.status === 200){
			if (JSON.parse(xhr.responseText)["mutation"] === "dangers") {
				for (const attack of JSON.parse(xhr.responseText)["attack"])
					console.log(attack)
			}
		}
        else
            console.log(JSON.parse(xhr.responseText));
    })
    xhr.send(JSON.stringify(mutation));
}


// ------------------------- Mutation Monitoring -------------------------

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

let observer = new MutationObserver(function(mutations, observer) {

    for(const mutation of mutations) {

    	if (mutation.type === "characterData") {
    		let result = {
				"target": {
					"nodeName": mutation.target.nodeName.toLowerCase(),
					"attributes": parseAttributeObject(mutation.target),
					"style": parsStyleObject(mutation.target)
				},
				"type": {
					"characterMutation": true
				}
			};
			// console.log(JSON.stringify(result, null, 10));
            sendMutation(result);

    	} else if (mutation.type === "attributes") {
			let result = {
				"target": {
					"nodeName": mutation.target.nodeName.toLowerCase(),
					"attributes": parseAttributeObject(mutation.target),
					"style": parsStyleObject(mutation.target)
				},
				"type": {
					"attributeMutation": mutation.attributeName
				}
			};
			// console.log(JSON.stringify(result, null, 10));
            sendMutation(result);

    	} else if (mutation.type === "childList") {

			mutation.addedNodes.forEach(function(node) {
				let result = {
					"target": {
						"nodeName": mutation.target.nodeName.toLowerCase(),
						"attributes": parseAttributeObject(mutation.target),
						"style": parsStyleObject(mutation.target)
					},
					"type": {
						"childNodeMutation": {
							"addedNode": {
								"nodeName": node.nodeName.toLowerCase(),
								"attributes": parseAttributeObject(node),
								"style": parsStyleObject(node),
								"method": node.method,
								"hidden": node.hidden,
								"draggable": node.draggable,
							}
						}
					}
				};
				// console.log(JSON.stringify(result, null, 10));
                sendMutation(result);
			});

			mutation.removedNodes.forEach(function(node) {
				let result = {
					"target": {
						"nodeName": mutation.target.nodeName.toLowerCase(),
						"attributes": parseAttributeObject(mutation.target),
						"style": parsStyleObject(mutation.target)
					},
					"type": {
						"childNodeMutation": {
							"removedNode": {
								"nodeName": node.nodeName.toLowerCase(),
								"attributes": parseAttributeObject(node),
								"style": parsStyleObject(node),
								"method": node.method,
								"hidden": node.hidden,
								"draggable": node.draggable,
							}
						}
					}
				};
				// console.log(JSON.stringify(result, null, 10));
                sendMutation(result);
			});
		}

		// if (m.type === "childList") {   // && m.target.localName === "header") {
    	// 	for (const n of m.addedNodes) {
		// 		// n.remove();
		// 		console.log(n);
    	// 	}
    	// }

    }
});

observer.observe(document, {
	subtree: true,
	childList: true,
	attributes: true,
	attributeOldValue: true,
	characterData: true,
    characterDataOldValue: true
});
