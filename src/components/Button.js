import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component{
  // static contextType = LanguageContext; 

  // helper function to return value instead of having this in the render section
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen';
  }

  render() {
    // console.log(this.context);
    // const text = this.context === 'english' ? 'Submit' : 'Voorleggen'

    return (
      <ColorContext.Consumer>
        {color =>
          <button className={`ui button ${color}`}>
          <LanguageContext.Consumer>
            {/* {(value) => value === 'english' ? 'Submit' : 'Voorleggen' } */}
            {value => this.renderSubmit(value)}
          </LanguageContext.Consumer>
        </button>
        }
      </ColorContext.Consumer>
    );
  }
}

export default Button;