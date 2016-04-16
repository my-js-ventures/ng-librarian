(function () {

  var angular = window.angular;

  function SubjectsListSvc($http) {

    function getSubjects() {

      return $http.get('/api/subjects')
        .then(function (response) {
          return response.data;
        });
    }

    return {
      getSubjects: getSubjects
    };
  }

  angular
    .module('subjects')
    .service('SubjectsListSvc', SubjectsListSvc);

}());
