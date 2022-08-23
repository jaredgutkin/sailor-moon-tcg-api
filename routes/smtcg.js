const express = require('express')
const router = express.Router()
const smtcgPd = require('../database/smtcg-pd')

const smtcgPdTotal = smtcgPd.length

router.get('/', (req, res) => {
    res.json(smtcgPd)
})

module.exports = router