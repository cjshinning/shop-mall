var express = require('express');
var router = express.Router();
var User = require('./../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/test', function(req, res, next) {
  res.send('test');
});

router.post('/login', function (req, res) {
  var param = {
    userName:req.body.userName,
    userPwd:req.body.userPwd
  }

  User.findOne(param, function(err,doc){
    if(err){
      res.json({
        status: '1',
        msg:err.message
      })
    }else{
      if(doc){
        res.cookie('userId',doc.userId,{
          path: '/',
          maxAge: 1000*60*60
        })
        res.cookie('userName',doc.userName,{
          path: '/',
          maxAge: 1000*60*60
        })
        res.json({
          status: '0',
          msg: '',
          result: {
            userName: doc.userName
          }
        })
      }else{
        res.json({
          status:'1',
          msg:'账户密码错误',
          result:''
        });
      }
    }
  })
});

// 登出接口
router.post('/logout', function(req,res,next){
  res.cookie('userId','',{
    path: '/',
    maxAge: -1
  })
  res.json({
    status: '0',
    msg: '',
    result: ''
  })
})

// 检测是否登录
router.get('/checkLogin', function(req,res,next){
  if(req.cookies.userId){
    res.json({
      status: '0',
      msg: '',
      result: req.cookies.userName
    })
  }else{
    res.json({
      status: '1',
      msg: '未登录',
      result: ''
    })
  }
})

// 购物车列表查询
router.get('/cartList', function(req,res,next){
  let userId = req.cookies.userId;
  User.findOne({userId: userId}, function(err, doc){
    if(err){
      res.json({
        status: '1',
        msg:err.message
      })
    }else{
      res.json({
        status: '0',
        msg: '',
        result: doc.cartList
      })
    }
  })
})

// 删除购物车
router.post('/cartDel', function(req,res,next){
  let userId = req.cookies.userId,
      productId = req.body.productId;

  User.update({
    userId: userId
  },{
    $pull: {
      'cartList': {
        'productId': productId
      }
    }
  }, function(err, doc){
    if(err){
      res.json({
        status: '1',
        msg:err.message
      })
    }else{
      res.json({
        status: '0',
        msg: '',
        result: 'suc'
      })
    }
  })
})

// 修改商品数量
router.post('/editCart', function(req,res,next){
  let userId = req.cookies.userId,
    productId = req.body.productId,
    productNum = req.body.productNum,
    checked = req.body.checked;
  User.update({
    "userId": userId,
    "cartList.productId": productId
  },{
    "cartList.$.productNum": productNum,
    "cartList.$.checked": checked
  }, function(err, doc){
    if(err){
      res.json({
        status: '1',
        msg:err.message
      })
    }else{
      res.json({
        status: '0',
        msg: '',
        result: 'suc'
      })
    }
  })
})

router.post('/editCheckAll', function(req,res,next){
  let userId = req.cookies.userId,
      checkAll = req.body.checkAll?'1':'0';

  User.findOne({userId: userId}, function(err, doc){
    if(err){
      res.json({
        status: '1',
        msg:err.message
      })
    }else{
      if(doc){
        doc.cartList.forEach(item=>{
          item.checked = checkAll;
        })
        doc.save(function(err1, doc1){
          if(err){
            res.json({
              status: '1',
              msg:err1.message
            })
          }else{
            res.json({
              status: '0',
              msg: '',
              result: 'suc'
            })
          }
        })
      }
    }
  })
})

module.exports = router;
