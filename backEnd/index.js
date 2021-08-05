import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
dotenv.config()
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000

MongoClient.connect(process.env.RESTREVIEW_URI, {
    poolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParse: true,
})
    .catch(error => {
        console.log(error.stack)
        process.exit(1)
    })
    .then(async client => {
        app.listen(port, () => {
            console.log(`Server listening at port ${port}`)
        })
    })