(function () {

  var angular = window.angular;

  angular
    .module('authors')
    .directive('author', function () {
      return {
        restrict: 'E',
        controller: new Function(),
        controllerAs: 'vm',
        bindToController: {
          author: '='
        },
        templateUrl: './src/views/authors/author/author.html'
      };
    });

}());
