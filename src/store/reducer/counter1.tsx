import * as types from '../action-types';
import {Counter1} from '../../types';
import {Action} from '../actions/counter';
let initState:Counter1 = {
    number:0
}
export default function(state:Counter1=initState,action:Action){
   switch(action.type){
       case types.INCREMENT:
          return {number:state.number+1};
       case types.DECREMENT:
          return {number:state.number-1};
        default:
          return state;  
   }
}