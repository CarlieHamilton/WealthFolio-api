const currentDateTime = Date.now()/1000
const insertDefaultUser = `
    INSERT INTO users (
        username, password, email, created_on, last_login
    )
    VALUES (
        'test', 'test', 'test@test.com', to_timestamp(${currentDateTime}), to_timestamp(${currentDateTime})
    )
`;

module.exports.generateSql = () => `${insertDefaultUser}`