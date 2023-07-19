const express = require('express');
const app = express();
const port = 8000;
const BASE_URL = 'api/auth';
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
require('dotenv').config(); // 取 .env accessToken
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const post = [
  {
    username: 'Kai',
    password: '123',
  },
];

app.get('/posts', (req, res) => {
  res.json(post);
  // res.json(posts.filter((post) => post.username === req.user.username));
});

app.post(`/${BASE_URL}/login`, (req, res) => {
  const { username, password } = req.body;
  const user = { username, password };
  // jwt.sign => 生成 jwt token
  const authToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ authToken, user });
});

// app.post('/register', (req, res) => {
//   console.log(req.body);
// });
app.post(`/${BASE_URL}/token`, (req, res) => {
  const { Authorization } = req.body;
  res.json({ Authorization });
});

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`);
});
