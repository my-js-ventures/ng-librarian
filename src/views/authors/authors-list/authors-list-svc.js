(function () {

  var angular = window.angular;

  function AuthorsListSvc($http) {

    function getAuthors() {

      return $http.get('/api/authors')
        .then(function (response) {
          return response.data;
        });
    }

    return {
      getAuthors: getAuthors
    };
  }

  angular
    .module('authors')
    .service('AuthorsListSvc', AuthorsListSvc);

}());
