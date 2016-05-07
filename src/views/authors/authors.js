import author from './author/author.js';
import authorDetails from './author-details/author-details.js';
import authorsList from './authors-list/authors-list.js';
import routes from './routes.js';

const authors = {
  restrict: 'E',
  template: '<ui-view></ui-view>'
};

export default window.angular
  .module('authors', [
    author,
    authorDetails,
    authorsList
  ])
  .config(routes)
  .directive('authors', () => authors)
  .name;


