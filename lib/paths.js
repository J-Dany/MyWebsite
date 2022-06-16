const path = require("path");

const appPath = process.cwd();

exports.appPath = appPath;
exports.jsEntriesPath = path.resolve(appPath, "js-entries.js");
exports.distJsPath = path.resolve(appPath, "dist", "js");
exports.distCssPath = path.resolve(appPath, "dist", "css");
exports.distImagePath = path.resolve(appPath, "dist", "images");
exports.distFilesPath = path.resolve(appPath, "dist", "files");
exports.jsEntrypoint = path.resolve(appPath, "assets", "js", "main.js");
exports.jsPath = path.resolve(appPath, "assets", "js");
exports.imagesPath = path.resolve(appPath, "assets", "images", "*");
exports.scssPath = path.resolve(appPath, "assets", "sass");
exports.filesPath = path.resolve(appPath, "assets", "files", "*");
exports.scssEntrypoint = path.resolve(appPath, "assets", "sass", "style.scss");
