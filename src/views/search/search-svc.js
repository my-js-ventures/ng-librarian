(function () {

  var angular = window.angular;

  function SearchSvc($http) {

    function getSearchList() {

      return $http.get('/api/search')
        .then(function (response) {
          return response.data;
        });
    }

    return {
      getSearchList: getSearchList
    };
  }

  angular
    .module('books')
    .service('SearchSvc', SearchSvc);

}());
