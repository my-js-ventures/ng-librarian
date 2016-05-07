import subject from './subject/subject.js';
import subjectDetails from './subject-details/subject-details.js';
import subjectsList from './subjects-list/subjects-list.js';
import routes from './routes.js';

const subjects = {
  restrict: 'E',
  template: '<ui-view></ui-view>'
};

export default window.angular
  .module('subjects', [
    subject,
    subjectDetails,
    subjectsList
  ])
  .config(routes)
  .directive('subjects', () => subjects)
  .name;
