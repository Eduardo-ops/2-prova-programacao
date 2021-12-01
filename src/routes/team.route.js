const express = require('express')
const materialController = require('../controller/team.controller')

const router = express.Router()

router.get('/teams', materialController.listAll)

module.exports = router