# Photo gallery

### Simple image gallery

![Photo gallery](https://i.imgur.com/4xVCo6i.png)

---

### Tech
Photo gallery uses several open source projects to work properly and for tests:

* [Node.js] - JavaScript runtime built on Chrome's V8 JavaScript engine
* [Express.js] - Node.js web application framework
* [MongoDB] - NoSQL database
* [EJS] - Semantic template
* [Grunt] - JavaScript task runner
* [Gulp] - JavaScript toolkit for automating tasks
* [Mocha] - JavaScript test framework

---

### Requirements

* Tested successfully on [Node.js](https://nodejs.org/) v6.9+
* Tested successfully on [MongoDB](https://www.mongodb.com/) v2.6+

---

### Installation

* Download and extract the [latest version of Photo gallery](https://github.com/paratagas/photo_gallery)
* Install the dependencies and devDependencies:
```sh
$ cd photo_gallery
$ npm install
```

* To install global dependencies for making tests run:
```sh
$ npm install -g grunt
$ npm install -g grunt-cli
$ npm install -g mocha
$ npm install -g jshint
```

---

### Launching
```sh
$ npm start
```

After that your web application is available on:

```sh
http://localhost:3000
```

---

### Development

* To automatically start the server while development run:
```sh
$ nodemon
```

* To create bundle run:
```sh
$ gulp
```

* To watch file changes and create bundle run:
```sh
$ gulp watch
```

---

### Settings

App settings can be changed in "settings.js"

---


### Testing

* To automatically run all platform tests use:
```sh
$ grunt
```

Platform tests include:
* Code linting (JSHint)
* URL tests
* Cross pages tests
* Stress tests

To run browser tests use URL with query string e.g.:
```sh
http://localhost:3000?test=1
```
* or:

```sh
http://localhost:3000/upload?test=1
```

---
### License

MIT

 [Node.js]: <https://nodejs.org/>
 [Express.js]: <http://expressjs.com/>
 [MongoDB]: <https://www.mongodb.com/>
 [EJS]: <http://www.embeddedjs.com/>
 [Grunt]: <https://gruntjs.com/>
 [Gulp]: <https://gulpjs.com/>
 [Mocha]: <https://mochajs.org/>
