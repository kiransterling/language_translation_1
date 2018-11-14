/*eslint-disable no-unused-params */
const http = require('http');
const translatorModule = require('./translator');


var helloText = 'Hello';
var fromLanguage = 'en';
var toLanguage = 'es';


var portNumber = process.env.VCAP_APP_PORT || 8080;
const server = http.createServer(handleRequests);
server.listen(portNumber, function () {
    console.log('Server is up!');
});




function handleRequests(userRequest, userResponse) {
    userResponse.writeHead(200, {'Content-Type': 'text/plain'});

    var callback = function (error, translatorOutput) {
        if (error) {
            userResponse.end(error);
        } else {
            userResponse.end('Translation of ' + helloText + " is " + translatorOutput);
        }
    };

    translatorModule.getTranslation(helloText, fromLanguage, toLanguage, callback);
}