const express = require('express')
const router = express.Router()
const reviewsController = require('../controllers/reviews') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, reviewsController.getReviews)
router.get('/addReview', ensureAuth, reviewsController.addReview)

router.post('/createReview', reviewsController.createReview)

router.delete('/deleteReview', reviewsController.deleteReview)



module.exports = router