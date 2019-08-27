export function loadMore(element:HTMLDivElement,callback:any):void{
    //防抖
    let timer;
    element.addEventListener('scroll',()=>{
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            let clientHeight = element.clientHeight;
            let scrollHeight = element.scrollHeight;
            let scrollTop = element.scrollTop;
            if(clientHeight+scrollTop+20>=scrollHeight){
                callback();
            }
        },500);
    });
}
//下拉刷新
export function downRefresh(element:HTMLDivElement,callback:any){
    let startY;//按下那一刻起始位置的纵坐标
    let distance;
    let originalTop=element.offsetTop;//最早的初始值
    let startTime;
    let $timer;
    element.addEventListener('touchstart',(event)=>{
        //originalTop == element.offsetTop &&
        if( element.scrollTop == 0){
            startY=event.touches[0].pageY;//开始移动的时候的纵坐标
            startTime = Date.now();//记录一下开始的时间
            element.addEventListener('touchmove',touchMove);
            element.addEventListener('touchend',touchEnd);
        }
        function touchMove(event){
            //if(Date.now() - startTime>50){
                //startTime = Date.now();
                let pageY = event.touches[0].pageY;
                if(pageY>startY){
                    distance = pageY - startY;
                    element.style.top = originalTop+distance+'px';
                }else{
                    element.removeEventListener('touchmove',touchMove);
                    element.removeEventListener('touchend',touchEnd);
                }
            //}
        }
        function touchEnd(event){
            element.removeEventListener('touchmove',touchMove);
            element.removeEventListener('touchend',touchEnd);
            if(!$timer){
                $timer = setInterval(()=>{
                    if(element.offsetTop - originalTop<1){
                        element.style.top = originalTop+'px';
                        clearInterval($timer);
                        $timer = null;
                    }else{
                        element.style.top = (element.offsetTop-1)+'px';
                    }
                },13);
                if(distance>10){callback()}
            }
        }
    });
}