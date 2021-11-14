# WealthFolio-api
Personal finance and wealth management

# Setup

Clone/fork repo

Need a psql database. Currently need to imput details into `./src/db/index.ts`

Run server with `npm run dev`

On startup of server it will set up database tables.

If you want to reset your database, run `node ./src/db/dropTables.js` - warning this will delete all your tables and data