import express from 'express'

const router = express.Router()

router.get("/a",(req, res)=> res.send("Hello world!"))



export default router