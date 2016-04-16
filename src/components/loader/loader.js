(function () {

  var angular = window.angular;

  function Controller(LoaderSvc) {

    var vm = this;

    vm.status = LoaderSvc.status;

  }

  angular
    .module('components')
    .directive('loader', function () {
      return {
        restrict: 'E',
        controller: Controller,
        controllerAs: 'vm',
        templateUrl: './src/components/loader/loader.html'
      };
    });

}());
