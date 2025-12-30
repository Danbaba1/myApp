const authors = require('../db');

async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId) || null;
};

async function getAllAuthors() {
    return authors;
};

module.exports = {
    getAuthorById,
    getAllAuthors
}