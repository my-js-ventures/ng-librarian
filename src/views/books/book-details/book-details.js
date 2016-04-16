(function () {

  var angular = window.angular;

  function Controller(
    $stateParams,
    BookDetailsSvc
  ) {

    var vm = this;

    BookDetailsSvc.getBookDetails($stateParams.id)
      .then(function (details) {
        var subject = {
          subjectid: details.subjectid,
          name: details.subject
        };

        vm.details = details;
        vm.subject = subject;
        vm.authors = details.authors;
      });
  }

  angular
    .module('books')
    .directive('bookDetails', function () {
      return {
        restrict: 'E',
        controller: Controller,
        controllerAs: 'vm',
        templateUrl: './src/views/books/book-details/book-details.html'
      };
    });

}());
