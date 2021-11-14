const createUserTable = `
CREATE TABLE IF NOT EXISTS users (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username varchar (50) UNIQUE NOT NULL,
    password varchar (50) NOT NULL,
    email varchar (255) UNIQUE NOT NULL,
    created_on TIMESTAMPTZ NOT NULL,
    last_login TIMESTAMPTZ
);
`;

module.exports.generateSql = () => `${createUserTable}`