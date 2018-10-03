import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('surveyForm')
@observer
class SurveyForm extends Component {
  render() {
    const { surveyForm } = this.props;
    return (
      <form onSubmit={e => surveyForm.handleSurveyTextSubmit(e)}>
        <label>Hey No Club!</label>
        <input
          type="text"
          value={surveyForm.surveyFormText}
          onChange={e => surveyForm.handleTextInputChange(e)}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default SurveyForm;
