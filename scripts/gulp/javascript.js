const { src, dest, series, watch } = require("gulp");
const del = require("del");
const path = require("path");
const webpack = require("webpack-stream");
const webpackConfig = require("../../webpack.config");
const { jsPath, distJsPath } = require("../../lib/paths");

exports.build_js = series(deleteDistJs, buildJs);
exports.watch_js = watchJs;

function deleteDistJs() {
    return del([distJsPath]);
}

function buildJs(cb) {

    const output = src(jsPath)
        .pipe(webpack(webpackConfig(process.env.NODE_ENV ?? "development")).on("error", console.error))
        .pipe(dest(path.resolve(distJsPath)));

    cb();
}

function watchJs(cb) {
    watch([jsPath], series(deleteDistJs, buildJs));

    cb();
}
