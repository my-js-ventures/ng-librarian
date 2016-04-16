(function () {

  var angular = window.angular;

  angular
    .module('books')
    .directive('book', function () {
      return {
        restrict: 'E',
        controller: new Function(),
        controllerAs: 'vm',
        bindToController: {
          book: '=',
          active: '=',
          setActive: '&'
        },
        scope: true,
        templateUrl: './src/views/books/book/book.html'
      };
    });

}());
