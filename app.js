const express = require('express');
const app = express();
const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');
const path = require("node:path");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

const PORT = 8080;

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT, 'localhost', () => {
    console.log(`Server is listening on port ${PORT}`);
});
