const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const app = express()
const Mock = require('mockjs')
app.use(bodyParser.json())
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Token,plantform')
  res.header('Content-Type', 'application/json;charset=utf-8')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  next()
})
//登录验证
app.post('/user/login', function (req, res) {
      let info = {
        success:0,
        message: '用户名密码错误',
        token: ''
      }
      let userdata = fs.readFileSync(__dirname + '/user.json', {
        encoding: 'utf-8'
      })

      userdata = JSON.parse(userdata)
      userdata.map(item => {
        if (item.username == req.body.username && item.password == req.body.password) {
          info.username=item.username
        info.success = 1
          info.message = '登录成功'
        }
      })
      if (info.success == 1) {
        info.token = jwt.sign(req.body, 'webCattle', {
          expiresIn: 60 * 60 * 3
        })
      }
      res.end(JSON.stringify(info))
})

//请求echarts数据
app.post('/getechartsdata',(req,res)=>{
  let data=[];
  for(var i=0;i<req.body.len;i++){
    data.push(Mock.Random.natural(0,1500))
  }
  res.end(JSON.stringify(data))
})
app.listen(9000, function () {
  console.log('listen 9000')
})
