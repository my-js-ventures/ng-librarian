(function () {

  var angular = window.angular;

  angular
    .module('app', [])
    .directive('app', function () {
      return {
        restrict: 'E',
        templateUrl: './src/views/app/app.html'
      };
    });

}());
