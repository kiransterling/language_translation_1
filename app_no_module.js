const http = require('http');
var LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');
var languageTranslator = new LanguageTranslatorV3({version: '2018-05-01', iam_apikey: 'lkbssbEumwyAnPMtOhBDiIZCkk0si2LKKwOpEunemOA9', url: 'https://gateway-syd.watsonplatform.net/language-translator/api'});

var parameters = {
  text: 'Hello',
  model_id: 'en-es'
};

var portNumber = process.env.VCAP_APP_PORT || 8080;
const server = http.createServer(handleRequests);
server.listen(portNumber, function () {
  console.log('Server is up!');
});

function handleRequests(userRequest, userResponse) {
  userResponse.writeHead(200, {'Content-Type': 'text/plain'});

  languageTranslator.translate(parameters, function (err, data) {
    if (err) {
      console.log(err);
      userResponse.end('Error: ' + err);
    } else {
      console.log(data);
      userResponse.end('Translation of ' + parameters.text + " is " + data.translations[0].translation);
    };
  });
}