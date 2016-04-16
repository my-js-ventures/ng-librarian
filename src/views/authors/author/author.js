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
        scope: true,
        templateUrl: './src/views/authors/author/author.html'
      };
    });

}());
