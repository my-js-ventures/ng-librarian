export default class AuthorDetailsSvc {

  constructor($http) {

    this.$http = $http;
  }

  getAuthorDetails(id) {

    return this.$http
      .get('/api/authors/' + id)
      .then(response => response.data);
  }
}
