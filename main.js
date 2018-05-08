import React    from 'react';
import ReactDOM from 'react-dom';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import P1 from './P1.js'
import P2 from './P2.js'
import P3 from './P3.js'
import P4 from './P4.js'

const app = document.querySelector('#app');

class Example extends React.Component {
  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['section1', 'section2', 'section3', 'section4'],
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
          <Section className="custom-section" verticalAlign="true" color="#f5f5f5">
          <P1 />
          </Section>
          <Section color="#f5f5f5">
          <P2 />
          </Section>
          <Section color="#f5f5f5">
          <P3 />
          </Section>
          <Section color="#f5f5f5">
          <P4 />
          </Section>
        </SectionsContainer>
      </div>
    );
  }
}

ReactDOM.render(<Example/>, app);
