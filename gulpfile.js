'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .on('error', function (error) {
            console.error('' + error);
            this.emit('end');
        })
        .pipe(autoprefixer({
            overrideBrowserslist: [
                "defaults",
                "not IE 11",
                "not IE_Mob 11",
                "maintained node versions"
            ],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})

gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});