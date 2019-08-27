import * as React from 'react';
import './index.less';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {Store,Session} from '../../types';
let profileSrc  = require('../../images/profile.png');
interface Props{
    user:any
}
class Profile extends React.Component<Props>{
    render(){
        console.log('Profile render');
        return (
            <div className="profile">
                <div className="profile-bg">
                    <img src={profileSrc}/>
                    {
                        this.props.user?<a>{this.props.user.username}</a>:<Link to="/login">登陆</Link>
                    }
                </div>
            </div>
        )
    }
}
export default connect(
    (state:Store):Session=>state.session
)(Profile);