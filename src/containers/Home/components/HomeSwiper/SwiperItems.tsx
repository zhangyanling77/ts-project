import * as React from 'react';
import './index.less';
import * as ReactSwipe from 'react-swipe';
interface IProps{
  sliders:any,
  changeIndex:any
}

export default class SwiperItems extends React.Component<IProps>{
  render(){
      let swipeOptions = {
        auto: 1000,
        continuous: true,
        callback:(selectedIndex:number)=>{
            this.props.changeIndex(selectedIndex);
        }
      }
      return (
        <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
           {
             this.props.sliders.map((item:string,index:number)=>(
               <div key={index}>
                 <img src={item}/>
               </div>
             ))
           }
           </ReactSwipe>
      )
  }
}