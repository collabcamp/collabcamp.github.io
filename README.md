# A TransforMap [DocPad](http://docpad.org) Project

TransforMap aims at cartographing all alternative economies. [Read on the blog Why?](http://blog.14mmm.org/transformap-explained/)

## Generating this site

### What you will need

* A POSIX complaint Operating System that runs **Node.js**.
* A **terminal** (console, command line, REPL) like `bash` which allows you to run commands by hand.
If you are on Linux or Mac OS, you're most likely already equipped.
* [`git`](http://git-scm.com/)

Get started by opening such terminal and cloning this repository to your machine, i.e. by just copy-and-pasting the following commands.

    git clone https://github.com/transformap/transformap.github.io.git ~/Repositories/github.com/transformap/transformap.github.io

All following commands have to be run within the root of the repository. Change there with

    cd ~/Repositories/github.com/transformap.github.io

Also make sure to have working `node` and `npm` executables within your `$PATH`.
If `which node` and `which npm` don't show a thing for you, our best advice is to use [`nvm`](https://github.com/creationix/nvm#installation) for that.

Also consult `packages.json` and the remaining source code for more details.
Now there are two options for you to approach the code.

### Requirements

But before any, you also have to install `docpad` and `gulp` globally:

    npm install -g docpad gulp

### Quick introduction for static hosting

If you don't trust the published output in the `master` branch, you can alter and recreate it yourself.

    npm install --production

will install all required `docpad` and `gulp` modules.

Then

    docpad generate

produces the website output in `./out`.
Use your favourite webserver (i.e. `python -m SimpleHTTPServer`, [`nws`](https://npm.im/nws) or [`http-server`](https://npm.im/http-server)) and browser to display the results.

Subsequently running `gulp` independently recreates the static assetts in `./out/files/`

`gulp clean` or `rm -rf out` help you to get rid of the already generated, respective outputs.

### Development and Deployment

If you intend to advance further, use the following procedure instead.

#### Development

You can install all requirements for `stylus`, `livereload` and `gh-pages` by issuing

    npm install

followed by (an equivalent to `docpad run`)

    npm start

Then browse to [http://localhost:9778](http://localhost:9778/) to see the result.
Now try editing some files, it's fun to watch the live reloader!

#### Deployment

As of the [plugin's documentation](https://github.com/docpad/docpad-plugin-ghpages#project-pages), deploying to GitHub Pages is as easy as

    docpad deploy-ghpages --env static

You can then access the website under the domain specified in `./src/files/CNAME`.

> *Note* This repository's `source` and `master` branch layout targets a [GitHub Pages](https://pages.github.com/) deployment for an [Organization Pages site](https://help.github.com/articles/about-custom-domains-for-github-pages-sites/#how-github-pages-sites-use-custom-domains). Also see [User & Organization Pages](https://help.github.com/articles/user-organization-and-project-pages/#user--organization-pages).

### Contributing

Please refer to our [Contributing Guidelines](LICENCE.md) for information about

* **Collaboration via Pull Requests**
* **Communication Channels** and our
* **Ideas for the Future**

---

This work is licensed as described in [`LICENCE.md`](LICENCE.md) within the same repository.
