import SubjectDetailsCtrl from './subject-details-ctrl.js';
import SubjectDetailsSvc from './subject-details-svc.js';

const subjectDetails = {
  restrict: 'E',
  controller: SubjectDetailsCtrl,
  controllerAs: 'vm',
  templateUrl: './src/views/subjects/subject-details/subject-details.html'
};

export default window.angular
  .module('subjects.subject.details', [])
  .service('SubjectDetailsSvc', SubjectDetailsSvc)
  .directive('subjectDetails', () => subjectDetails)
  .name;
