const pages = require("../pages");

/**
* @param {string} compiledPug
* @returns {string} compiled pug file, where links to path are replaced with the actual html file
*/
exports.replacePaths = (compiledPug) => {

    for (let i = 0; i < pages.length; ++i)
    {
        const page = pages[i];

        let regExp = new RegExp(`"${page.path}"`, "g");
        const htmlFile = page.file.replace(".pug", "") + ".html";
        compiledPug = compiledPug.replaceAll(regExp, `"${htmlFile}"`);
    }

   return compiledPug;
}