import * as types from '../action-types';
import {Counter2} from '../../types';
import {Action} from '../actions/counter';
let initState:Counter2 = {
    number:0
}
export default function(state:Counter2=initState,action:Action){
   switch(action.type){
       case types.INCREMENT:
          return {number:state.number+1};
       case types.DECREMENT:
          return {number:state.number-1};
        default:
          return state;  
   }
}