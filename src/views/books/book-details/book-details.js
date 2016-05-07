import BookDetailsCtrl from './book-details-ctrl.js';
import BookDetailsSvc from './book-details-svc.js';

const bookDetails = {
  restrict: 'E',
  controller: BookDetailsCtrl,
  controllerAs: 'vm',
  templateUrl: './src/views/books/book-details/book-details.html'
};

export default window.angular
  .module('books.book.details', [])
  .service('BookDetailsSvc', BookDetailsSvc)
  .directive('bookDetails', () => bookDetails)
  .name;
