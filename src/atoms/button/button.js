import React from 'react';
import 'atomsStyles/button.less';

export default class Button extends React.Component {
  render() {
  	var buttonClass="button "+this.props.buttonType;
    return (
      <span className={buttonClass}  onClick={this.props.clickHandler}>
        <span className="text">{this.props.text}</span>
      </span>
    );
  }
}