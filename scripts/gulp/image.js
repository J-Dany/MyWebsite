const { src, dest, series, watch } = require("gulp");
const del = require("del");
const { distImagePath, imagesPath } = require("../../lib/paths");

exports.minify_images = series(deleteDistImage, minifyImages);
exports.watch_images = watchImages;

function deleteDistImage() {
    return del([distImagePath]);
}

function minifyImages() { 
    return import("gulp-imagemin").then(imgmin => {
        src(imagesPath, { allowEmpty: true})
            .pipe(imgmin.default())
            .pipe(dest(distImagePath));
    });
}

function watchImages(cb) {

    watch([imagesPath], series(deleteDistImage, minifyImages));

    cb();
}