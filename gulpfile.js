const { src, dest, parallel, series, watch } = require('gulp');
const terser = require('gulp-terser');
const minifyCss = require('gulp-cssnano');
const rename = require("gulp-rename");
const concat = require('gulp-concat');
const browserSync = require("browser-sync").create();

function js() {
    return src('js/*.js')
        .pipe(terser())
        .pipe(concat('scripts.js'))
        .pipe(rename(function (path) {
            path.extname = ".min.js";
        }))
        .pipe(dest('build/js'));
}

function css() {
    return src('css/*.css')
        .pipe(minifyCss())
        .pipe(rename(function (path) {
            path.extname = ".min.css";
        }))
        .pipe(dest('build/css'));
}

function liveReload() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}

function reload(done){
    browserSync.reload();
    done();
}

watch("*",parallel(series(css,js),reload));
// watch("js/*",parallel(js,reload));

exports.default = parallel(js, css,liveReload);