const bookFilters = {
  restrict: 'E',
  templateUrl: './src/views/books/filters/filters.html'
};

export default window.angular
  .module('books.filters', [])
  .directive('bookFilters', () => bookFilters)
  .name;
