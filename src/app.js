// src/app.js
const express = require('express');
const loginRoutes = require('./routes/login');

const app = express();
const port = process.env.PORT || 3000;

// 中间件
app.use(express.json());

// 路由
app.use('/api', loginRoutes);

// 启动服务
app.listen(port, () => {
  console.log(`服务器已启动，监听端口 ${port}`);
});
