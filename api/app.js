// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const loginRoutes = require('./routes/login'); // 引入登录路由

const app = express();

app.use(cors());
app.use(bodyParser.json()); // 解析 JSON 请求体

// 使用 /api 路由处理登录
app.use('/api', loginRoutes); // 所有以 /api 开头的请求会交给 loginRoutes 来处理

// 根路由（可选）
app.get('/', (req, res) => {
    res.send('欢迎使用 API');
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
