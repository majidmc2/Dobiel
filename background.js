function sendRequest(body) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest;
        // TODO: Set // async: false and use proxy instead of XMLHTTPRequest
        xhr.open("POST", "http://192.168.1.103:5007/send_request", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.addEventListener("load", () => {
            if (xhr.status === 200)
                resolve(JSON.parse(xhr.responseText));
            else
                reject(JSON.parse(xhr.responseText));
        })
        xhr.send(JSON.stringify(body));
    });
}

// ------------------------- Request Analyzer -------------------------

function requestAnalyzer(requestDetails) {
    let serverIP = ["http://192.168.1.103:5007/send_mutation", "http://192.168.1.103:5007/send_request"]
    if (serverIP.includes(requestDetails.url))
        return {cancel: false};

    let request = {
        "type": [requestDetails.type],
        "method": [requestDetails.method],
        "url": requestDetails.url,
        "documentUrl": requestDetails.documentUrl,
        "originUrl": requestDetails.originUrl
    };

    if (requestDetails.documentUrl !== undefined) {
        let documentUrl = requestDetails.documentUrl.split('/');
        documentUrl = documentUrl[0] + '//' + documentUrl[2];
        let url = requestDetails.url.split('/');
        url = url[0] + '//' + url[2];
        request["document"] = url === documentUrl;
    } else
        request["document"] = false;

    if (requestDetails.originUrl !== undefined) {
        let originUrl = requestDetails.originUrl.split('/');
        originUrl = originUrl[0] + '//' + originUrl[2];
        let url = requestDetails.url.split('/');
        url = url[0] + '//' + url[2];
        request["origin"] = url === originUrl;
    } else
        request["origin"] = false;

    request["mainFrame"] = requestDetails.frameId === 0;

    request["parentFrame"] = requestDetails.parentFrameId !== -1;

    return sendRequest(request).then((response) => {
        console.log(response);
        return {cancel: false};
    }).catch((response) => {
        console.log(response);
    })
}

browser.webRequest.onBeforeRequest.addListener(requestAnalyzer,
    {urls: ["<all_urls>"]},
    ["blocking"]
);
