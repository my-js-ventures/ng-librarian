(function () {

  var angular = window.angular;

  function Controller(SubjectsListSvc) {

    var vm = this;

    SubjectsListSvc.getSubjects()
      .then(function (subjects) {
        vm.subjects = subjects;
      });

  }

  angular
    .module('subjects')
    .directive('subjectsList', function () {
      return {
        restrict: 'E',
        controller: Controller,
        controllerAs: 'vm',
        templateUrl: './src/views/subjects/subjects-list/subjects-list.html'
      };
    });

}());
