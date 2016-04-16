(function () {

  var angular = window.angular;

  angular
    .module('home', [])
    .directive('home', function () {
      return {
        restrict: 'E',
        templateUrl: './src/views/home/home.html'
      };
    });

}());
