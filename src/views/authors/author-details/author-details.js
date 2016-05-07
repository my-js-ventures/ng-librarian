import AuthorDetailsCtrl from './author-details-ctrl.js';
import AuthorDetailsSvc from './author-details-svc.js';

const authorDetails = {
  restrict: 'E',
  controller: AuthorDetailsCtrl,
  controllerAs: 'vm',
  templateUrl: './src/views/authors/author-details/author-details.html'
};

export default window.angular
  .module('authors.author.details', [])
  .service('AuthorDetailsSvc', AuthorDetailsSvc)
  .directive('authorDetails', () => authorDetails)
  .name;
