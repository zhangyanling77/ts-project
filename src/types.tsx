//定义仓库的状态
export interface Store {
    home:Home,
    session:Session
}
export interface Lesson  {
    id: number,
    title: string,
    video:string,
    poster:string,
    url: string,
    price: string,
    category:string
};
export interface Home {
    category:string,//当前分类之外
    sliders:string[],//轮播图
    lessons:{
        hasMore:boolean,//是否还有更多数据
        list:Lesson[],//课程列表
        offset:number,//便移量
        limit:number,//每页的条数
        loading:false//如果当前正在加载数据，则会有一个加载动画
    }
}
export interface Session{
    user:{username:string,password:string,id:number},
    success:string,
    error:string
}
export interface Counter1{
    number:number
}
export interface Counter2{
    number:number
}