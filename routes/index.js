const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')
const productRouter = require('./product')
const userRouter = require('./user')


router.get('/', Controller.home) // Masuk ke home - Log In
router.post('/', Controller.validasi) // Masuk ke home - Log In
// router.get('/validasi', Controller.temp) // Masuk ke home - Log In
router.get('/logout', Controller.logout) // Redirect ke ke home
router.use(productRouter) // Akan ambil dari router di product
router.use(userRouter) // Akan ambil dari router di user


module.exports = router