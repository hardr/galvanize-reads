const router = require('express').Router();
const knex = require('../db/knex');

// function Authors() { return knex('authors'); }
// function Books() { return knex('books'); }
// function AuthorBook() { return knex('author_book'); }

router.get('/', function (req, res, next) {
  knex('authors')
  .join('author_book', 'book_id', 'authors.id')
  .join('books', 'books.id', 'book_id')
  .select('books.title', 'books.genre', 'authors.first_name', 'authors.last_name', 'authors.biography')
  .then((authors) => {
    const renderObject = {};
    renderObject.author = authors;
    renderObject.title = 'Galvanize Read - Authors';
    res.render('authors', renderObject);
  });
});

router.get('/_____', function(req,res,next) {
  // res.send(book);
});

module.exports = router;
