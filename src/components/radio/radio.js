(function () {

  var angular = window.angular;

  angular
    .module('components')
    .directive('radio', function () {
      return {
        restrict: 'E',
        controller: new Function(),
        controllerAs: 'vm',
        bindToController: {
          ngModel: '=',
          label: '@',
          value: '@'
        },
        scope: true,
        templateUrl: './src/components/radio/radio.html'
      };
    });

}());
