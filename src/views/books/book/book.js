const book = {
  restrict: 'E',
  scope: {
    book: '=',
    active: '=',
    setActive: '&'
  },
  templateUrl: './src/views/books/book/book.html'
};

export default window.angular
  .module('books.book', [])
  .directive('book', () => book)
  .name;
