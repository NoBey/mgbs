import React    from 'react';
import ReactDOM from 'react-dom';

export default  class P1 extends React.Component {
  constructor(props) {
     super(props);
     // 设置 initial state
     this.state = {
         step: 1
     };

 }
  render() {

    return (
      <div style={{width: '100vw', height: '100vh'}}>
      <div className={'bg'}>
      </div>
       <div className={'clockwrap'}>
        <div className={'clock'} >
         <div className={'paint1'} />
         <div className={'paint2'} />
        </div>
        <div className={'clock4'} />
        <div className={'clock5'} />
        <div className={'clock6'} />
        <div className={'clock7'} />
        <div className={'clock8'} />
        <div className={'clock9'} />
        <div className={'clock10'} />
        <div className={'clock11'} />
        <div className={'clock12'} />
        <div className={'clock13'} />
        <div className={'c14'} />
        <div className={'c15'} />
       </div>

           <p key={5} className={'zt1'} style={{zIndex:999, position: 'absolute', top: '58vh', left: '20vw'}}> 在物理学中</p>
            <p key={6} className={'zt2'} style={{zIndex:999, position: 'absolute', top: '64vh', left: '17vw'}}> 时间被认为是一种<a className={'zt1'}>特殊的纬度</a></p>
            <p key={7} className={'zt1'} style={{zIndex:999, position: 'absolute', top: '68vh', left: '30vw'}}> 而今天</p>
            <p key={8} className={'zt2'} style={{zIndex:999, position: 'absolute', top: '75vh', left: '19vw'}}><a className={'zt1'}>时间的运动</a> 即将越过 <a className={'zt1'}>特殊的纬度</a></p>
            <a key={9} className={'zt1 bt1'} onClick={() => $.fn.fullpage.moveSlideRight()} style={{zIndex:999, position: 'absolute', top: '85vh', width: '100vw', textAlign: 'center'}}> 开始逆转</a>
      
      </div>
    );
  }
}
