const { Client } = require('pg');
const { stringify } = require('querystring');


// TODO environment variables
const dbConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'wealthdb',
    password: '1234abcd',
    port: 5432,
}

let Commands = {
    getTableNames: `
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema='public'
        AND table_type='BASE TABLE';
        `,
}

const getTablesNames = async(client) => {
    try {
        const response = await client.query(Commands.getTableNames);
        return(response.rows)
    } catch (error) {
        console.log(error)
    }
}

const tableNameList = async(client) => {
    const tables = await getTablesNames(client)
    let list = ''
    tables.forEach(table => {
        list += `${Object.values(table)}, `
    })
    const listNames = list.slice(0, -2)
    console.log(`tables found: ${listNames}`)
    return listNames;
}

const dropTableCommand = (tableNames) => {
    return `DROP TABLE IF EXISTS ${tableNames} CASCADE;`;
}

const dropTables = async(client, tables) => {
    try {
        const response = await client.query(dropTableCommand(tables));
        console.log(`tables deleted`);
    } catch (error) {
        console.log(error.stack);
    }
}

const burnItDown = async() => {
    const client = new Client(dbConfig);
    client.connect();
    const tables = await tableNameList(client)
    await dropTables(client, tables);
    client.end();
}

burnItDown();