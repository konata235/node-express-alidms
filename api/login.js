// src/routes/login.js
const express = require('express');
const db = require('../db');

const router = express.Router();

// 查询 login 表中的所有用户
router.get('/login', (req, res) => {
  const query = 'SELECT id, name, password FROM login';
  db.query(query, (err, results) => {
    if (err) {
      console.error('查询失败:', err.stack);
      return res.status(500).json({ error: '数据库查询失败' });
    }
    res.json(results);
  });
});

module.exports = router;
