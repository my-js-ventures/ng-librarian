export default class SubjectsListCtrl {

  constructor(SubjectsListSvc) {

    SubjectsListSvc.getSubjects()
      .then(subjects => this.subjects = subjects);
  }
}
