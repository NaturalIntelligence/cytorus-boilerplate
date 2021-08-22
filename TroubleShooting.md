If you're accessing a site whose domain need to be resolve by your host network then you should have following in `cytorus.config.js`

```js
module.exports = {
    runConfig: {
        docker: {
            args : {
                "--network": "host"
            }
        },
    }
    //..
}
```

Now if you run the cytorus in prallel mode( Eg `npx cytorus run -p true`), you may see following error on the screen. And only 1 process will execute.

```bash
Xvfb exited with a non zero exit code.

There was a problem spawning Xvfb.

This is likely a problem with your system, permissions, or installation of Xvfb.

----------

Error: _XSERVTransSocketUNIXCreateListener: ...SocketCreateListener() failed

_XSERVTransMakeAllCOTSServerListeners: server already running
(EE)
Fatal server error:
(EE) Cannot establish any listening sockets - Make sure an X server isn't already running(EE)
```

To solve [this issue](https://docs.cypress.io/guides/continuous-integration/introduction#Xvfb), 
1. Start X11 server (most probably it must be running)
```bash
#$ sudo apt-get install xorg openbox
$ sudo service lightdm status
```
2. set the display port
```bash
export DISPLAY=:99
```
3. pass the environment variable to docker configuration

```js
module.exports = {
    runConfig: {
        docker: {
            env: [ "DISPLAY"], 
            args : {
                "--network": "host"
            }
        },
    }
    //..
}
```