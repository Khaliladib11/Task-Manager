const {Pool} = require('pg')

const dotenv = require('dotenv');
dotenv.config();

const credentials = {
    user: "postgres",
    host: "localhost",
    database: "taskmanager",
    password: "khaliladib",
    port: 5432,
  };

const pool = new Pool(credentials)

pool.on('connect', () => {
    console.log("Connect to Postgres database")
})


module.exports = {
    async query(text, params){
        // invocation timestamp for the query method
        const start = Date.now()

        try{
            const res = await pool.query(text, params);
            // time elapsed since invocatio to execution
            const duration = Date.now() - start;

            console.log(
                'executed query',
                {text, duration, rows: res.rowCount}
            );
            return res;
        } catch(error){
            console.log('error in query', {text})
            throw error;
        }
    }
}