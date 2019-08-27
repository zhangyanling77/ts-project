import * as React from 'react';
import './index.less';
import SwiperItems from './SwiperItems';
import SwiperDots from './SwiperDots';
interface IProps{
  sliders:any
}
interface IState{
  selectedIndex:number
}
export default class Swiper extends React.Component<IProps,IState>{
  changeIndex= (selectedIndex:number)=>{
    (this.refs.swiperDots as any).changeIndex(selectedIndex);//类型转换
  }
  render(){
      return (
        <div className="home-swipers">
           <SwiperItems sliders={this.props.sliders}  changeIndex={this.changeIndex}/>
           <SwiperDots ref="swiperDots" sliders={this.props.sliders}/>
        </div>
      )
  }
}
