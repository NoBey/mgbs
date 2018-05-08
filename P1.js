import React    from 'react';
import ReactDOM from 'react-dom';

export default  class P1 extends React.Component {
  render() {

    return (
      <div className={'bg'}>
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

       <p className={'zt1'} style={{zIndex:999, position: 'absolute', top: '58vh', left: '20vw'}}> 在物理学中</p>
       <p className={'zt2'} style={{zIndex:999, position: 'absolute', top: '64vh', left: '17vw'}}> 时间被认为是一种<a className={'zt1'}>特殊的纬度</a></p>
       <p className={'zt1'} style={{zIndex:999, position: 'absolute', top: '68vh', left: '30vw'}}> 而今天</p>
       <p className={'zt2'} style={{zIndex:999, position: 'absolute', top: '75vh', left: '19vw'}}><a className={'zt1'}>时间的运动</a> 即将越过 <a className={'zt1'}>特殊的纬度</a></p>

       <a className={'zt1 bt1'} style={{zIndex:999, position: 'absolute', top: '85vh', width: '100vw', textAlign: 'center'}}> 开始逆转</a>

      </div>
    );
  }
}
