import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { Box, Button, Card, Image, Heading, Text } from 'rebass';

const GothicA1Text = props => (
  <Text {...props} fontFamily={'Gothic A1'}>
    {props.children}
  </Text>
);

@inject('surveyForm')
@observer
class SurveyForm extends Component {
  render() {
    const { surveyForm } = this.props;
    return (
      <Card>
        <form onSubmit={e => surveyForm.handleSurveyTextSubmit(e)}>
          <Heading fontSize={5}>
            <GothicA1Text>노클럽에게 하고 싶은 말 있으면 해라</GothicA1Text>
          </Heading>
          <Box>
            <input
              type="text"
              style={{
                width: '300px',
                height: '30px',
                fontSize: '20px',
                verticalAlign: 'middle',
              }}
              value={surveyForm.surveyFormText}
              onChange={e => surveyForm.handleTextInputChange(e)}
            />
            {/* <input type="submit" /> */}
            <Button
              bg="black"
              ml={2}
              css={{ verticalAlign: 'middle' }}
              onClick={e => surveyForm.handleSurveyTextSubmit(e)}
            >
              <GothicA1Text>Submit</GothicA1Text>
            </Button>
          </Box>
        </form>
        <Box>
          {surveyForm.surveys.map((survey, index) => (
            <GothicA1Text key={index} m={10} fontSize={3}>
              {survey}
            </GothicA1Text>
          ))}
        </Box>
      </Card>
    );
  }
}

export default SurveyForm;
