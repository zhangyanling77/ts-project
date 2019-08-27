import * as types from '../action-types';
import {getSliders,getLessons} from '../../api/home';
interface setCategoryAction {
    type:string,
    payload:any
}
export type Action = setCategoryAction;
export default {
    setCategory(category):setCategoryAction{
       return {type:types.SET_CATEGORY,payload:category};
    },
    getSliders(){
        return function(dispatch,getState){
            getSliders().then(result=>{
               let {code,data} = result;
               if(code == 0){
                 dispatch({type:types.SET_HOME_SLIDERS,payload:data});
               }
            });
        }
    },
    getLessons(){
        return function(dispatch,getState){
            let {category,lessons:{offset,limit ,loading,hasMore}} = getState().home;
            //如果正在加载中则不要再次请求数据
            if(!loading && hasMore){
                //先把loading设置为true
                dispatch({type:types.SET_HOME_LESSONS_LOADING});
                getLessons(category,offset,limit).then(result=>{
                    let {code,data} = result;
                    if(code == 0){//向仓库派发动作 {list,hasMore}
                        dispatch({type:types.SET_HOME_LESSONS,payload:data});
                    }
                });
            }
            
        }
    },
    //重载加载第一页的课程列表
    refreshLessons(){
        return function(dispatch,getState){
            let {category,lessons:{offset,limit ,loading}} = getState().home;
            //如果正在加载中则不要再次请求数据
            if(!loading){
                //先把loading设置为true
                dispatch({type:types.SET_HOME_LESSONS_LOADING});
                getLessons(category,0,limit).then(result=>{//获取第一页的数据
                    let {code,data} = result;
                    if(code == 0){//向仓库派发动作 {list,hasMore}
                        dispatch({type:types.REFRESH_HOME_LESSONS,payload:data});
                    }
                });
            }
            
        }
    }
}