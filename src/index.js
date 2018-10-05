import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import WebFont from 'webfontloader';

import App from './App';
import * as serviceWorker from './serviceWorker';
import SurveyFormStore from './stores/surveyForm';

WebFont.load({
  google: {
    families: ['Gothic A1:100,200,300,400,500,600,700,800,900', 'sans-serif'],
  },
});

const surveyForm = new SurveyFormStore();

ReactDOM.render(
  <Provider surveyForm={surveyForm}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
