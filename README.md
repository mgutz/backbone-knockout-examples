# Backbone Examples from Knockout

This project contains [Knockout](http://knockoutjs.com) examples ported to 
[Backbone](https://documentcloud.github.com/backbone/). The motivation 
is to learn enough about each to determine which framework best suits my 
style.

## Opinion

My initial impression is Knockout is the more elegant
framework as of this writing. However, almost everything [jashkenas](https://github.com/jashkenas), 
the author of Backbone, has created has been excellent. Backbone's
markup is cleaner, which facilitates integrating creative
assets from designers. Backbone's' synchronization with RESTful services 
could also be a plus. We'll see.

Knockout's examples have too much inline javascript in data attributes. Perhaps that
is intentional to keep the examples concise. Not sure I like that. Who knows, I'm un-learning
a lot of things and that may be one of those compromises which makes code simpler at
the expense of *architectural* correctness.

## Pre-requisites

* [express](https://github.com/visionmedia/express) - awesome web framework 
* [jqtpl](https://github.com/kof/node-jqtpl)

Install both via [npm](https://github.com/isaacs/npm)

## Examples Ported

* [Hello World](backbone-knockout-examples/tree/master/views/examples/hello-world.ejs)
* [Click Counter](backbone-knocout-examples/tree/master/views/examples/click-counter.ejs)
* [Simple List](backbone-knocout-examples/tree/master/views/examples/simple-list.ejs)

## Run It

    node app.js

## TODOS

* Use Docco
* Create a Pretty Examples Site
