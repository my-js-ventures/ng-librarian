(function () {

  var angular = window.angular;

  function Controller(
    $stateParams,
    AuthorDetailsSvc
  ) {

    var vm = this;

    AuthorDetailsSvc.getAuthorDetails($stateParams.id)
      .then(function (details) {
        vm.details = details;
      });
  }

  angular
    .module('authors')
    .directive('authorDetails', function () {
      return {
        restrict: 'E',
        controller: Controller,
        controllerAs: 'vm',
        templateUrl: './src/views/authors/author-details/author-details.html'
      };
    });

}());
