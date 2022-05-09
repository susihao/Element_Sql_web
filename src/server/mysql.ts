const mysql = require('mysql')

// 配置数据库
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'sustu_db_1'
})
module.exports = db