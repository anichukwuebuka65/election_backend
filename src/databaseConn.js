const mysql = require("mysql2")
require("dotenv").config();

const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_USERNAME = process.env.DATABASE_USERNAME;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_HOST = process.env.DATABASE_HOST;

const connection = mysql.createConnection({
    host: DATABASE_HOST,
    user: DATABASE_USERNAME,
    database: DATABASE_NAME
})

function handleQuery(query) {
    return (req, res) => {
        connection.query(query,[req.body.id],(err , result) => {
        if (err) return console.log(err)
        res.status(200).json(result) ;
        })
    }   
}

module.exports = {connection, handleQuery} 
