const {Client} = require('pg')

const dotenv = require('dotenv')
dotenv.config();

const credentials = {
    user: "postgres",
    host: "localhost",
    database: "taskmanager",
    password: "khaliladib",
    port: 5432,
  };

const client = new Client(credentials)

client.connect();

query = "SELECT * FROM tasks;" 

client.query(query)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
          console.error(err);
      })
      .finally(() => {
          client.end();
      })
