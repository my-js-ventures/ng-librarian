export default class AuthorsListSvc {

  constructor($http) {

    this.$http = $http;
  }

  getAuthors() {

    return this.$http
      .get('/api/authors')
      .then(response => response.data);
  }
}
