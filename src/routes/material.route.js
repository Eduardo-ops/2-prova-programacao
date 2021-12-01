const express = require('express')
const materialController = require('../controller/material.controller')

const router = express.Router()

router.get('/', materialController.listAll)
router.post('/', materialController.save)
router.put('/:id', materialController.update)
router.delete('/:id', materialController.remove)

module.exports = router