-- جدول users
create table if not exists users(
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- جدول ROLES
CREATE TABLE IF NOT EXISTS roles(
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
);

-- جدول user_roles
CREATE TABLE IF NOT EXISTS user_roles(
    user_id int REFERENCES users(id),
    role_id int REFERENCES roles(id),
    PRIMARY KEY (user_id,role_id)
);

-- داده اولیه roles
INSERT INTO roles(name)
VALUES ('user'),('admin')
ON CONFLICT (name) DO NOTHING;

