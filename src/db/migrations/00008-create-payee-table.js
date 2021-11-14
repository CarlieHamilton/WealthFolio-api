const createPayeeTable = `
CREATE TABLE IF NOT EXISTS payees (
    payee_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    payee_name VARCHAR (100) NOT NULL,
    budget_id UUID NOT NULL,
    default_category UUID NOT NULL,
    FOREIGN KEY (default_category)
        REFERENCES subcategories (subcategory_id),
    FOREIGN KEY (budget_id)
        REFERENCES budgets (budget_id)
);
`;

module.exports.generateSql = () => `${createPayeeTable}`