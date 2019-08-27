import * as React from 'react';
interface Props{
    sliders:string[]
}
interface State{
    selectedIndex:number
}
export default class SwiperDots extends React.Component<Props,State>{
    state = {selectedIndex:0}
    changeIndex = (selectedIndex:number)=>{
        this.setState({selectedIndex});
    }
    render(){
        let {sliders} = this.props;
        return (
           <div className="dots">
               {
                    sliders.map((item:string,index:number)=>(
                            <span key={index} className={"dot"+(this.state.selectedIndex==index?' active':'')}/>
                        ))
                   }
           </div>
        )
    }
}