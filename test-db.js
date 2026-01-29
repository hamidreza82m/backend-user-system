require('dotenv').config();
const pool = require('./src/db');

async function main() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log(res.rows[0]);
  } catch (err) {
    console.error('DB ERROR:', err.message);
  } finally {
    await pool.end();
  }
}

main();