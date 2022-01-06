const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

router.get('/', userController.home)
router.get('/showuser', userController.showuser)
router.get('/updateuser', userController.updateuser)
router.get('/deleteuser', userController.deleteuser)

router.post('/insert', userController.insert)
router.post('/update', userController.update)
router.post('/delete', userController.delete)

module.exports = router