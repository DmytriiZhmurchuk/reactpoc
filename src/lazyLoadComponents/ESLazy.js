import React from 'react';
import styled, { css } from 'styled-components'

const Headline = styled.h2`
  color: red;
  font-weight:bold;
  margin-bottom: 20px;
`

export default class ESLazyComponent extends React.Component {
  render() {
    return (
    	<div className="container">
    		<div className="row">
    			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xlg-12">
			    	<Headline>This is text for from Standard ES6 lazy load</Headline>
			    </div>
		    </div>
    	</div>
    );
  }
}
