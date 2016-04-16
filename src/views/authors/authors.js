(function () {

  var angular = window.angular;

  angular
    .module('authors', [])
    .directive('authors', function () {
      return {
        restrict: 'E',
        template: '<ui-view></ui-view>'
      };
    });

}());
