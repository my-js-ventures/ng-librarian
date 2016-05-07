export default class SubjectDetailsSvc {

  constructor($http) {

    this.$http = $http;
  }

  getSubjectDetails(id) {

    return this.$http
      .get('/api/subjects/' + id)
      .then(response => response.data);
  }
}
