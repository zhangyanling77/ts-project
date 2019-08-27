import * as React from 'react';
import './index.less';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
const logo = require('../../../../images/logo.png');
interface IProps{
    category:string,
    setCategory:any,
    refreshLessons:any
}
interface IState{
   showList:boolean
}
export default class HomeHeader extends React.Component<IProps,IState>{
    state = {
        showList:false
    }
    handleClick = ()=>{
        this.setState({showList:!this.state.showList});
    }
    ///修改分类
    changeCategory = (event)=>{
        let category = event.target.dataset.category;//获取当前最新的分类
        this.setState({showList:false},()=>{
            this.props.setCategory(category);//向仓库中新的分类
            this.props.refreshLessons();
        });
    }
    render(){
        let {showList} = this.state;
        let {category} = this.props;
        return (
            <div className="home-header">
                <div className="header-menu">
                    <img src={logo} alt="logo"/>
                    <div onClick={this.handleClick}>
                        {
                            showList?<i className="iconfont icon-guanbi"></i>: <i className="iconfont icon-uilist"></i>
                        }
                    </div>
                </div>
                <TransitionGroup>
                    {
                        showList&&(
                            <CSSTransition
                               classNames="fade"
                               timeout={500}
                            >
                                <ul className="menu-list" onClick={this.changeCategory}>
                                    <li className={category=='react'?'active':''} data-category="react">React分类</li>
                                    <li  className={category=='vue'?'active':''} data-category="vue">Vue分类</li>
                                </ul>
                            </CSSTransition>
                        )
                    }
                </TransitionGroup>
            </div>
        )
    }
}