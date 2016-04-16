(function () {

  var angular = window.angular;

  angular
    .module('books', [])
    .directive('books', function () {
      return {
        restrict: 'E',
        template: '<ui-view></ui-view>'
      };
    });

}());
