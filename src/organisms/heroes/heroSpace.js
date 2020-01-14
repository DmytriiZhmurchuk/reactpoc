import React from 'react';
import BodyCopy from 'atoms/bodyCopy/bodyCopy';
import Button from 'atoms/button/button';
import Headline from 'atoms/headline/headline';
import ContentHorizontal from 'molecules/contentHorizontal/contentHorizontal';

export default class HeroSpace extends React.Component {
  render() {
    let componentData = {
      headline:"Hero Space Headline Example",
      paragraph:"This is hero text paragraph Example",
      buttonText: "ReadMore"
    }
    return (
    	<div className="container">
    		<div className="row">
    			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xlg-12">
			    	<div className="HeroSpace">
               <Headline text={componentData.headline}></Headline>
			         <ContentHorizontal>
                  <BodyCopy text={componentData.paragraph}></BodyCopy>
                  <Button text={componentData.buttonText} buttonType="primary"></Button>
               </ContentHorizontal> 
			      </div>
			    </div>
		    </div>
    	</div>
    );
  }
}