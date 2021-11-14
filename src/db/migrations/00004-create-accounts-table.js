const createAccountsTable = `
CREATE TABLE IF NOT EXISTS accounts (
    account_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    budget_id UUID NOT NULL,
    account_name VARCHAR (100) NOT NULL,
    balance BIGINT DEFAULT 0 NOT NULL,
    is_tracked BOOLEAN DEFAULT TRUE NOT NULL,
    is_open BOOLEAN DEFAULT TRUE NOT NULL,
    created_on TIMESTAMPTZ NOT NULL,
    FOREIGN KEY (budget_id)
        REFERENCES budgets (budget_id)
);
`;

module.exports.generateSql = () => `${createAccountsTable}`