// src/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const loginRoutes = require('./routes/login'); // 引入登录路由

const app = express();
const port = process.env.PORT || 3000;

// 启用 CORS
app.use(cors());

// 解析 JSON 请求体
app.use(bodyParser.json());

// 使用登录路由
app.use('/api', loginRoutes); // 将 /api 路由挂载到 login 路由模块上

// 启动服务器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
