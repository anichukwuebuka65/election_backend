const { handleQuery } = require("../databaseConn")
const routes = require("express").Router()
const query = "SELECT party_score, party_abbreviation FROM announced_pu_results WHERE polling_unit_uniqueid = ?"

routes.post("/", handleQuery(query))

module.exports = routes 