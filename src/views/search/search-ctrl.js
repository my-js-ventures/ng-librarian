export default class SearchCtrl {

  constructor(SearchSvc) {

    SearchSvc.getSearchList()
      .then(list => this.list = list);

    this.search = this.search.bind(this);
  }

  static matchAccessionNumber(match, accessno, query) {

    return accessno ? match || accessno.toString().indexOf(query) !== -1 : match;
  }

  static matchRackNumber(match, rackno, query) {

    return rackno ? match || rackno.toLowerCase().indexOf(query) !== -1 : match;
  }

  search(row) {

    var query = (this.query || '').toLowerCase();

    var match = SearchCtrl.matchAccessionNumber(false, row.accessno, query);
    match = SearchCtrl.matchRackNumber(match, row.rackno, query);

    return match || row.name.toLowerCase().indexOf(query) !== -1;
  }
}
