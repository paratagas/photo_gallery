/**
 * Index page tests suite
 *
 * @param {string} Message
 * @param {callback}
 */
suite('Index page tests', () => {
    test('Index page should contain link to "Upload" page', () => {
        assert($('a[href="/upload"]').length);
    });
});
