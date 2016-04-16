(function () {

  var angular = window.angular;

  var books = {
    name: 'books',
    parent: 'app',
    url: '/books',
    abstract: true,
    template: '<books />'
  };

  var booksAll = {
    name: 'books.list',
    url: '/list',
    template: '<books-list />'
  };

  var bookDetails = {
    name: 'books.details',
    url: '/:id/details',
    template: '<book-details />'
  };

  angular
    .module('books')
    .config(function (
      $stateProvider,
      $urlRouterProvider
    ) {

      $stateProvider
        .state(books)
        .state(booksAll)
        .state(bookDetails);

      $urlRouterProvider.when('/books', '/books/all');

    });

}());
