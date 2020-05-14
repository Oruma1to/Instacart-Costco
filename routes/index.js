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

module.exports = router
