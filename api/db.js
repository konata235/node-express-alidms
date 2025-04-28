const mysql = require('mysql2');

// 创建连接池（连接池会自动管理多个连接）
const pool = mysql.createPool({
  host: 'konata.mysql.polardb.rds.aliyuncs.com',    // 数据库主机
  user: 'konata',  // 数据库用户名
  password: '0d000721Q@Q',  // 数据库密码
  database: 'konata',    // 数据库名
  waitForConnections: true,      // 如果没有可用连接，等待可用连接
  connectionLimit: 10,           // 最大连接数
  queueLimit: 0                  // 连接队列的最大值（0表示无限制）
});

// 使用 promise API，方便在异步环境中操作
const promisePool = pool.promise();

// 导出数据库连接池的 promise 接口
module.exports = promisePool;
