const createBudgetTable = `
CREATE TABLE IF NOT EXISTS budgets (
    budget_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    budget_name VARCHAR (100) NOT NULL,
    created_on TIMESTAMPTZ NOT NULL
);
`;

module.exports.generateSql = () => `${createBudgetTable}`