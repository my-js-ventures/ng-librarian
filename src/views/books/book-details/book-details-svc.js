(function () {

  var angular = window.angular;

  function BookDetailsSvc($http) {

    function getBookDetails(id) {

      return $http.get('/api/books/' + id)
        .then(function (response) {
          return response.data;
        });
    }

    return {
      getBookDetails: getBookDetails
    };
  }

  angular
    .module('books')
    .service('BookDetailsSvc', BookDetailsSvc);

}());
