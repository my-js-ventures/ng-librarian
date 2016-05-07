import book from './book/book.js';
import bookDetails from './book-details/book-details.js';
import bookFilters from './filters/filters.js';
import booksList from './books-list/books-list.js';
import routes from './routes.js';

const books = {
  restrict: 'E',
  template: '<ui-view></ui-view>'
};

export default window.angular
  .module('books', [
    book,
    bookDetails,
    bookFilters,
    booksList
  ])
  .config(routes)
  .directive('books', () => books)
  .name;


