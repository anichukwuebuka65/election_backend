const {connection} = require("../databaseConn")
const router = require("express").Router()
const query = `INSERT INTO polling_unit (
    polling_unit_id, ward_id, lga_id, uniquewardid,
    polling_unit_number, polling_unit_name, polling_unit_description
    ) VALUES ( ?, ?, ?, ?, ?, ?, ?)`


router.post("/", (req, res) => {
    const {body} = req

    connection.query(query, 
        [body.unit_id, 
        body.ward_id, body.lga_id, 
        body.unique_ward_id, 
        body.polling_unit_number , 
        body.polling_unit_name, 
        body.polling_unit_description],
        (err, result) => {
            if(err) return res.status(400).send(err)
            res.status(200).json({id: result.insertId})
        })
})


module.exports = router