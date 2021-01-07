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

----
## Installation
At first you should clone the repository:
> $ git clone https://gitlab.com/majidmc2/Dobiel

Then you should change IP and Port of **Dobile-Server** in code (Change [IP] and [PORT] in fallowing file)
> $ nano background.js

> $ nano content.js

After that load **manifest.json**  to "about:debugging#/runtime/this-firefox" with "Load Temporary Add-on…" butten.

After that you should run **Dobile-Server** ([see](https://github.com/majidmc2/Dobiel-Server "Link")). In the server collected all attack patterns and find any attacks.
