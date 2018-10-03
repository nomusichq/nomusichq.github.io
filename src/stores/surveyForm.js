import { observable, action } from 'mobx';

export default class SurveyFormStore {
  @observable
  surveyFormText = '';

  @action
  handleTextInputChange(e) {
    this.surveyFormText = e.target.value;
  }

  @action
  handleSurveyTextSubmit(e) {
    console.log(this.surveyFormText);
    this.surveyFormText = '';
    e.preventDefault();
  }
}
