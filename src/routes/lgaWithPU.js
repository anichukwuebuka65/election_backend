const { handleQuery } = require("../databaseConn")
const router = require("express").Router()

const query = `SELECT lga.lga_name,
lga.lga_id, 
polling_unit.polling_unit_name,
polling_unit.uniqueid 
FROM lga INNER JOIN polling_unit 
ON lga.lga_id = polling_unit.lga_id `

router.get("/", handleQuery(query))

module.exports = router