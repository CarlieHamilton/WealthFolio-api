// import "dotenv/config.js";
import { migrate } from 'postgres-migrations';
import pg, { Client } from 'pg';

// TODO:
// change client to pool
// use environment variables
// export for api routes

// export const db = new Pool({
//     host: process.env.POSTGRES_HOST,
//     port: process.env.POSTGRES_PORT,
//     database: process.env.POSTGRES_DB,
//     user: process.env.POSTGRES_USER,
//     password: process.env.POSTGRES_PASSWORD
// });

interface DbConfig {
    database: string,
    user: string,
    password: string,
    host: string,
    port: number
}

export const dbConfig: DbConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'wealthdb',
    password: '1234abcd',
    port: 5432,
}

export const client = () => {
    const client = new Client(dbConfig);
    client.connect();
}

export const runDatabaseMigrations = async() => {
    // Note: when passing a client, it is assumed that the database already exists
    const client = new Client(dbConfig) // or a Pool, or a PoolClient
    await client.connect()
    try {
      await migrate({client}, 'src/db/migrations')
    } finally {
      await client.end()
    }
  }

// const pool = new Pool();

// export default = {
//   query: (text, params, callback) => {
//     return pool.query(text, params, callback)
//   },
// }