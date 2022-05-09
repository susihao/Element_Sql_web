# 服务端 （连接 MySql 并 实现接口）

### 主入口 index.ts
1、导入 express，./router.ts， cos  模块

2、创建服务器  app

```
const app = express()
```

3、挂载 路由(router,cos) 

```
app.use('serve'<路由前缀>,router)
```

4、使用 cos 解决跨域问题

```
app.use(cos)          
```

5、启动服务器
```
app.listen('8888'<使用的接口>,(req,res)=>{
  console.log('127.0.0.1:8888端口启动！！')
})
```


### 配置数据库 mysql.ts
1、导入 mysql 

2、使用 createPool({}) 配置数据库
```
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'sustu_db_1'
})
```

### 输入数据库操作语句的字符串 sqlMap.ts

### 配置路由 router.ts
1、导入 express ，mysql.ts，sqlMay.ts

2、实例化路由 

```
const router_1 = express_1.Router()
```

3、挂载路由

```
router_1.get<请求方式>('.selectAll'<请求路径>,(req,res)=>{
  <请求函数>
  db_1.query(sqlMap_1.users.searchAll,(err,results)=>{
    <获取数据库数据>
    if(err) return console.log("Mysql 数据获取失败！")
    <向客户端发送 数据>
    res.send({
      status：0，
      msg:"请求成功",
      data:results
    })
    return console.log("selectAll)
  })
})
```