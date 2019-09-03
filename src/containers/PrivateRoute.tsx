import * as React from 'react';
import {connect} from 'react-redux';
import {Store,Session} from '../types';
import {Redirect,Route} from 'react-router-dom';
interface Props {
    user:any,//当前登陆用户
    path:string,//匹配的路径
    component:any,//要渲染的组件
}
// 受保护的路由是一个高阶组件，并不提供界面，只是实现权限判断的
class PrivateRoute extends React.Component<Props>{
    render(){
      let {user,path,component:Component} = this.props;
      // console.log(this.props);
      // Route渲染组件有三种方式 1.component 2. render（推荐） 3. children
      return (
        <Route path={path} render={
            (props)=>user?<Component {...props}/>:<Redirect to="/login"/>
        }/>
      )
    }
}
export default connect(
    (state:Store):Session=>state.session
)(PrivateRoute)
