export default class BooksListSvc {

  constructor($http) {

    this.$http = $http;
  }

  getBooks() {

    return this.$http.get('/api/books')
      .then(response => response.data);
  }
}
