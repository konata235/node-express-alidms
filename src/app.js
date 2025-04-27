const express = require('express');
const cors = require('cors');
const db = require('./db'); // 你的数据库连接模块

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 根路由
app.get('/', (req, res) => {
  res.send('欢迎使用 API 服务，请访问 /api/login 获取用户信息');
});

// 登录接口
app.get('/api/login', (req, res) => {
  const sql = 'SELECT id, name, password FROM login';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('数据库查询失败:', err);
      return res.status(500).json({ error: '数据库查询失败' });
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
