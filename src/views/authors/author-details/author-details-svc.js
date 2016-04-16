(function () {

  var angular = window.angular;

  function AuthorDetailsSvc($http) {

    function getAuthorDetails(id) {

      return $http.get('/api/authors/' + id)
        .then(function (response) {
          return response.data;
        });
    }

    return {
      getAuthorDetails: getAuthorDetails
    };
  }

  angular
    .module('authors')
    .service('AuthorDetailsSvc', AuthorDetailsSvc);

}());
