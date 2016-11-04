var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css');

gulp.task('sass', function() {
    gulp.src('../src/**/*.scss')
        .pipe(sass())
        .pipe(minifycss())
        .pipe(gulp.dest('../src/'));
});

gulp.task('watch', function() {
    gulp.watch('../src/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch'], function() {

});
