(function () {

  var angular = window.angular;

  function SubjectDetailsSvc($http) {

    function getSubjectDetails(id) {

      return $http.get('/api/subjects/' + id)
        .then(function (response) {
          return response.data;
        });
    }

    return {
      getSubjectDetails: getSubjectDetails
    };
  }

  angular
    .module('subjects')
    .service('SubjectDetailsSvc', SubjectDetailsSvc);

}());
