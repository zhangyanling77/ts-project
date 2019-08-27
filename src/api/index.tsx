
// /api/sliders  http://localhost:8080/api/sliders
const BASE_API = 'http://localhost:3000';
export function get(url:string){
   return fetch(BASE_API+url,{
      method:'GET',
      credentials:'include'//前台要加上这个参数，才能在跨域的时候传入cookie
   })
   .then(res=>res.json());//{code:0,data:[]}
}
export function post(url:string,payload){
   return fetch(BASE_API+url,{
      method:'POST',
      credentials:'include',
      body:JSON.stringify(payload),
      headers:{
         'Content-Type':'application/json'
      }
   })
   .then(res=>res.json());//{code:0,data:[]}
}