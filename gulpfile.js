var gulp = require('gulp')
var less = require('gulp-less');
var myth = require('gulp-myth');
var concat = require('gulp-concat');

gulp.task('less', function () {
    gulp.src('./lib/*.less')
        .pipe(less())
        .pipe(myth())
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['less']);