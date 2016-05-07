export default class SubjectsListSvc {

  constructor($http) {

    this.$http = $http;
  }

  getSubjects() {

    return this.$http
      .get('/api/subjects')
      .then(response => response.data);
  }
}
