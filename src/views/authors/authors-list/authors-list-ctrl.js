export default class AuthorsListCtrl {

  constructor(AuthorsListSvc) {

    AuthorsListSvc.getAuthors()
      .then(authors => this.authors = authors);
  }
}
