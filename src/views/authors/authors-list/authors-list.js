import AuthorsListCtrl from './authors-list-ctrl.js';
import AuthorsListSvc from './authors-list-svc.js';

const authorsList = {
  restrict: 'E',
  controller: AuthorsListCtrl,
  controllerAs: 'vm',
  templateUrl: './src/views/authors/authors-list/authors-list.html'
};

export default window.angular
  .module('authors.list', [])
  .service('AuthorsListSvc', AuthorsListSvc)
  .directive('authorsList', () => authorsList)
  .name;
