(function () {

  var angular = window.angular;

  function BooksListSvc($http) {

    function getBooks() {

      return $http.get('/api/books')
        .then(function (response) {
          return response.data;
        });
    }

    return {
      getBooks: getBooks
    };
  }

  angular
    .module('books')
    .service('BooksListSvc', BooksListSvc);

}());
