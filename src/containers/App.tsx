import * as React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './Home';
import Mime from './Mime';
import Profile from './Profile';
import '../common/index.less';
import Tab from '../components/Tab';
import Detail from './Detail';
import Login from './Login';
import Reg from './Reg';
import PrivateRoute from './PrivateRoute';
export default class App extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route  path="/detail/:id" component={Detail}/>
                    <Route  path="/login" component={Login}/>
                    <Route  path="/reg" component={Reg}/>
                    <PrivateRoute path="/mime" component={Mime}/>
                    <PrivateRoute path="/profile" component={Profile}/>
                </Switch>
                <Tab/>
            </React.Fragment>
        )
    }
}