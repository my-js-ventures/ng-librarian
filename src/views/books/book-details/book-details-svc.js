export default class BookDetailsSvc {

  constructor($http) {

    this.$http = $http;
  }

  getBookDetails(id) {

    return this.$http
      .get('/api/books/' + id)
      .then(response => response.data);
  }
}
