import * as React from 'react';
import NavHeader from '../../components/NavHeader';
import './index.less';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Store,Session} from '../../types';
import actions from '../../store/actions/session';
let loginSrc = require('../../images/profile.png');
interface Props {
    history:any,
    login:any
}
class Login extends React.Component<Props> {
   login = ()=>{
        let username = (this.refs.username as any).value;
        let password = (this.refs.password as any).value;
        this.props.login({username,password});
   }
   render(){
       return (
           <div className="login">
                <NavHeader title="登陆" history={this.props.history}/>
                <div className="login-logo">
                    <img src={loginSrc}/>
                </div>
                <input type="text" placeholder="手机号" ref="username"/>
                <input type="text" placeholder="密码" ref="password"/>
                <Link to="/reg">前往注册</Link>
                <button onClick={this.login}>登&emsp;录</button>
           </div>
       )
   }
}
export default connect(
    (state:Store):Session=>state.session,
    actions
)(Login);
