# A TransforMap [DocPad](http://docpad.org) Project

## Dependencies

All commands have to be run within the root of the repository.
Also consult `packages.json`.

### For static site generation w/ DocPad

#### `docpad install` ...

* `jade`
* `livereload`
* `ghpages`
* (`stylus`) *not used yet*

### For Favicon generation via Gulp

The initial idea and code for changing Favicons comes from [Federated Wiki](http://fed.wiki.org).
Check the source!

#### DocPad Package

* `gulp`

#### NPM Packages

* `-g gulp` && `gulp`
* `gulp-file`
 * `mkdirp`
* `canvas`

#### Dependencies for `canvas`

* Ubuntu : `apt-get install pkg-config libpng-dev libgif-dev libfreetype6-dev libpixman-1-dev libcairo2-dev libjpeg-dev`
* OS X : https://github.com/Automattic/node-canvas

## Run

> `docpad run` + http://localhost:9778

## Future to copy from

* [bootstrap jade boilerplate](https://github.com/willianjusten/bootstrap-boilerplate/blob/master/src/templates/index.jade)
* [bootstrap 3 & jade](https://github.com/ALT-F1/bootstrap3-jade-node-express-grunt)
* [docpad-bootstrap-jade](https://github.com/docpad/twitter-bootstrap-jade.docpad/blob/master/docpad.coffee) w/o livereload

### Farest Future?

* BEM
* https://github.com/bevry/base
* API via http://hapijs.com/ ?

* Please see [Trello for more](https://trello.com/c/T2DOJr60/26-landing-page).

---

This work is licensed as described in [`LICENCE.md`](LICENCE.md) within the same repository.
