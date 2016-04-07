var gulp = require('gulp')
var less = require('gulp-less');
var myth = require('gulp-myth');

gulp.task('less', function () {
    gulp.src('flex.less')
        .pipe(less())
        .pipe(myth())
        .pipe(gulp.dest('dist'));
});