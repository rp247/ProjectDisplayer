const {Pool} = require('pg');
const bcrypt = require('bcrypt');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

exports.login = async (email, pwd) => {
    return 'hi';
};

console.log(`Connected to database '${process.env.POSTGRES_DB}'`);
