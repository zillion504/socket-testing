# Set up

In order to set this up, you must run the following command (and have Node.js and NPM installed.)

`npm install`

This will install the dependencies, which is only the package "ws" for WebSockets.

# Run server

To run the server, run the following command:

`npm run start`

This script, called "start", is defined in package.json. You will be able to see that it simple executes the command `node index.js`

# Test it out

You should figure out what your computers network IP is. I found it out by running the command `ipconfig` in the Command Prompt (cmd).

```
Wireless LAN adapter Wi-Fi 5:

   Connection-specific DNS Suffix  . : hsd1.or.comcast.net
   IPv6 Address. . . . . . . . . . . : 2601:1c0:ce01:1150::60f2
   IPv6 Address. . . . . . . . . . . : 2601:1c0:ce01:1150:684c:dcd3:d658:abb
   Temporary IPv6 Address. . . . . . : 2601:1c0:ce01:1150:1cbc:a229:6ee4:56a1
   Link-local IPv6 Address . . . . . : fe80::684c:dcd3:d658:abb%27
   IPv4 Address. . . . . . . . . . . : 10.0.0.231
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : fe80::226:86ff:fe88:fcea%27
                                       10.0.0.1
```
You'll see something like this. Look for "IPv4 Address". That is your address to connect to the server from. 

Now that you know that, you can open this up in a browser from any device connected to your local network. In my case, the site is located at...

`http://10.0.0.231:8000/index.html`

