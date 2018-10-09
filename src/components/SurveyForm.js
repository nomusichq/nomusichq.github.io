import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { Box, Button, Card, Image, Heading, Text } from 'rebass';

const GothicA1Text = props => (
  <Text {...props} fontFamily={'Gothic A1'}>
    {props.children}
  </Text>
);

const SurveyBox = styled.div`
  padding: 40px;
`;

const Input = styled.input`
  width: 50vw;
  height: 48px;
  font-size: 4vh;
  vertical-align: middle;
  border-style: none;
  border-bottom: solid 7px;
  padding-right: -10px;
`;

const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  vertical-align: middle;
  color: white;
  padding: 10px 20px;
  background: black;
  font-size: 2em;
  border: solid #fff;
`;

const WordCounter = styled.div`
  position: relative;
  margin-top: 4px;
  font-family: 'Gothic A1';
  font-weight: 400;
  font-size: 12px;
`;

@inject('surveyForm')
@observer
class SurveyForm extends Component {
  render() {
    const { surveyForm } = this.props;
    return (
      <SurveyBox>
        <form onSubmit={e => surveyForm.handleSurveyTextSubmit(e)}>
          <Heading fontSize={6}>
            <GothicA1Text>노클럽에게 하고 싶은 말</GothicA1Text>
          </Heading>
          <div>
            <Input
              type="text"
              value={surveyForm.surveyFormText}
              onChange={e => surveyForm.handleTextInputChange(e)}
            />
            <SubmitButton>Submit</SubmitButton>
            <WordCounter>
              {surveyForm.surveyFormText.length + '/140'}
            </WordCounter>
          </div>
        </form>
        <Box>
          {surveyForm.surveys.map((survey, index) => (
            <GothicA1Text key={index} mt={30} fontSize={5}>
              {survey} ({survey.length})
            </GothicA1Text>
          ))}
        </Box>
      </SurveyBox>
    );
  }
}

export default SurveyForm;
