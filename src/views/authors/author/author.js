const author = {
  restrict: 'E',
  scope: {
    author: '='
  },
  templateUrl: './src/views/authors/author/author.html'
};

export default window.angular
  .module('authors.author', [])
  .directive('author', () => author)
  .name;
