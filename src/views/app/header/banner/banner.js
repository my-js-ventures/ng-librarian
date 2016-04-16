(function () {

  var angular = window.angular;

  angular
    .module('app')
    .directive('headerBanner', function () {
      return {
        restrict: 'E',
        templateUrl: './src/views/app/header/banner/banner.html'
      };
    });

}());
