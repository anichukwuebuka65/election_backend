const mysql = require("mysql")
require("dotenv").config();

const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_USERNAME = process.env.DATABASE_USERNAME;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_HOST = process.env.DATABASE_HOST;

const connection = mysql.createConnection({
    host: DATABASE_HOST,
    user: DATABASE_USERNAME,
    database: DATABASE_NAME,
    password:DATABASE_PASSWORD
})

connection.connect()

function handleQuery(query) {
    return (req, res) => {


        connection.query(query,[req.body.id],(err , result) => {
        if (err) { 
            return res.status(500).json("server error")
        }
        res.status(200).json(result) ;
        })

    }   
}

module.exports = {connection, handleQuery} 
