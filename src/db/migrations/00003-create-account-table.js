const createUserBudgets = `
CREATE TABLE IF NOT EXISTS user_budgets (
    user_id UUID NOT NULL,
    budget_id UUID NOT NULL,
    PRIMARY KEY (user_id, budget_id),
    FOREIGN KEY (user_id)
        REFERENCES users (user_id),
    FOREIGN KEY (budget_id)
        REFERENCES budgets (budget_id)
);
`;

module.exports.generateSql = () => `${createUserBudgets}`