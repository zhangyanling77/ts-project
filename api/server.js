let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let app = express();
app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin',"http://localhost:8080");
  res.setHeader('Access-Control-Allow-Headers',"Content-Type");
  res.setHeader('Access-Control-Allow-Methods',"GET,POST,OPTIONS");
  res.setHeader('Access-Control-Allow-Credentials',"true");//允许跨域传递cookie
  if(req.method == 'OPTIONS'){
      res.end("");
  }else{
      next();
  }
});
app.use(bodyParser.json());
app.use(session({
  resave:true,
  saveUninitialized:true,
  secret:'zhufeng'
}));
let sliders = require('./mock/sliders');
app.get('/api/sliders',function(req,res){
  res.json({
      code:0,//0表示成功 非0表示失败
      data:sliders
  });
});
//根据课程的分类获取课程的列表
// http://localhost:3000/api/lessons/vue?offset=0&limit=5
let lessons = require('./mock/lessons');
app.get('/api/lessons/:category',function(req,res){
  let currentLessons = JSON.parse(JSON.stringify(lessons));
  let category = req.params.category;//当前分类的名称
  let offset = isNaN(req.query.offset)?0:parseInt(req.query.offset);//偏移量
  let limit = isNaN(req.query.limit)?5:parseInt(req.query.limit);//每页条数
  if(category &&category != 'all'){
    currentLessons = currentLessons.filter(item=>item.category == category);
  }
  //1=0,5 2=5,5+5=10  取得当前页的数据
  let list  = currentLessons.slice(offset,offset+limit);
  let hasMore = currentLessons.length> offset+limit;//后面是否还有更多
  setTimeout(function(){
    res.json({
      code:0,
      data:{list,hasMore}
    });
  },1000);
});
app.listen(3000);
let users = [];
app.post('/api/reg',function(req,res){
  let user = req.body;//{username:'18910000000',password:'123456'}
  user.id = users.length>0?users[users.length-1].id+1:1;
  users.push(user);
  res.json({
    code:0,
    data:{
      user,
      success:'注册成功'
    }
  });
});
app.post('/api/login',function(req,res){
  let user = users.find(item=>item.username == req.body.username && item.password == req.body.password);
  if(user){
    //把登陆成功的用户存放到会话中去
    req.session.user = user;
    res.json({
      code:0,
      data:{
        user,
        success:'登陆成功'
      }
    });
  }else{
    res.json({
      code:1,
      data:{
        error:'登陆失败'
      }
    });
  }
 
});