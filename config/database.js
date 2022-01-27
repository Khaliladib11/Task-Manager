const {Pool} = require('pg')

const dotenv = require('dotenv');
const { text } = require('express');
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
    console.log("Connec to Postgres database")
})

module.exports = {
    query: (text, params) => pool.query(text, params),
}