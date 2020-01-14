import React from 'react';

export default class Headline extends React.Component {
  render() {
    return (
      <div className="headline {this.props.headlineType}">
      	{this.props.text}
      </div>
    );
  }
}