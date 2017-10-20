/**
 * App settings module
 */
module.exports = {
    appHost: "http://localhost",
    appRort: 3000,
    mongo: {
        connectionString: 'mongodb://localhost/photo_gallery'
    },
    galleryPath: __dirname + "/public/photos/"
};
