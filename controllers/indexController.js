const path = require('path');
const { links, users } = require('../db')

async function index(req, res) {
    res.render("index", { links: links, users: users });
};

async function about(req, res) {
    res.render("about", { links: links });
};

async function contactMe(req, res) {
    res.sendFile(path.join(__dirname, '../contact-me.html'));
};

module.exports = {
    index,
    about,
    contactMe,
};