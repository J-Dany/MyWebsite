const { parallel } = require("gulp");
const clean = require("./scripts/gulp/clean");
const scss = require("./scripts/gulp/scss");
const js = require("./scripts/gulp/javascript");
const images = require("./scripts/gulp/image");
const files = require("./scripts/gulp/files");

exports.clean = clean;
exports.minify_images = images.minify_images;
exports.build_scss = scss.build_scss;
exports.watch_scss = scss.watch_scss;
exports.build_js = js.build_js;
exports.copy_files = files.copy_files;
exports.watch_js = js.watch_js;
exports.watch_images = images.watch_images;
exports.watch_files = files.watch_files;
exports.watch_all = parallel(scss.watch_scss, js.watch_js, images.watch_images, files.watch_files);