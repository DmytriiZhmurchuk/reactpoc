import React from 'react';
import 'moleculesStyles/content-horizontal.less';

export default class ContentHorizontal extends React.Component {
  render() {
    return (
      <div className="content-horizontal">
          {this.props.children}
      </div>
    );
  }
}