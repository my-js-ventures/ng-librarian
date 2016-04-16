(function () {

  var angular = window.angular;

  angular
    .module('app')
    .directive('appBody', function () {
      return {
        restrict: 'E',
        templateUrl: './src/views/app/body/body.html'
      };
    });

}());
