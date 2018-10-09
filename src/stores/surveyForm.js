import { observable, action } from 'mobx';
import { EditorState, RichUtils } from 'draft-js';

export default class SurveyFormStore {
  @observable
  shouldShowCover = false;
  surveyFormText = '';
  surveys = [];
  editorState = EditorState.createEmpty();
  windowSize = {
    width: '',
    height: '',
  };
  // @observable

  // @observable

  @action
  handleCover() {
    this.shouldShowCover = !this.shouldShowCover;
  }
  handleTextInputChange(e) {
    if (e.target.value.length <= 140) {
      this.surveyFormText = e.target.value;
    }
  }
  handleEditorInputChange(editorState) {
    this.editorState = editorState;
  }
  handleSurveyTextSubmit(e) {
    if (this.surveyFormText && this.surveyFormText.length <= 140) {
      this.surveys.push(this.surveyFormText);
      this.surveyFormText = '';
    }
    e.preventDefault();
  }
  handleKeyCommnad(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.handleEditorInputChange(newState);
      return 'handled';
    }
    return 'not handled';
  }
  getCurrentWindowSize() {
    this.windowSize.width = window.innerWidth;
    this.windowSize.height = window.innerHeight;
  }
}
