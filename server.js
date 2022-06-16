const express = require("express");
const pages = require("./pages");
const path = require("path");

const app = express();
const PORT = 4000;

app.use(express.static(path.resolve("dist")));
app.use(express.static(path.resolve("public")));

app.set('views', path.join(__dirname, './pages'));
app.set('view engine', 'pug');
app.set("view cache", false);

for (let i = 0; i < pages.length; ++i)
{
    const page = pages[i];
    app.get(page.path, (req, res, next) => {
        res.render(page.file);
    });
}

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});