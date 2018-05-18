import React    from 'react';
import ReactDOM from 'react-dom';
import img5 from './img/51.png'

export default  class P2 extends React.Component {
  render() {

    return (
      <div className={'wrap4'}>
      <div className={'bg4'}>
      </div>

      <p className={'zt1'} style={{zIndex:999, position: 'absolute', top: '5vh', left: '25vw'}}> 时间逆转</p>
      <p className={'zt2'} style={{zIndex:999, position: 'absolute', top: '11vh', left: '35vw'}}> 爸妈不再 <a className={'zt1'}>老去</a></p>

      <p className={'zt2'} style={{zIndex:999, position: 'absolute', top: '15.5vh', left: '27vw'}}> <a className={'zt1'}>病痛</a> 慢慢消失</p>
      <p className={'zt2'} style={{zIndex:999, position: 'absolute', top: '20.5vh', left: '22vw'}}> 不再有<a className={'zt1'}>戒烟解酒</a>却不再有<a className={'zt1'}>依赖</a> </p>
      <p className={'zt1'} style={{zIndex:999, position: 'absolute', top: '25vh', left: '33vw'}}>只爱身边的你</p>
      <img style={{zIndex:999, position: 'absolute', top: '30vh', left: '-18vw',width: '130vw'}} src={img5}/>
      </div>
    );
  }
}
