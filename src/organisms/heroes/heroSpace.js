import React from 'react';
import ReactDOM from 'react-dom';
import {Suspense} from 'react';
import BodyCopy from 'atoms/bodyCopy/bodyCopy';
import Button from 'atoms/button/button';
import StyledButton from 'atoms/button/styled-button';
import Headline from 'atoms/headline/headline';
import ContentHorizontal from 'molecules/contentHorizontal/contentHorizontal';

export default class HeroSpace extends React.Component {
  handleClick(e){
    const LazyComponent = React.lazy(() => import('lazyLoadComponents/reactLazy'));
    ReactDOM.render(
      <Suspense fallback={<div>Загрузка...</div>}>
        <LazyComponent />
      </Suspense>,
      document.getElementById('lazy-components-container')
    );
  }
  clickHandler() {
    import("lazyLoadComponents/ESLazy").then(cmp => {
      let ESLazyComponent = cmp.default;
       ReactDOM.render(<ESLazyComponent/>,
        document.getElementById('lazy-components-container')
      );
    });
  }
  render() {
    let componentData = {
      headline:"Hero Space Headline Example",
      paragraph:"This is hero text paragraph Example",
      buttonText: "Click to use es6 lazy Load"
    }
    return (
    	<div className="container">
    		<div className="row">
    			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xlg-12">
			    	<div className="HeroSpace">
               <Headline text={componentData.headline}></Headline>
			         <ContentHorizontal>
                  <BodyCopy text={componentData.paragraph}></BodyCopy>
                  <Button clickHandler={this.clickHandler} text={componentData.buttonText} buttonType="primary"></Button>
                  <StyledButton onClick={(e) => this.handleClick(e)} primary={true}>Click to lazy load (React OOTB)</StyledButton>
               </ContentHorizontal> 
               <div id='lazy-components-container'></div>
			      </div>
			    </div>
		    </div>
    	</div>
    );
  }
}
