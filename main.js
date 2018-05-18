import React    from 'react';
import ReactDOM from 'react-dom';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import P1 from './P1.js'
import P2 from './P2.js'
import P3 from './P3.js'
import P4 from './P4.js'

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
      onLeave: (one, two, type)=>{
        if(type == 'up' && two == 1)return false
        that.setState({step: 2})
      },
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
          <P1 />
          </div>
          <div className="section">
              <div className="slide"><P2 /> </div>
              <div className="slide"><P3 /> </div>
              <div className="slide"><P4 /> </div>
          </div>

      </div>
      {
        (this.state.step === 2) ? <div style={{display:'flex', justifyContent: 'center', position: 'absolute', top: '90vh', width: '100vw'}}>

           {
             [1,2,3].map(a => <div key={'k'+a} className={this.state.dot === (a-1) ? 'dot2' : 'dot1'}/>)
           }
          </div> : null
      }

      </div>
    );
  }
}

ReactDOM.render(<Example/>, app);
