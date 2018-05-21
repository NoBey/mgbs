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
      <div style={{width: '100vw', height: '100vh', top: 0, position: 'absolute'}}>
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
        <p  className={'zt1'} style={{zIndex:999, position: 'absolute', top: '58vh', width:'100%', textAlign: 'center'}}>时间逆转</p>
         <p  className={'zt1'} style={{zIndex:999, position: 'absolute', top: '63vh', width:'100%', textAlign: 'center'}}>一切会不会越来越好?</p>
         <p  className={'zt1'} style={{zIndex:999, position: 'absolute', top: '68vh', width:'100%', textAlign: 'center'}}>你是否希望时光逆转?</p>
         <p className={'zt1'} style={{zIndex:999, position: 'absolute', top: '75vh', width:'100%', display: 'flex', justifyContent: 'space-around'}}>
           <a onClick={()=> $.fn.fullpage.moveTo(1,0)} className={'bt1'}>Yes</a>
           <a onClick={() => $.fn.fullpage.moveSlideRight()} className={'bt1'}>No</a>
         </p>



  {


}
      </div>
    );
  }
}
