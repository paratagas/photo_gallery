const loadtest = require('loadtest');
const expect = require('chai').expect;
const appSettings = require('../settings');

suite('App stress tests', () => {
      test('Homepage should handle 100 requests in under a second', (done) => {
          const options = {
              url: appSettings.appHost + ":" + appSettings.appRort,
              concurrency: 4,
              maxRequests: 100
          };

          loadtest.loadTest(options, (err, result) => {
              expect(!err);
              expect(result.totalTimeSeconds < 1);
              done();
          });
      });
});
