(function () {

  var angular = window.angular;

  angular
    .module('books')
    .directive('bookFilters', function () {
      return {
        restrict: 'E',
        controller: new Function(),
        controllerAs: 'vm',
        bindToController: {
          filterBy: '&'
        },
        scope: true,
        templateUrl: './src/views/books/filters/filters.html'
      };
    });

}());
