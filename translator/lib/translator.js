var LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');

var languageTranslator = new LanguageTranslatorV3({version: '2018-05-01', iam_apikey: 'lkbssbEumwyAnPMtOhBDiIZCkk0si2LKKwOpEunemOA9', url: 'https://gateway-syd.watsonplatform.net/language-translator/api'});

exports.getTranslation = function getTranslation(helloText, fromLanguage, toLanguage, callback) {

    var parameters = {
        text: helloText,
        model_id: fromLanguage + '-' + toLanguage
    };

    var translatorCallback = languageTranslator.translate(parameters, function (err, data) {

        if (err) {
            console.log(err);
            callback(err, null);
        } else {
            console.log(data);
            callback(null, data.translations[0].translation);
        };
    });

};