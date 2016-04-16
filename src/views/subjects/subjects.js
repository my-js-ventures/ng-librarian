(function () {

  var angular = window.angular;

  angular
    .module('subjects', [])
    .directive('subjects', function () {
      return {
        restrict: 'E',
        template: '<ui-view></ui-view>'
      };
    });

}());
