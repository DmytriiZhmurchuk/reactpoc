import React from 'react';
import 'atomsStyles/body-copy.less';

export default class BodyCopy extends React.Component {
  render() {
    return (
      <div className="body-copy">
        {this.props.text}
      </div>
    );
  }
}