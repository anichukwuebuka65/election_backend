const express = require("express")
const app = express()
const pollUnitResultRoute = require("./src/routes/pollingUnitResult")
const totalResultRoute = require("./src/routes/totalResults")
const lgaWithPURoute = require("./src/routes/lgaWithPU")
const addPURoute = require("./src/routes/addPU")
const addScoreRoute = require("./src/routes/addScores")
const partyRoute = require("./src/routes/Party")
const cors = require("cors")

app.use(cors({
    origin: "https://election-project-gold.vercel.app"
}))
app.use(express.json())

app.use("/polling-unit-result",pollUnitResultRoute)
app.use("/total-results", totalResultRoute)
app.use("/lga-with-pu", lgaWithPURoute)
app.use("/add-polling-unit",addPURoute)
app.use("/add-score", addScoreRoute)
app.use("/party", partyRoute)
app.use("*", ( req, res) => res.status(400).json("invalid route") )


app.listen(process.env.PORT || 3000, () => console.log("listening for requests"))