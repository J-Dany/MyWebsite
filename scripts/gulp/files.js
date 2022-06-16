const { src, dest, series, watch } = require("gulp");
const { filesPath, distFilesPath } = require("../../lib/paths");

exports.copy_files = series(copyFiles);
exports.watch_files = watchFiles;

function copyFiles(cb) { 
    src(filesPath, { allowEmpty: true})
        .pipe(dest(distFilesPath));

    cb();
}

function watchFiles(cb) {

    watch([filesPath], series(copyFiles));

    cb();
}