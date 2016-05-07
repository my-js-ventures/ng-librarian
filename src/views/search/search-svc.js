export default class SearchSvc {

  constructor($http) {

    this.$http = $http;
  }

  getSearchList() {

    return this.$http
      .get('/api/search')
      .then(response => response.data);
  }
}
