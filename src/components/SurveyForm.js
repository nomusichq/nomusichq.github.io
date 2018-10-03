import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer
class SurveyForm extends Component {
  @observable
  surveyFormText = '';

  @action
  handleTextInputChange = e => {
    this.surveyFormText = e.target.value;
  };

  @action
  handleSurveyTextSubmit = e => {
    console.log(this.surveyFormText);
    this.surveyFormText = '';
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSurveyTextSubmit}>
        <label>Hey No Club!</label>
        <input
          type="text"
          value={this.surveyFormText}
          onChange={this.handleTextInputChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default SurveyForm;
