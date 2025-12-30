const books = require('../db')

async function getBookById(bookId) {
    return books.find(book => book.id === bookId) || null;
};

async function getAllBooks() {
    return books;
};

module.exports = {
    getAllBooks,
    getBookById
}