/**
 * Upload page tests suite
 *
 * @param {string} Message
 * @param {callback}
 */
suite('Upload page tests', () => {
    test('Upload page should contain submit button', () => {
        assert($('button[type="submit"]').length);
    });
});
