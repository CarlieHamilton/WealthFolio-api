const createUnassignedFundsTable = `
CREATE TABLE IF NOT EXISTS unassigned_funds (
    budget_date DATE PRIMARY KEY NOT NULL,
    budget_id UUID NOT NULL,
    amount BIGINT DEFAULT 0 NOT NULL,
    FOREIGN KEY (budget_id)
        REFERENCES budgets (budget_id)
);
`;

module.exports.generateSql = () => `${createUnassignedFundsTable}`