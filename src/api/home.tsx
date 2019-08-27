import {get} from './index';
export function getSliders(){
    return get('/api/sliders');
}
export function getLessons(category:string,offset:number=0,limit:number=5){
    return get(`/api/lessons/${category}?offset=${offset}&limit=${limit}`);
}