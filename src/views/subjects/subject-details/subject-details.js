(function () {

  var angular = window.angular;

  function Controller(
    $stateParams,
    SubjectDetailsSvc
  ) {

    var vm = this;

    SubjectDetailsSvc.getSubjectDetails($stateParams.id)
      .then(function (details) {
        vm.details = details;
      });
  }

  angular
    .module('subjects')
    .directive('subjectDetails', function () {
      return {
        restrict: 'E',
        controller: Controller,
        controllerAs: 'vm',
        templateUrl: './src/views/subjects/subject-details/subject-details.html'
      };
    });

}());
