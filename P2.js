import React    from 'react';
import ReactDOM from 'react-dom';

export default  class P2 extends React.Component {
  render() {

    return (
      <div className={'bg2'}>
      <div className={'star1'}  style={{  width: '4px', height: '4px' , top: '6vh', left: '20vw'}} />
      <div className={'star1'}  style={{  width: '5px', height: '5px' , top: '7vh', left: '20vw'}} />
      <div className={'star1'}  style={{  width: '6px', height: '6px' , top: '7vh', left: '60vw'}} />
      <div className={'star1'}  style={{  width: '5px', height: '5px' , top: '7vh', left: '61vw'}} />
      <div className={'star1'}  style={{  width: '6px', height: '6px' , top: '10vh', left: '61vw'}} />
      <div className={'star1'}  style={{  width: '3px', height: '3px' , top: '4vh', left: '51vw'}} />
      <div className={'star1'}  style={{  width: '2px', height: '2px' , top: '22vh', left: '48vw'}} />
      <div className={'star1'}  style={{  width: '4px', height: '4px' , top: '16vh', left: '77vw'}} />
      <div className={'star1'}  style={{  width: '4px', height: '4px' , top: '8vh', left: '80vw'}} />
      <div className={'star1'}  style={{  width: '5px', height: '5px' , top: '7vh', left: '87vw'}} />
      <div className={'star1'}  style={{  width: '5px', height: '5px' , top: '6vh', left: '84vw'}} />
      <div className={'star1'}  style={{  width: '5px', height: '5px' , top: '30vh', left: '84vw'}} />
      <div className={'star1'}  style={{  width: '5px', height: '5px' , top: '32vh', left: '90vw'}} />
      <div className={'star1'}  style={{  width: '5px', height: '5px' , top: '32vh', left: '10vw'}} />
      <div className={'star1'}  style={{  width: '5px', height: '5px' , top: '29vh', left: '13vw'}} />
      <div className={'star1'}  style={{  width: '4px', height: '4px' , top: '23vh', left: '18vw'}} />
      <div className={'star1'}  style={{  width: '4px', height: '4px' , top: '21vh', left: '13vw'}} />

      <div className="star2" />
      <div className="star3" />
      <div className="star4" />

        <p className={'zt1'} style={{zIndex:999, position: 'absolute', top: '6vh', left: '20vw'}}> 时间逆转</p>
        <p className={'zt1'} style={{zIndex:999, position: 'absolute', top: '12vh', left: '23vw'}}><a className={'zt2'}>生物钟颠倒</a> 日落而作, 日出而息</p>
        <p className={'zt2'} style={{zIndex:999, position: 'absolute', top: '20vh', left: '26vw'}}> 再也不担心“熬夜”会猝死</p>
        <p className={'zt2'} style={{zIndex:999, position: 'absolute', top: '21.5vh', left: '40vw'}}> 但我开始留恋每一次<a className={'zt1'}>日出</a> </p>
      </div>
    );
  }
}
