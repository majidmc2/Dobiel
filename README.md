```

████████▄   ▄██████▄  ▀█████████▄   ▄█     ▄████████  ▄█
███   ▀███ ███    ███   ███    ███ ███    ███    ███ ███
███    ███ ███    ███   ███    ███ ███▌   ███    █▀  ███
███    ███ ███    ███  ▄███▄▄▄██▀  ███▌  ▄███▄▄▄     ███
███    ███ ███    ███ ▀▀███▀▀▀██▄  ███▌ ▀▀███▀▀▀     ███
███    ███ ███    ███   ███    ██▄ ███    ███    █▄  ███
███   ▄███ ███    ███   ███    ███ ███    ███    ███ ███▌    ▄
████████▀   ▀██████▀  ▄█████████▀  █▀     ██████████ █████▄▄██
                                                     ▀

```                       

## About
**Dobile** is a Man-in-the-Browser Attack detection tool. it works with two main modules:
1. Request Monitoring: This module finds all attack patterns on web requests
2. Mutation Monitoring: This module finds all attack patterns on HTML mutations.

This tool install on Firefox web browser and detectes MitB attacks.


## Definition and summary of the research project:
Today, social networks, cloud computing, and the Web provide a platform for cybercriminals to commit low-risk, lucrative online crimes. Browsers are considered as a useful tool for users to connect to the Internet. For this reason, browsers have become a platform for Mam-in-the-Browser (MitB) attacks.
MitB attacks are trojans that infect the browser environment and can change the contents of the web page, interfere with network traffic, steal the user's main session, and steal confidential user information such as usernames and passwords. These attacks use different functions and features of a browser. 
Therefore, browser extensions that make it easier for users to browse the web for a variety of purposes provide a good opportunity for attackers to write a malicious extensions to launch MitB attacks after installation in the user's browser. The purpose of this study is to develop a tool for MitB attacks in the browser by dynamically analyzing web pages based on the description of the MitB attack pattern.


## The summary of research ideas and proposed solutions:
For this purpose, by describing the pattern of attacks in the tool, these attacks are detected. The pattern of attacks is described by a marking structure and the characteristics of an attack that are expressed in a structure.
After loading the proposed tool, the tool analyzes the parameters of the attack pattern on the web page and if it was equal with conditions of the attack, notifies the user. The advantage of the proposed method unlike other previous methods is that the proposed tool is not limited to identifying one or more specific attacks and the code of the detection method is not harded in the tool and by introducing a new attack, by describing its pattern, the tool is able to immediately detect that attack.


## Achievements:
The OWASP Foundation divides Mam-in-the-Browser attacks into four components: Browser Helper Objects, Extensions, API-Hooking, and JavaScript worms. Browser Helper Object are dynamic libraries that used by Internet Explorer to increase user performance of the browser, and due to the very low use of this browser by users, this method is less welcomed by hackers. To exploit API-Hooking, it is necessary to write malware for different operating systems, which involves the attacker in topics such as code obfuscation, understanding of operating system APIs, bypassing antivirus, and so on. Therefore, this method is less welcomed by intruders. On the other hand, worms written in JavaScript will only work on a vulnerable site and a specific attack. Attackers can use extensions with minimal knowledge of JavaScript to design their own malware and will not get involved in malware design issues for the operating system. They can execute a wide range of different attacks by communicating with the command-and-control (C2). Therefore, detecting MitB attacks execute by malicious extensions can be an important step in preventing user-side attacks.


## Installation
At first you should clone the repository:
> $ git clone https://gitlab.com/majidmc2/Dobiel

Then you should change IP and Port of **Dobile-Server** in code (Change [IP] and [PORT] in fallowing file)
> $ nano background.js

> $ nano content.js

After that load **manifest.json**  to "about:debugging#/runtime/this-firefox" with "Load Temporary Add-on…" butten.

After that you should run **Dobile-Server** ([see](https://github.com/majidmc2/Dobiel-Server "Link")). All attack patterns are collected In the server and finds any attacks.
