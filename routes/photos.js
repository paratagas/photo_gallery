const Photo = require('../models/Photo');
const path = require('path');
const fs = require('fs');
const join = path.join;
const appSettings = require('../settings');

exports.list = (req, res, next) => {
    Photo.find({}, (err, photos) => {
        if (err) return next(err);
        
        res.render('photos', {
            title: 'Photo gallery',
            photos: photos,
            pageTestScript: ''
        });
    });
};

exports.form = (req, res) => {
    res.render('photos/upload', {
        title: 'Photo gallery',
        alertMessage: "",
        pageTestScript: ''
    });
};

exports.submit = (flag, req, res) => {
    //console.log("FILE: ", req.file);
    const img = req.file;
    
    if (!img) {
        res.render('photos/upload', {
            title: 'Photo upload',
            alertMessage: "The File field is mandatory!"
        });
    }

    const imgPath = img.destination + img.originalname;

    // move file from tmp directory to app directory
    fs.rename(img.path, imgPath, (err) => {
        if (err) {
            console.log("ERROR in fs.rename: ", err.message);
        }

        Photo.create({
            name: req.body.fileName || "noname",
            path: img.originalname
        }, (err) => {
            if (err) {
                console.log("ERROR in Photo.create: ", err.message);
            }
            res.redirect('/');
        });
    });
};

exports.download = (req, res) => {
    const id = req.params.id;
    //console.log("req.params: ", req.params);

    // find photo from MongoDB storage by _id param:
    Photo.findById(id, (err, photo) => {
        if (err) {
            console.log("PHOTO not found in DB: ", err.message);
        }

        const options = {
            // where to find previously uploaded photos:
            root: appSettings.galleryPath,
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
        };

        const fileName = photo.path;
        res.sendFile(fileName, options, (err) => {
            if (err) {
                console.log("PHOTO not found in local machine directory: ", err.message);
            } else {
                console.log('Sent:', fileName);
            }
        });
    });
};
