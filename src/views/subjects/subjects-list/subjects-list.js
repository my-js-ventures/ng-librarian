import SubjectsListCtrl from './subjects-list-ctrl.js';
import SubjectsListSvc from './subjects-list-svc.js';

const subjectsList = {
  restrict: 'E',
  controller: SubjectsListCtrl,
  controllerAs: 'vm',
  templateUrl: './src/views/subjects/subjects-list/subjects-list.html'
};

export default window.angular
  .module('subjects.list', [])
  .service('SubjectsListSvc', SubjectsListSvc)
  .directive('subjectsList', () => subjectsList)
  .name;
