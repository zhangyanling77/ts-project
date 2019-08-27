import * as types from '../action-types';
import {push} from 'connected-react-router';
import {reg,login} from '../../api/session';
interface setSessionAction {
    type:string,
    payload:any
}

export type Action = setSessionAction;
export default {
    reg(user){
        return function(dispatch,getState){
           reg(user).then(result=>{
               if(result.code == 0){
                    //dispatch({type:types.SET_SESSION,payload:result.data});
                    dispatch(push('/login'));
               }
           });
        }
    },
    login(user){
        return function(dispatch,getState){
            login(user).then(result=>{
               if(result.code == 0){
                    dispatch({type:types.SET_SESSION,payload:result.data});
                    dispatch(push('/profile'));
               }
           });
        }
    }
}