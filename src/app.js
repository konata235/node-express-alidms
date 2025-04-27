const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const promisePool = require('./db');  // 引入修改后的数据库连接池

const app = express();

// 允许跨域请求
app.use(cors());
app.use(bodyParser.json());

// 登录接口
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // 使用连接池执行查询操作
    const [rows, fields] = await promisePool.execute(
      'SELECT * FROM users WHERE name = ? AND password = ?',
      [username, password]
    );

    if (rows.length > 0) {
      // 登录成功，返回用户信息
      res.json({ success: true, message: '登录成功', user: rows[0] });
    } else {
      // 登录失败，返回错误信息
      res.status(400).json({ success: false, message: '用户名或密码错误' });
    }
  } catch (err) {
    console.error('数据库查询失败：', err);
    // 数据库查询出错，返回错误信息
    res.status(500).json({ success: false, message: '数据库查询失败', error: err.message });
  }
});

// 其他接口（可以根据需要添加更多路由）

// 启动服务器并监听端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
