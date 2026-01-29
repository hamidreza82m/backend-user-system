const pool = require('../db');

async function createUser(email , passwordHash) {
    const userResult = await pool.query(
        `INSERT INTO users (email , password_hash)
        values ($1 , $2)
        RETURNING id`,
        [email , passwordHash]
    );
    
    const userId =userResult.rows[0].id;

    //گرفتن role user
    const roleResult = await pool.query(
        `SELECT id FROM roles WHERE name = $1`,
        ['user']
    );

    const roleId = roleResult.rows[0].id;

    await pool.query(
        `INSERT INTO user_roles(user_id , role_id)
         VALUES ($1 , $2)`,
         [userId, roleId]
    );
    return userId;
}
module.exports = { createUser };