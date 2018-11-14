var LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');
var languageTranslator = new LanguageTranslatorV3({version: '2018-05-01', iam_apikey: 'lkbssbEumwyAnPMtOhBDiIZCkk0si2LKKwOpEunemOA9', url: 'https://gateway-syd.watsonplatform.net/language-translator/api'});

var parameters = {
  text: 'Hello',
  model_id: 'en-es'
};

languageTranslator.translate(parameters, function (error, response) {
  if (error) 
    console.log(error)
  else 
    console.log(JSON.stringify(response, null, 2));
  }
);