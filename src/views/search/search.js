(function () {

  var angular = window.angular;

  function Controller(SearchSvc) {

    var vm = this;

    function matchAccessionNumber(match, accessno, query) {

      return accessno ? match || accessno.toString().indexOf(query) !== -1 : match;
    }

    function matchRackNumber(match, rackno, query) {

      return rackno ? match || rackno.toLowerCase().indexOf(query) !== -1 : match;
    }

    SearchSvc.getSearchList()
      .then(function (list) {
        vm.list = list;
      });

    vm.search = function (row) {

      var query = (vm.query || '').toLowerCase();

      var match = matchAccessionNumber(false, row.accessno, query);
      match = matchRackNumber(match, row.rackno, query);

      return match || row.name.toLowerCase().indexOf(query) !== -1;

    };

  }

  angular
    .module('search', [])
    .directive('search', function () {
      return {
        restrict: 'E',
        controller: Controller,
        controllerAs: 'vm',
        templateUrl: './src/views/search/search.html'
      };
    });

}());
