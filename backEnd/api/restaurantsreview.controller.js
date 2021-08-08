import ReviewsDAO from "../dao/ReviewsDAO.js";

export default class ReviewControllers {
    static async apiPostReview(req, res) {

        try {
            const restuarant_id = req.body.restuarant_id;
            const review = req.body.text;

            const userInfo = {
                name: req.body.name,
                _id: req.body.user_id
            }

            const date = new Date()
            const ReviewResponse = await ReviewsDAO.addReview(
                restuarant_id,
                review,
                userInfo,
                date
            )
            res.json({ status: "success" })
        } catch (error) {
            res.status(500).json({ error: e.massage })
        }



    }


    static async apiUpdateReview(req, res) {
        try {
            const reviewId = req.body.review_id;
            const text = req.body.text;

            const date = new Date();

            const reviewResponse = ReviewsDAO.updateReview(
                reviewId,
                req.body.user_id,
                text,
                date
            )

            var { error } = reviewResponse
            if (error) {
                res.status(400).json({ error })
            }
            if (reviewResponse.modifiedCount === 0) {
                throw new Error(
                    "unable to update review - user may not be original poster",
                )
            }

            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiDeleteReview(req, res, next) {
        try {
          const reviewId = req.query.id
          const userId = req.body.user_id
          console.log(reviewId)
          const reviewResponse = await ReviewsDAO.deleteReview(
            reviewId,
            userId,
          )
          res.json({ status: "success" })
        } catch (e) {
          res.status(500).json({ error: e.message })
        }
      }
}