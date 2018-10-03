import React, { Component } from 'react';
import axios from 'axios';
import { observer, observable, action } from 'mobx';

@observer
export default class SurveyForm extends Component {
  @observable
  surveyInputText = '';

  @action
  handleChange = e => {
    this.setState({ surveyInputText: e.target.value });
  };

  @action
  handleTextInputSubmit = e => {
    console.log(this.state.surveyInputText);
    e.preventDefault();
    this.setState({ surveyInputText: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleTextInputSubmit}>
          <label>
            건의사항
            <input
              type="text"
              name="name"
              value={this.surveyInputText}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
