import * as React from 'react';
import HomeHeader from './components/HomeHeader';
import {connect} from 'react-redux';
import {Store} from '../../types';
import actions from '../../store/actions/home';
import HomeSwiper from './components/HomeSwiper';
import HomeLessons from './components/HomeLessons';
import './index.less';
import {loadMore,downRefresh} from '../../utils';
interface Props {
    category:string,
    setCategory:any,
    sliders:string[],
    getSliders:any,
    lessons:any,
    getLessons:any,
    refreshLessons:any,
    changeSelectedIndex:any
}
interface State  {
    selectedIndex:number
}
class Home extends React.Component<Props,State>{
    state = {selectedIndex:0}
    changeSelectedIndex = (selectedIndex:number)=>{
        this.setState({selectedIndex});
    }
    mainContent:any
    componentDidMount(){
        if(this.props.sliders.length>0){
            this.mainContent.scrollTop = sessionStorage.getItem('homeScrollTop');
        }else{
            this.props.getSliders();
            this.props.getLessons();
        }
       
        loadMore(this.mainContent,this.props.getLessons);
        downRefresh(this.mainContent,this.props.refreshLessons);
    }
    componentWillUnmount(){
        sessionStorage.setItem('homeScrollTop',this.mainContent.scrollTop);
    }
    render(){
        let {category,setCategory,sliders,lessons,getLessons,refreshLessons} = this.props;
        return (
            <React.Fragment>
                <HomeHeader
                   category={category}
                   setCategory={setCategory}
                   refreshLessons={refreshLessons}
                />
                <div className="main-content" ref={element=>this.mainContent=element}>
                   <HomeSwiper sliders={sliders}/>
                    <HomeLessons
                      lessons = {lessons}
                      getLessons={getLessons}
                   />    
                </div>
            </React.Fragment>
        )
    }
}
export default connect(
    (state:Store):Store['home']=>state.home,
    actions
)(Home);