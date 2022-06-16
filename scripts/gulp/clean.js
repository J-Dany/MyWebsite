const del = require("del");
const path = require("path");
const { appPath } = require("../../lib/paths");

module.exports = () => {
    return del([path.resolve(appPath, "dist")]);
};