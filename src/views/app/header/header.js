(function () {

  var angular = window.angular;

  angular
    .module('app')
    .directive('appHeader', function () {
      return {
        restrict: 'E',
        templateUrl: './src/views/app/header/header.html'
      };
    });

}());
