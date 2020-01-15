import React from 'react';
import styled, { css } from 'styled-components'

const Headline = styled.h1`
  color: blue;
  font-weight:bold;
  margin-bottom: 20px;
`

export default class ReactLazyComponent extends React.Component {
  render() {
    return (
    	<div className="container">
    		<div className="row">
    			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xlg-12">
			    	<Headline>This is text from React Lazy Component</Headline>
			    </div>
		    </div>
    	</div>
    );
  }
}
