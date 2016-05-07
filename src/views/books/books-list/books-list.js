import BooksListCtrl from './books-list-ctrl.js';
import BooksListSvc from './books-list-svc.js';

const booksList = {
  restrict: 'E',
  controller: BooksListCtrl,
  controllerAs: 'vm',
  templateUrl: './src/views/books/books-list/books-list.html'
};

export default window.angular
  .module('books.list', [])
  .service('BooksListSvc', BooksListSvc)
  .directive('booksList', () => booksList)
  .name;
