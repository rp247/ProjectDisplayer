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
    const select =
        'SELECT email, hash, people FROM people WHERE email = $1';
    const query = {
        text: select,
        values: [email],
    };
    const {rows} = await pool.query(query);
    if (rows.length == 0 ||
        !bcrypt.compareSync(pwd, rows[0].hash)) return undefined;
    return [rows[0].people.name, rows[0].people.avatar];
};

console.log(`Connected to database '${process.env.POSTGRES_DB}'`);
