(function () {

  var angular = window.angular;

  angular
    .module('home', [])
    .directive('home', function () {
      return {
        restrict: 'E',
        controller: function ($state) {
          console.log($state.get());
        },
        templateUrl: './src/views/home/home.html'
      };
    });

}());
