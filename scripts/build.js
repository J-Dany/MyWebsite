const fs = require("fs");
const pug = require("pug");
const archiver = require("archiver");
const pages = require("../pages");
const { appPath } = require("../lib/paths");
const { replacePaths } = require("../lib/build");
const path = require("path");

if (!fs.existsSync(path.resolve(appPath, "dist")))
{
    fs.mkdirSync(path.resolve(appPath, "dist"));
}

// Compile pug files into html files

for (let i = 0; i < pages.length; ++i)
{
    const page = pages[i];
    const htmlFile = page.file.replace(".pug", "") + ".html";

    const pugged = pug.compileFile(path.resolve(appPath, "pages", page.file));

    fs.writeFileSync(path.resolve(appPath, "dist", htmlFile), replacePaths(pugged(), page));
}

// Creating the production zip

const output = fs.createWriteStream(path.resolve(appPath, "site.zip"));
const archive = archiver("zip", {
    zlib: { level: 9 }
});

archive.pipe(output);

archive.directory(path.resolve(appPath, "dist"), false);
archive.finalize();

