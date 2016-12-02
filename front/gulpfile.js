var gulp = require('gulp');
var del = require('del');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var tsc = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var rework = require('rework');
var path = require('path');
var fs = require('fs');
var mkpath = require('mkpath');

var PATHS = {
    src: {
        root: 'src',
        ts: 'src/**/*.ts',
        js: 'src/**/*.js',
        html: 'src/**/*.html',
        css: 'src/**/*.css'
    },
    lib: [
        'node_modules/*(@angular|angular2-in-memory-web-api|zone.js|reflect-metadata|rxjs|systemjs)/**/*.*',
		'node_modules/*(core-js)/client/*.*',
        'bower_components/**/*',
    ]
};

gulp.task('clean', function (done) {
    del(['dist'], done);
});

var tsProject = tsc.createProject('tsconfig.json', {typescript: require('typescript')});

gulp.task('ts', function () {
    return gulp.src(PATHS.src.ts)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject))
        .pipe(sourcemaps.write('source'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('js', function () {
    return gulp.src(PATHS.src.js)
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
    return gulp.src(PATHS.src.html)
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
    return gulp.src(PATHS.src.css).pipe(gulp.dest('dist'));
});

gulp.task('libs', function () {
    var size = require('gulp-size');
    return gulp.src(PATHS.lib)
        .pipe(gulp.dest('dist/lib'));
});

gulp.task('play', ['default'], function () {

    var http = require('http');
    var connect = require('connect');
    var serveStatic = require('serve-static');
    var open = require('open');

    var port = 8888, app;

    gulp.watch(PATHS.src.html, ['html']);
    gulp.watch(PATHS.src.ts, ['ts']);
    gulp.watch(PATHS.src.css, ['css']);
    gulp.watch(PATHS.src.js, ['js']);

    app = connect().use(serveStatic(__dirname + '/dist'));  // serve everything that is static
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});

gulp.task('default', ['ts', 'js', 'css', 'html', 'libs']);
