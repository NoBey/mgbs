import React    from 'react';
import ReactDOM from 'react-dom';

export default  class P2 extends React.Component {
  render() {

    return (
      <div className={'bg3'}>
      <p className={'zt1'} style={{zIndex:999, position: 'absolute', top: '6vh', left: '30vw'}}> 时间逆转</p>
      <p className={'zt2'} style={{zIndex:999, position: 'absolute', top: '13vh', left: '20vw'}}> 臭氧层自我修复 </p>
      <p className={'zt2'} style={{zIndex:999, position: 'absolute', top: '16vh', left: '34vw'}}> 北极熊不再担心 <a className={'zt1'}>失去冰川</a></p>
       <p className={'zt2'} style={{zIndex:999, position: 'absolute', top: '21vh', left: '20vw'}}> 我也不再担心一年只会剩<a className={'zt1'}>两季</a> </p>
      </div>
    );
  }
}
