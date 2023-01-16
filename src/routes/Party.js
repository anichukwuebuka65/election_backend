const { handleQuery } = require("../databaseConn")
const router = require("express").Router()

router.get("/", handleQuery("SELECT * FROM party"))

module.exports = router