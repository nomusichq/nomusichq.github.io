import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Bar extends Component {
  @observable
  screenRotation = '';
  @observable
  windowSize = {
    width: '',
    height: '',
    rotateDeg: '',
    scrollBarX: '',
    scrollBarY: '',
  };

  @action
  getScreenRotation = () => {
    if ('onorientationchange' in window) {
      window.addEventListener(
        'orientationchange',
        () => (this.screenRotation = !this.screenRotation)
      );
    }
  };

  @action
  getCurrentWindowSize = () => {
    let compensate = null;
    let rotateDeg = null;
    compensate = 0.9 - window.innerWidth / 2000;
    rotateDeg =
      (Math.atan(window.innerWidth / window.innerHeight) * 180) / Math.PI -
      compensate;
    this.windowSize = {
      width: Math.floor(window.innerWidth),
      height: Math.floor(window.innerHeight),
      rotateDeg,
      scrollBarY: window.innerHeight - document.body.clientHeight,
      scrollBarX: window.innerWidth - document.body.clientWidth,
    };
  };
  componentDidMount = () => {
    this.getCurrentWindowSize();
    window.addEventListener('resize', this.getCurrentWindowSize);
  };
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.getCurrentWindowSize);
  };
  render() {
    const {
      width,
      height,
      rotateDeg,
      scrollBarX,
      scrollBarY,
    } = this.windowSize;
    const style = {
      overflow: 'hidden',
      width: '20px',
      height: `${Math.floor(
        Math.sqrt(
          Math.pow(height - scrollBarY - 20, 2) +
            Math.pow(width - scrollBarX - 20, 2)
        )
      ) - 2}px`,
      background: 'black',
      position: 'fixed',
      top: '10px',
      left: '2px',
      transformOrigin: 'center top',
      transform: `rotate(-${rotateDeg}deg)`,
    };
    return <div style={style} />;
  }
}
export default Bar;
