import React from 'react';
import 'atomsStyles/button.less';

export default class Button extends React.Component {
  render() {
  	var buttonClass="button "+this.props.buttonType;
    return (
      <div className={buttonClass}>
        <span className="text">{this.props.text}</span>
      </div>
    );
  }
}