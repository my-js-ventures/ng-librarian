const searchItem = {
  restrict: 'E',
  scope: {
    item: '='
  },
  templateUrl: './src/views/search/search-item/search-item.html'
};

export default window.angular
  .module('search.item', [])
  .directive('searchItem', () => searchItem)
  .name;
