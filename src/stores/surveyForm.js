import { observable, action } from 'mobx';

export default class SurveyFormStore {
  @observable
  surveyFormText = '';

  @observable
  surveys = [];

  @action
  handleTextInputChange(e) {
    this.surveyFormText = e.target.value;
  }

  @action
  handleSurveyTextSubmit(e) {
    if (this.surveyFormText) {
      this.surveys.push(this.surveyFormText);
      this.surveyFormText = '';
    }
    e.preventDefault();
  }
}
