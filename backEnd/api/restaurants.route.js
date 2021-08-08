import express from 'express'
import RestuarantController from './restaurants.controller.js'
import RestuarantReviewController from './restaurantsreview.controller.js'
const router = express.Router()

router.route("/").get(RestuarantController.apiGetRestaurant)

router
    .route("/review")
    .post(RestuarantReviewController.apiPostReview)
    .put(RestuarantReviewController.apiPostReview)
    .delete(RestuarantReviewController.apiPostReview)

export default router