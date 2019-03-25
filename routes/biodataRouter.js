const express = require('express')
const router = express.Router()
const biodataController = require('../controller/biodataController')

router.get('/', biodataController.index)
router.get('/:id', biodataController.show)
router.post('/', biodataController.store)
router.put('/:id', biodataController.update)
router.delete('/:id', biodataController.destroy)
module.exports = router
