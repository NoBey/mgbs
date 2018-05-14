import React    from 'react';
import ReactDOM from 'react-dom';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import P1 from './P1.js'
import P2 from './P2.js'
import P3 from './P3.js'
import P4 from './P4.js'

const app = document.querySelector('#app');

class Example extends React.Component {
  componentDidMount(){
    $(function(){
    $('#fullpage').fullpage();
});
  }
  render() {

    return (
      <div>
      <div id="fullpage">
          <div className="section">
          <P1 />
          </div>
          <div className="section">
              <div className="slide"><P2 /> </div>
              <div className="slide"><P3 /> </div>
              <div className="slide"><P4 /> </div>
          </div>

      </div>

      </div>
    );
  }
}

ReactDOM.render(<Example/>, app);
