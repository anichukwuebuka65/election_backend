const { handleQuery } = require("./databaseConn")
const router = require("express").Router()

const query = `SELECT polling_unit.uniqueid, 
SUM(announced_pu_results.party_score) AS sum
FROM polling_unit INNER JOIN announced_pu_results
ON polling_unit.uniqueid = announced_pu_results.polling_unit_uniqueid
WHERE lga_id = ? 
GROUP BY polling_unit.uniqueid`

router.post("/", handleQuery(query))

module.exports = router