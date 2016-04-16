(function () {

  var angular = window.angular;

  angular
    .module('components')
    .directive('attribute', function () {
      return {
        restrict: 'E',
        controller: new Function(),
        controllerAs: 'vm',
        bindToController: {
          label: '@',
          value: '@'
        },
        scope: true,
        templateUrl: './src/components/attribute/attribute.html'
      };
    });

}());
