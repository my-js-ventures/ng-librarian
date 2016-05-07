export default class BooksListCtrl {

  constructor(BooksListSvc) {

    BooksListSvc.getBooks()
      .then(books => this.books = books);
  }
}
