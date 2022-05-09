const express = require('express')
// const mysql = require('mysql')
// const router = express.Router()

const router = require('./router.ts')
// const mysql = require("./mysql.ts");

// 创建 服务器
const app = express()

// 1、
// // 配置数据库
// const db = mysql.createPool({
//   host: '127.0.0.1',
//   user: 'root',
//   password: '123456',
//   database: 'sustu_db_1'
// })

// // Mysql 命令
// const selectAll = "select * from users";

// router.get('/selectAll', (req, res) => {
//   db.query(selectAll, (err, results) => {
//     if (err) return console.log("Mysql 数据获取失败! !" + err);
//     res.send({
//       status: 0,
//       msg: "请求成功!",
//       data: results
//     })
//     return console.log(req)
//   });
// })

// 解决跨域问题
const cors = require('cors')
app.use(cors())

// 挂载 路由
app.use('/server', router)

// 启动 服务器
app.listen(8888, (req, res) => {
  console.log("http://127.0.0.1:8888/server  服务启动! ! !");
})