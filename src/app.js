const express = require('express');
const cors = require('cors');  // 引入 CORS 库
const mysql = require('mysql');
const app = express();

// 使用 CORS 中间件，允许所有来源访问
app.use(cors());

// 配置数据库连接
const db = mysql.createConnection({
  host: 'konata.mysql.polardb.rds.aliyuncs.com',  // 阿里云 MySQL 地址
  user: 'konata',  // 数据库用户名
  password: '0d000721Q@Q',  // 数据库密码
  database: 'test999'  // 数据库名
});

// 连接数据库
db.connect(err => {
  if (err) {
    console.error('数据库连接失败:', err.stack);
    return;
  }
  console.log('数据库连接成功');
});

// 设置路由，查询 login 表的数据
app.get('/api/login', (req, res) => {
  const sql = 'SELECT id, name, password FROM login';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('数据库查询失败:', err.stack);
      return res.status(500).json({ error: '数据库查询失败' });
    }
    
    // 返回查询结果
    res.json(results);
  });
});

// 启动服务器
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
