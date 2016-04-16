(function () {

  var angular = window.angular;

  function Controller(BooksListSvc) {

    var vm = this;

    BooksListSvc.getBooks()
      .then(function (books) {
        vm.books = books;
      });

    vm.setActive = function (book) {
      vm.activeBook = book;
    };
  }

  angular
    .module('books')
    .directive('booksList', function () {
      return {
        restrict: 'E',
        controller: Controller,
        controllerAs: 'vm',
        templateUrl: './src/views/books/books-list/books-list.html'
      };
    });

}());
