const { Router } = require('express')
const controllers = require('../controllers')
const restrict = require('../helpers/index')

const router = Router()

router.get('/', (req, res) => res.send('There is no food here'))

router.get('/products', controllers.getProducts)
router.get('/products/:id', controllers.getProduct)
router.post('/products', restrict, controllers.createProduct)
router.put('/products/:id', restrict, controllers.updateProduct)
router.delete('/products/:id', restrict, controllers.deleteProduct)

//Testing new arrivals
router.get('/search/newarrivals', controllers.newArrivals)
//Testing Search
router.get('/searching/:term', controllers.searchWord)

//Routes for the user
router.get('/users', controllers.getUsers)
router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.post('/verify', controllers.verifyUser)


module.exports = router
