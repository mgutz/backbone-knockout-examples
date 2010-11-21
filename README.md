# Backbone Examples from Knockout

This project contains [Knockout](http://knockoutjs.com) examples ported to 
[Backbone](https://documentcloud.github.com/backbone/). My main motivation
is to learn enough about each to determine which framework best suits my 
style.

My initial impression is Knockout is the more elegant
framework as of this writing. However, almost everything [jashkenas](https://github.com/jashkenas), 
the author of Backbone, has created has been excellent. Backbone's
markup is cleaner, which facilitates integrating creative
assets from designers. Backbone's' synchronization with RESTful services 
could also be a plus. We'll see.

Knockout's examples have too much javascript code in data attributes. Perhaps that
is intentional to keep the examples concise. Not a good practice.

## Pre-requisites

* [express](https://github.com/visionmedia/express) - awesome web framework 
* [jqtpl](https://github.com/kof/node-jqtpl)

Install both via [npm](https://github.com/isaacs/npm)


## Examples Ported

* [Hello World](tree/master/views/examples/hello-world.jqtpl)
* [Click Counter](tree/master/views/examples/click-counter.jqtpl)

## Run It

    node app.js

## TODOS

* Use Docco
