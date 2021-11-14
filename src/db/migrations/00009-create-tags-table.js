const createTagsTable = `
CREATE TABLE IF NOT EXISTS tags (
    tag_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tag_name VARCHAR (100) NOT NULL,
    budget_id UUID NOT NULL,
    FOREIGN KEY (budget_id)
        REFERENCES budgets (budget_id)
);
`;

module.exports.generateSql = () => `${createTagsTable}`