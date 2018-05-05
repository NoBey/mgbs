import React    from 'react';
import ReactDOM from 'react-dom';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import P1 from './P1.js'

const app = document.querySelector('#app');

class Example extends React.Component {
  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      // sectionPaddingTop:    '50px',
      // sectionPaddingBottom: '50px',
      arrowNavigation:      true
    };

    return (
      <div>

        <SectionsContainer className="container" {...options}>
          <Section className="custom-section" verticalAlign="true" color="#69D2E7">
          <P1 />
          </Section>
          <Section color="#A7DBD8">Page 2</Section>
          <Section color="#E0E4CC">Page 3</Section>
        </SectionsContainer>
      </div>
    );
  }
}

ReactDOM.render(<Example/>, app);
