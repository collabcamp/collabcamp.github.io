# A TransforMap [DocPad](http://docpad.org) Project

## Dependencies

All commands have to be run within the root of the repository.
Also consult `packages.json`.

### For static site generation w/ DocPad

* `npm install --production`

#### `docpad install`

This will install the following modules:

* `jade`
* `livereload`
* `ghpages`
* (`stylus`) *not used yet*

### Developer dependencies

#### Favicon generation via Gulp

The initial idea and code for changing Favicons comes from [Federated Wiki](http://fed.wiki.org).
Check the source!

#### `docpad install`

* `gulp`

#### `npm install`

* `-g gulp` && `gulp`
* `gulp-file`
* `mkdirp`
* `canvas`

#### Dependencies for `canvas`

* Ubuntu : `apt-get install pkg-config libpng-dev libgif-dev libfreetype6-dev libpixman-1-dev libcairo2-dev libjpeg-dev`
* [Fedora](https://github.com/Automattic/node-canvas/wiki/Installation---Fedora) : `yum install cairo cairo-devel cairomm-devel libjpeg-turbo-devel pango pango-devel pangomm pangomm-devel giflib-devel`
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
