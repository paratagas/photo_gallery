/**
 * Global page tests suite
 *
 * @param {string} Message
 * @param {callback}
 */
suite('Global Tests', () => {
    test('Page should have a valid title', () => {
        assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');
    });
});
