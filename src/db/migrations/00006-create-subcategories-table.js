const createSubCategoriesTable = `
CREATE TABLE IF NOT EXISTS subcategories (
    subcategory_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID NOT NULL,
    subcategory_name VARCHAR (100) NOT NULL,
    total_budgeted BIGINT DEFAULT 0 NOT NULL,
    FOREIGN KEY (category_id)
        REFERENCES categories (category_id)
);
`;

module.exports.generateSql = () => `${createSubCategoriesTable}`