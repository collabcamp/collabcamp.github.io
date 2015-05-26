// TODO : gulpfile.coffee
/* TODO : require dependent on env : https://gist.github.com/Dashed/8298724
                                     https://www.npmjs.org/package/gulp-task-listing
                                     https://www.npmjs.org/package/gulp-task-master */
//        Browserify?              : http://www.100percentjs.com/just-like-grunt-gulp-browserify-now/

var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('jquery', function() {
  return gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('out/files/js'));
});

gulp.task('bootstrap-js', function() {
  return gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('out/files/js'));
});

gulp.task('bootstrap-css', function() {
  return gulp.src([
      'node_modules/bootstrap/dist/css/*.min.css',
      'node_modules/font-awesome/css/*.min.css'
    ])
    .pipe(gulp.dest('out/files/css'));
});

gulp.task('bootstrap-fonts', function() {
  return gulp.src([
      'node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.*',
      'node_modules/font-awesome/fonts/*'
     ])
    .pipe(gulp.dest('out/files/fonts'));
});

gulp.task('bootstrap', ['bootstrap-js', 'bootstrap-css', 'bootstrap-fonts']);

gulp.task('clean', function () {
  return gulp.src('out/files/*', {read: false})
    .pipe(clean());
});

gulp.task('default', ['jquery', 'bootstrap']);
