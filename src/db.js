const mysql = require('mysql2');  // 使用 mysql2 库

// 创建数据库连接
const connection = mysql.createConnection({
  host: 'konata.mysql.polardb.rds.aliyuncs.com',  // 数据库主机地址
  user: 'konata',  // 数据库用户名
  password: '0d000721Q@Q',  // 数据库密码
  database: 'test999',  // 数据库名称
});

// 连接数据库
connection.connect((err) => {
  if (err) {
    console.error('数据库连接失败:', err);
  } else {
    console.log('数据库连接成功');
  }
});

// 导出数据库连接对象
module.exports = connection;
