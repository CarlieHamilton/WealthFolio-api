const createSubcategoryBudgetsTable = `
CREATE TABLE IF NOT EXISTS subcategory_budgets (
    budget_date DATE PRIMARY KEY NOT NULL,
    subcategory_id UUID NOT NULL,
    amount BIGINT DEFAULT 0 NOT NULL,
    FOREIGN KEY (subcategory_id)
        REFERENCES subcategories (subcategory_id)
);
`;

module.exports.generateSql = () => `${createSubcategoryBudgetsTable}`