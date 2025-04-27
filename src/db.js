// src/db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'konata.mysql.polardb.rds.aliyuncs.com',
  user: 'konata',
  password: '0d000721Q@Q',
  database: 'test999',
  port: 3306, // 默认 MySQL 端口
});

db.connect((err) => {
  if (err) {
    console.error('数据库连接失败:', err.stack);
    return;
  }
  console.log('数据库连接成功');
});

module.exports = db;
