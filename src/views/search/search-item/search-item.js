(function () {

  var angular = window.angular;

  angular
    .module('search')
    .directive('searchItem', function () {
      return {
        restrict: 'E',
        controller: new Function(),
        controllerAs: 'vm',
        bindToController: {
          item: '='
        },
        scope: true,
        templateUrl: './src/views/search/search-item/search-item.html'
      };
    });

}());
