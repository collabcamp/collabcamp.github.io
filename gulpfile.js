// TODO : gulpfile.coffee
/* TODO : require dependent on env : https://gist.github.com/Dashed/8298724
                                     https://www.npmjs.org/package/gulp-task-listing
                                     https://www.npmjs.org/package/gulp-task-master */
//        Browserify?              : http://www.100percentjs.com/just-like-grunt-gulp-browserify-now/

var gulp = require('gulp');
var file = require('gulp-file');
var clean = require('gulp-clean');

gulp.task('favicon', function() {
  // https://github.com/fedwiki/wiki-plugin-favicon/blob/master/client/favicon.coffee
  // https://github.com/fedwiki/wiki-node-server/blob/master/lib/server.coffee
  // http://www.compileonline.com/try_coffeescript_online.php
  var hsltorgb;

  hsltorgb = function(h, s, l) {
    var hue, m1, m2;
    h = (h % 360) / 360;
    m2 = l * (s + 1);
    m1 = (l * 2) - m2;
    hue = function(num) {
      if (num < 0) {
        num += 1;
      } else if (num > 1) {
        num -= 1;
      }
      if ((num * 6) < 1) {
        return m1 + (m2 - m1) * num * 6;
      } else if ((num * 2) < 1) {
        return m2;
      } else if ((num * 3) < 2) {
        return m1 + (m2 - m1) * (2 / 3 - num) * 6;
      } else {
        return m1;
      }
    };
    return [hue(h + 1 / 3) * 255, hue(h) * 255, hue(h - 1 / 3) * 255];
  }

  var favicon;

  favicon = function() {
    var Canvas = require('canvas');
    var Image = Canvas.Image;
    var canvas = new Canvas(32,32);
    var ctx = canvas.getContext('2d');
    light = hsltorgb(Math.random() * 360, .78, .50);
    dark = hsltorgb(Math.random() * 360, .78, .25);
    angle = 2 * (Math.random() - 0.5);
    sin = Math.sin(angle);
    cos = Math.cos(angle);
    scale = Math.abs(sin) + Math.abs(cos);
    colprep = function(col, p) {
      return Math.floor(light[col] * p + dark[col] * (1 - p)) % 255;
    };
    for (x = _i = 0; _i <= 31; x = ++_i) {
      for (y = _j = 0; _j <= 31; y = ++_j) {
        p = sin >= 0 ? sin * x + cos * y : -sin * (31 - x) + cos * y;
        p = p / 31 / scale;
        ctx.fillStyle = "rgba(" + (colprep(0, p)) + ", " + (colprep(1, p)) + ", " + (colprep(2, p)) + ", 1)";
        ctx.fillRect(x, y, 1, 1);
      }
    }
    return canvas.toDataURL();
  }

  // Write generated canvas to disk.
  // regex via http://stackoverflow.com/questions/16156402/canvas-todataurl-for-large-canvas


  var buf = new Buffer(favicon().replace(/^data:image\/png;base64,/, ''), 'base64');

  return file('favicon.ico', buf, { src: true }).pipe(gulp.dest('out/files'));
});

gulp.task('jquery', function() {
  return gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('out/files/js'));
});

gulp.task('bootstrap-js', function() {
  return gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('out/files/js'));
});

gulp.task('bootstrap-css', function() {
  return gulp.src('node_modules/bootstrap/dist/css/*.min.css')
    .pipe(gulp.dest('out/files/css'));
});

gulp.task('bootstrap-fonts', function() {
  return gulp.src('node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.*')
    .pipe(gulp.dest('out/files/fonts'));
});

gulp.task('bootstrap', ['bootstrap-js', 'bootstrap-css', 'bootstrap-fonts']);

gulp.task('clean', function () {
  return gulp.src('out/files/*', {read: false})
    .pipe(clean());
});

gulp.task('default', ['jquery', 'bootstrap']);
