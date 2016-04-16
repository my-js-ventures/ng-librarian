(function () {

  var angular = window.angular;

  function Controller(AuthorsListSvc) {

    var vm = this;

    AuthorsListSvc.getAuthors()
      .then(function (authors) {
        vm.authors = authors;
      });

  }

  angular
    .module('authors')
    .directive('authorsList', function () {
      return {
        restrict: 'E',
        controller: Controller,
        controllerAs: 'vm',
        templateUrl: './src/views/authors/authors-list/authors-list.html'
      };
    });

}());
