// to run manually: mocha -u tdd -R spec tests/tests-routes.js
const express = require('express');
const router = express.Router();
const expect = require('chai').expect;
const rest = require('restler');
const appSettings = require('../settings');
const baseAppUrl = appSettings.appHost + ":" + appSettings.appRort;

/**
 * App routes tests suite
 *
 * @param {string} Message
 * @param {callback}
 */
suite('App GET routes contain HTML mapkup tests', function() {
    this.timeout(5000);

    // home page: http://localhost:3000/
    test('Home page should contain HTML mapkup string', (done) => {
        rest.get(baseAppUrl)
            .on('success', (data) => {
                expect(data !== "");
                expect(typeof data === "string");
                expect(data.indexOf("DOCTYPE") > -1);
                done();
            })
            .on('error', () => {
                expect(false, 'Home page error');
            });
    });

    // upload page: http://localhost:3000/upload
    test('Upload page should contain HTML mapkup string', (done) => {
        rest.get(baseAppUrl + "/upload")
            .on('success', (data) => {
                expect(data !== "");
                expect(typeof data === "string");
                expect(data.indexOf("DOCTYPE") > -1);
                done();
            })
            .on('error', () => {
                expect(false, 'Upload page error');
            });
    });
});
