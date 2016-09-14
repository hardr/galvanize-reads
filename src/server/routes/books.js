const router = require('express').Router();
const knex = require('../db/knex');

// function Authors() { return knex('authors'); }
// function Books() { return knex('books'); }
// function AuthorBook() { return knex('author_book'); }

router.get('/', function (req, res, next) {
  knex('books')
  .join('author_book', 'book_id', 'books.id')
  .join('authors', 'authors.id', 'author_id')
  .select('books.id', 'books.title', 'books.genre', 'authors.first_name', 'authors.last_name', 'books.description', 'books.cover_url')
  .then((books) => {
    const renderObject = {};
    renderObject.books = books;
    renderObject.title = 'Galvanize Read - Books';
    res.render('books', renderObject);
  });
});

router.get('/new', function (req, res, next) {
  knex('authors')
  .select('first_name', 'last_name', 'id')
  .then((authors) => {
    const renderObject = {};
    renderObject.authors = authors;
    res.render('new_book', renderObject);
  });
});

router.post('/new', function(req,res,next) {
  const newBook = req.body;
  console.log(newBook.coverUrl);
  console.log(typeof newBook.coverUrl);

  knex('books')
  .insert({
    title: newBook.title,
    genre: newBook.genre,
    description: newBook.description,
    cover_url: newBook.coverUrl
  })
  .returning('*')
  .then((book) => {
    const newJoins = [];
    for (var i = 0; i < newBook.bookAuthor.length; i++) {
      newJoins.push({
        author_id: parseInt(newBook.bookAuthor[i]),
        book_id: book[0].id
      });
    }
    knex('author_book')
    .insert(newJoins)
    .returning('*')
    .then((join) => {
      // const renderObject = {
      //   message: 'The book was uploaded successfully!',
      //   book: book,
      //   joins: join
      // };
      // res.render('books', renderObject);
      res.redirect('/books');
    })
    .catch((err) => {
      throw err;
    });
  })
  .catch((err) => {
    res.status(500).json({
      status: 'error',
      data: err
    });
  });
});

// router.put('/:id', (req,res,next) => {
//   const bookId = parseInt(req.params.id);
//
// });

// router.put('/new', function (req, res, next) {
//   knex('authors')
//   .select('first_name', 'last_name')
//   .then((authors) => {
//     const renderObject = {};
//     renderObject.authors = authors;
//     res.render('new_book', renderObject);
//   });
// });

module.exports = router;
