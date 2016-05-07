const subject = {
  restrict: 'E',
  scope: {
    subject: '='
  },
  templateUrl: './src/views/subjects/subject/subject.html'
};

export default window.angular
  .module('subjects.subject', [])
  .directive('subject', () => subject)
  .name;
