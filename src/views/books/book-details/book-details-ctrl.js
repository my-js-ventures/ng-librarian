export default class BookDetailsCtrl {

  constructor($stateParams, BookDetailsSvc) {

    BookDetailsSvc.getBookDetails($stateParams.id)
      .then(details => {

        const subject = {
          subjectid: details.subjectid,
          name: details.subject
        };

        this.details = details;
        this.subject = subject;
        this.authors = details.authors;
      });
  }
}
