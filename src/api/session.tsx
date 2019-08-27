import {get,post} from './index';
export function reg(payload){
    return post('/api/reg',payload);
}

export function login(payload){
    return post('/api/login',payload);
}
