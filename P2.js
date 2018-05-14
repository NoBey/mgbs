import React    from 'react';
import ReactDOM from 'react-dom';

export default  class P2 extends React.Component {
  render() {

    return (
      <div className={'bg2'}>
      <p className={'zt1'} style={{zIndex:999, position: 'absolute', top: '6vh', left: '20vw'}}> 时间逆转</p>
      <p className={'zt1'} style={{zIndex:999, position: 'absolute', top: '11vh', left: '23vw'}}><a className={'zt2'}>生物钟颠倒</a> 日落而作, 日出而息</p>
      <p className={'zt2'} style={{zIndex:999, position: 'absolute', top: '18vh', left: '26vw'}}> 再也不担心“熬夜”会猝死</p>
       <p className={'zt2'} style={{zIndex:999, position: 'absolute', top: '20vh', left: '40vw'}}> 但我开始留恋每一次<a className={'zt1'}>日出</a> </p>
      </div>
    );
  }
}
