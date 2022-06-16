const { src, dest, series, watch } = require("gulp");
const sass = require('gulp-sass')(require("sass"));
const del = require("del");
const cleanCSS = require('gulp-clean-css');
const path = require("path");
const { scssEntrypoint, scssPath, distCssPath } = require("../../lib/paths");

exports.build_scss = series(deleteDistCss, buildScss);
exports.watch_scss = watchScss;

function deleteDistCss() {
    return del([distCssPath]);
}

function buildScss(cb) {

    const output = src(scssEntrypoint)
        .pipe(sass().on("error", sass.logError));

    if (process.env.NODE_ENV === "production")
        output.pipe(cleanCSS());

    output.pipe(dest(distCssPath));

    cb();
}

function watchScss(cb) {
    watch([scssPath], series(deleteDistCss, buildScss));

    cb();
}