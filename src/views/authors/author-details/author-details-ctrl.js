export default class AuthorDetailsCtrl {

  constructor($stateParams, AuthorDetailsSvc) {

    AuthorDetailsSvc.getAuthorDetails($stateParams.id)
      .then(details => this.details = details);
  }
}
