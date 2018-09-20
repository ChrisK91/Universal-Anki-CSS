// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('sass', function() {
    gulp.src('*.scss')
        .pipe(sass())
        .pipe(rename(function (path) {
            path.basename = "_" + path.basename; // prepend underscore
          }))
        .pipe(gulp.dest('output'))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('*.scss', ['sass']);
})