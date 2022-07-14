const fs = require('fs');
var saml = require('saml').Saml20;

var options = {
    cert: fs.readFileSync(__dirname + "/sample-kp.pem"),
    key: fs.readFileSync(__dirname + "/sample-kp.key")
}

var signedAssertion = saml.create(options);
var encodedSignedAssertion = encodeURIComponent(Buffer.from(signedAssertion).toString('base64'));
console.log(encodedSignedAssertion)