(function () {

  var angular = window.angular;

  angular
    .module('app')
    .directive('headerUserInfo', function () {
      return {
        restrict: 'E',
        templateUrl: './src/views/app/header/user-info/user-info.html'
      };
    });

}());
