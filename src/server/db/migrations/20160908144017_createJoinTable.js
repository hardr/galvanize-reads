'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('author_book', (table) => {
    table.integer('author_id').references('authors.id');
    table.integer('book_id').references('books.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('author_book');
};
