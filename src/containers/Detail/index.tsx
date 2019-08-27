import * as React from 'react';
import NavHeader from '../../components/NavHeader';
import {Redirect} from 'react-router-dom';
import './index.less';
interface Props  {
    location:any,
    history:any,
    match
}
export default class Detail extends React.Component<Props>{
  render(){
      let id = this.props.match.params.id;
      //如果状态里有，则直接渲染，如果没有则先获取ID，然后重新调用接口获取数据进行渲染
      return this.props.location.state?(
        <div className="lesson-detail">
            <NavHeader title="课程详情" history={this.props.history}/>
           <img src={this.props.location.state.lesson.poster}/>
           <p>{this.props.location.state.lesson.title}</p>
           <p>{this.props.location.state.lesson.price}</p>
       </div>
      ):<Redirect to="/"/>
  }
}