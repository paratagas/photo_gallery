// run from root: mocha -u tdd -R spec tests/tests-crosspage.js 2>/dev/null
// docs: http://zombie.js.org/
const expect = require('chai').expect;
const Browser = require('zombie');
const appSettings = require('../settings');
Browser.localhost(appSettings.appHost, appSettings.appRort);
const URL = appSettings.appHost + ":" + appSettings.appRort + "/upload";

suite('Cross pages tests', () => {
    const browser = new Browser();

    before(() => {
        return browser.visit(URL);
    });

    test('Upload page', () => {
        expect('Should have form-control class element', () => {
            browser.assert.element('.form-control');
        });
    });

});