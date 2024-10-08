[![gitter](https://badges.gitter.im/Join%20Chat.svg)][gitter]
[![License Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=true)](http://www.apache.org/licenses/LICENSE-2.0)

# www
Website

https://github.com/faas-ovh/app.git

https://github.com/paas-info/www


TODO:

buttons
https://getbootstrap.com/docs/4.0/components/buttons/



You can use the [editor on GitHub](https://github.com/paas-info/docs/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

## Platform as a service (PaaS) or application platform as a service (aPaaS) or platform-based service
is a category of cloud computing services that provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app


## PaaS can be delivered in three ways:

+  As a public cloud service from a provider, where the consumer controls software deployment with minimal configuration options, and the provider provides the networks, servers, storage, operating system (OS)
+ As a private service (software or appliance) behind a firewall.
+ As software deployed on a public infrastructure as a service.


[more on wiki ...](https://en.wikipedia.org/wiki/Platform_as_a_service)


## Run Service on linux

Note if you're new to Unix: 
/var/www/myapp/app.js should have 
#!/usr/bin/env node
 
on the very first line.

Copy your service file into the /etc/systemd/system.

Start it with systemctl start myapp.

Enable it to run on boot with systemctl enable myapp.

See logs with journalctl -u myapp


## [forever - npm](https://www.npmjs.com/package/forever)

    npm install forever -g

    forever start /path/to/yourApp.js


## screen
The screen will detach and survive you logging off. Then you can get it back back doing screen -r. Hit up the screen manual for more details. You can name the screens and whatnot if you like

    screen
    node myserver.js
    
>>CTRL-A then hit D
