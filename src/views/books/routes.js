const books = {
  name: 'books',
  parent: 'app',
  url: '/books',
  abstract: true,
  template: '<books />'
};

const booksAll = {
  name: 'books.list',
  url: '/list',
  template: '<books-list />'
};

const bookDetails = {
  name: 'books.details',
  url: '/:id/details',
  template: '<book-details />'
};

export default function config($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state(books)
    .state(booksAll)
    .state(bookDetails);

  $urlRouterProvider.when('/books', '/books/all');
}
