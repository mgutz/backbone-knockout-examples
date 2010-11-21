
/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express.createServer();


// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jqtpl');
  app.use(express.bodyDecoder());
  app.use(express.methodOverride());
  app.use(express.compiler({ src: __dirname + '/public', enable: ['less'] }));
  app.use(app.router);
  app.use(express.staticProvider(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});


// Routes


app.get('/:example', function(req, res){
  res.render('backbone/' + req.params.example, {
    locals: {
      title: req.params.example
    }
  });
});

app.get('/', function(req, res){
  res.render('index', {
    locals: {
      title: 'Backbone Examples Ported From Knockout'
    }
  });
});


// Only listen on $ node app.js

if (!module.parent) {
  app.listen(3000);
  console.log("Express server listening on port %d", app.address().port);
}
