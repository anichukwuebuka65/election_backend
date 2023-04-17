const { connection } = require("../databaseConn")
const router = require("express").Router()

const query = `INSERT INTO announced_pu_results (
    polling_unit_uniqueid, party_score, party_abbreviation,entered_by_user, date_entered, user_ip_address
    ) VALUES (?, ?, ?, ?, ?, ?)`

router.post("/", (req, res) => {
    
    const {PUId, scores, enteredBy} = req.body
    const arr = []

    if(!PUId || JSON.stringify(scores) == "{}" || !enteredBy) return
        
    for (let i in scores){
        arr.push([i.slice(0, 4), scores[i]])
    }
    runQueries(arr.length - 1)

    function runQueries(length) {
        if(length === 0) return res.status(200).json("success")
            connection.query(query, [PUId, arr[length][1], arr[length][0], enteredBy,new Date(), "192.168.1.114"], (err, result) => {
                if(err) {
                     console.log(err)
                    return res.status(500).end("an error occured")
                }
                runQueries(length - 1)
            })
       
    }
    
})   



module.exports = router