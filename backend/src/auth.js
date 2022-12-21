const jwt = require('jsonwebtoken');
const db = require('./db');

exports.login = async (req, res) => {
    console.log('AUTH LOGIN AUTH LOGIN AUTH LOGIN')
  const {email, password} = req.body;
  const user = await db.login(email, password);
  if (user) {
    const accessToken = jwt.sign(
      {email: email},
      process.env.SEC, {
        expiresIn: '30m',
        algorithm: 'HS256',
      });
    res.status(200)
      .json({name: user[0], accessToken: accessToken, avatar: user[1]});
  } else {
    res.status(401).send('Invalid credentials');
  }
};

exports.check = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.SEC, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

