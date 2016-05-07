export default class SubjectDetailsCtrl {

  constructor($stateParams, SubjectDetailsSvc) {

    SubjectDetailsSvc.getSubjectDetails($stateParams.id)
      .then(details => this.details = details);
  }
}
