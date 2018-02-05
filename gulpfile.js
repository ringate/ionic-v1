var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');

var paths = {
  sass: ['./scss/**/*.scss'],
  scripts: ['./src/js/**/*.js']
};

gulp.task('default', ['scripts', 'sass']);

gulp.task('scripts', function() {
  gulp.src(
    [
      './src/js/app.js',
      './src/js/routes.js',
      './src/js/directives/*.js',
      './src/js/filters/*.js',
      './src/js/services/*.js',
      './src/js/controllers/*.js'
      './src/js/init.js',
    ])
    .pipe(concat('app.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./www/js/'));
});

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(cleanCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', ['scripts', 'sass'], function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.sass, ['sass']);
});
