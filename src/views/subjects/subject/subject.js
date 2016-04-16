(function () {

  var angular = window.angular;

  angular
    .module('subjects')
    .directive('subject', function () {
      return {
        restrict: 'E',
        controller: new Function(),
        controllerAs: 'vm',
        bindToController: {
          subject: '='
        },
        scope: true,
        templateUrl: './src/views/subjects/subject/subject.html'
      };
    });

}());
