const express_1 = require('express')
// const mysql = require('mysql')
const db_1 = require('./mysql.ts')
const sqlMap_1 = require('./sqlMap.ts')

const router_1 = express_1.Router()


// 依 db.ts 模板创建数据库
// const db = mysql.createConnection(db_mode)
// db.connect()

// Mysql 命令

// 挂载路由

// 用户     **************************************
// 1、  获取 所有数据 
router_1.get('/selectAll', (req, res) => {
  db_1.query(sqlMap_1.users.searchAll, (err, results) => {
    if (err) return console.log("Mysql 数据获取失败! !" + err);
    res.send({
      status: 0,
      msg: "请求成功!",
      data: results
    })
    return console.log("selectAll");

  });
})

// 2、  删除 数据
router_1.get('/delete', (req, res) => {
  const id = req.query.id
  // console.log(req.url);
  // console.log(req.query);
  db_1.query(sqlMap_1.users.delete, id, (err, results) => {
    if (err) return console.log("Mysql delete 数据处理失败! !" + err);
    res.send({
      status: 0,
      msg: "请求成功!",
      data: results
    })
    return console.log("deleteData")
  });
})
// 3、  更新 数据
router_1.post('/update', (req, res) => {
  const id = req.query.id
  const name = req.query.name
  const gender = req.query.gender

  db_1.query(sqlMap_1.users.update, [name, gender, id], (err, results) => {
    if (err) return console.log("Mysql update 数据处理失败! !" + err);
    res.send({
      status: 0,
      msg: "请求成功!",
      data: results
    })
    return console.log("update")
  });
})
//  4、 添加 数据
router_1.post('/add', (req, res) => {
  // 传递得参数 获取数据 （parmas）
  // console.log(req.query.name);
  const id = req.query.id
  const name = req.query.name
  const gender = req.query.gender


  // console.log(req.url);
  // console.log(req.query);
  db_1.query(sqlMap_1.users.add, [id, name, gender], (err, results) => {
    if (err) return console.log("Mysql add 数据处理失败! !" + err);
    res.send({
      status: 0,
      msg: "请求成功!",
      data: results
    })
    return console.log("add")
  });
})

// 生活计划     **************************************
//  5、  获取 所有数据 agency
router_1.get('/selectAllAgency', (req, res) => {
  db_1.query(sqlMap_1.users.searchAllAgency, (err, results) => {
    if (err) return console.log("Mysql 数据 生活数据 获取失败! !" + err);
    res.send({
      status: 0,
      msg: "请求成功!",
      data: results
    })
    return console.log("selectAllAgency");
  });
})
//  6、  删除 数据
router_1.get('/deleteAgency', (req, res) => {
  const id = req.query.id
  db_1.query(sqlMap_1.users.deleteAgency, id, (err, results) => {
    if (err) return console.log("Mysql deleteAgency 数据处理失败! !" + err);
    res.send({
      status: 0,
      msg: "请求成功!",
      data: results
    })
    return console.log("deleteAgency")
  });
})
//  7、  更新 数据
router_1.post('/updateAgency', (req, res) => {
  const id = req.query.id
  const agency_name = req.query.agency_name
  const agency_content = req.query.agency_content
  const agency_date = req.query.agency_date
  const agency_type = req.query.agency_type
  const agency_degree = req.query.agency_degree
  db_1.query(sqlMap_1.users.updateAgency, [agency_name, agency_content, agency_date, agency_type, agency_degree, id], (err, results) => {
    if (err) return console.log("Mysql updateAgency 数据处理失败! !" + err);
    res.send({
      status: 0,
      msg: "请求成功!",
      data: results
    })
    return console.log("updateAgency")
  });
})
//  4、 添加 数据
router_1.post('/addAgency', (req, res) => {
  // 传递得参数 获取数据 （parmas）
  // console.log(req.query.name);
  const id = req.query.id
  const agency_name = req.query.agency_name
  const agency_content = req.query.agency_content
  const agency_date = req.query.agency_date
  const agency_type = req.query.agency_type
  const agency_degree = req.query.agency_degree
  db_1.query(sqlMap_1.users.addAgency, [id, agency_name, agency_content, agency_date, agency_type, agency_degree], (err, results) => {
    if (err) return console.log("Mysql addAgency 数据处理失败! !" + err);
    res.send({
      status: 0,
      msg: "请求成功!",
      data: results
    })
    return console.log("addAgency")
  });
})


module.exports = router_1 