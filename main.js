import React    from 'react';
import ReactDOM from 'react-dom';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import P1 from './P1.js'
import P2 from './P2.js'
import P3 from './P3.js'
import P4 from './P4.js'
import P5 from './P5.js'

const app = document.querySelector('#app');

class Example extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
         step: 1,
         dot: 0
     };

 }
  componentDidMount(){
    var that = this
    $(function(){
    var el = $('#fullpage').fullpage({
      loopHorizontal: false,
      slidesNavigation: false,
      controlArrows: false,
      onSlideLeave: (...a) => {
        that.setState({dot: a[4]})
      }
    });
});
  }
  render() {

    return (
      <div>
      <div id="fullpage">

          <div className="section">
              <div className="slide"><P1 /> </div>
              <div className="slide"><P2 /> </div>
              <div className="slide"><P3 /> </div>
              <div className="slide"><P4 /> </div>
              <div className="slide"><P5 /> </div>
          </div>

      </div>
      {
       <div style={{display:'flex', justifyContent: 'center', position: 'absolute', top: '90vh', width: '100vw'}}>

           {
             [1,2,3,4,5].map(a => <div key={'k'+a} className={this.state.dot === (a-1) ? 'dot2' : 'dot1'}/>)
           }
        </div>
      }

      </div>
    );
  }
}

ReactDOM.render(<Example/>, app);
