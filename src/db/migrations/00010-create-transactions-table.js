const createTransactionsTable = `
CREATE TABLE IF NOT EXISTS transactions (
    transaction_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    transaction_date TIMESTAMPTZ NOT NULL,
    payee_id UUID NOT NULL,
    category_id UUID NOT NULL,
    account_id UUID NOT NULL,
    tag_id UUID NOT NULL,
    outflow BIGINT,
    inflow BIGINT,
    transaction_status TEXT DEFAULT 'unchecked' NOT NULL,
    FOREIGN KEY (payee_id)
        REFERENCES payees (payee_id),
    FOREIGN KEY (category_id)
        REFERENCES subcategories (subcategory_id),
    FOREIGN KEY (tag_id)
        REFERENCES tags (tag_id),
    FOREIGN KEY (account_id)
        REFERENCES accounts (account_id),
    CONSTRAINT check_transaction_status check (transaction_status in ('unchecked', 'checked', 'locked'))
);
`;

module.exports.generateSql = () => `${createTransactionsTable}`