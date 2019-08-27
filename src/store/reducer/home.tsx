import * as types from '../action-types';
import {Home} from '../../types';
import {Action} from '../actions/home';
let initState:Home = {
   category:'all',//默认是全部分类
   sliders:[],// 存放轮播图数据
   lessons:{
      hasMore:true,
      list:[],
      offset:0,
      limit:5,
      loading:false
   }
}
export default function(state:Home=initState,action:Action){
   switch(action.type){
       case types.SET_CATEGORY:
          return {...state,category:action.payload};
       case types.SET_HOME_SLIDERS:
          return {...state,sliders:action.payload};
       case types.SET_HOME_LESSONS_LOADING:
          return {...state,lessons:{...state.lessons,loading:true}};    
       case types.SET_HOME_LESSONS:
          return {...state,lessons:{...state.lessons,
            hasMore:action.payload.hasMore,
            list:[...state.lessons.list,...action.payload.list],
            offset:state.lessons.offset+action.payload.list.length,
            loading:false
         }};
      case types.REFRESH_HOME_LESSONS:
         return {...state,lessons:{...state.lessons,
           hasMore:action.payload.hasMore,
           list:action.payload.list,//直接覆盖
           offset:action.payload.list.length,//直接覆盖
           loading:false
        }};            
       default:
          return state;  
   }
}