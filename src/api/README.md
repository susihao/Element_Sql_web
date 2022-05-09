# 客户端 (axios,async await)

### 客户端请求 代理  request.ts
1、导包 axios 
2、实例化 代理 
```
const service = axios.creaye({
  baseURL:'url',
  timeout:5000 <超时时间>
})
```
3、处理 服务端发送的数据<数据库>  响应请求拦截器
```
service.interceptors.response.use(req)=>{
  const{data} = req.data
  return data
}
```

### 定义基本数据信息接口 user.ts,agency.ts
```
1、user
  id,name,gender
2、agency
  id,agency_name,agency_content,agency_date,agency_type,agency_degree
```

### 发送客户端请求 axios.ts
1、导包 request，interface.ts
2、创建导出对象： $sql
3、从客户端发送请求
```
    用户
    selectAllData       获取所有数据 
    deleteData(id)      删除数据
    addData(user)       添加数据
    updateData(user)    更新数据
    生活数据
    selectAllagency     获取所有数据
    deleteAgency(id)    删除数据
    addAgency(agency)   添加数据
    updateAgency(agency)更新数据
```
``` 
GET 请求
const deleteData =(id:Number)=>{
  return request({
    url:'/server/selectAll'   <完整后缀,要加上index.ts 挂载 router 是配置的默认路径>
    method:'GET'              <方法名>
    params:{
      id   (id:id)            <传递参数>
    }
  })
}
```
```
POST 请求
const updateData = (user: user) => {
  return request({
    url: '/server/update',
    method: 'POST',
    params: user
  })
}
```

### 使用 async await 方法封装axios 异步请求   sqlFun,ts
1、导包 $sql，user
2、创建导出对象： sqlFun
3、封装请求方法:  
```
      用户
      aStAll                获取所有数据
      dtData(id)            删除数据
      addData(user)         添加数据
      updateData(user)      更新数据
      生活数据
      aStAllAgency          获取所有数据
      dtDataAgency(id)      删除数据
      addDataAgency(user)   添加数据
      updateDataAgency(user)更新数据
```
```
async function aStAll(){
  return await $sql.selectAllData()
}
```
```
async funciton addData(user:user){
  return await $sql.addData(user)
}
```

### 处理 从数据库获取的时间格式 filterDay.ts
#####  数据库记录的时间 与 取出来的时间不一致 是由于出入数据库的记录时间点不一致

