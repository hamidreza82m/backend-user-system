require('dotenv').config();
const {createUser} = require('./src/models/user')
const pool = require('./src/db');

async function main() {
  try {
    const userId = await createUser('node2@test.com', 'hashed_password');
    console.log('User created with id:' , userId);
  } catch (err) {
    console.error(err.message);
  } finally {
    await pool.end();
  }
}

main();