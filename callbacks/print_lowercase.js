var https = require('https');
var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

//this is function definition?
function toLowerCase (html) {
  console.log(html.toLowerCase());
}

//this is function invokation? printHTML is passing a reference
getHTML(requestOptions, toLowerCase);