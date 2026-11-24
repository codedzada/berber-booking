import express from "express"
import logger from "./src/middleware/logger.js"
import notFound from "./src/middleware/notFound.js"
import errorHandler from "./src/middleware/errorHandler.js"
import barbersRouter from "./src/routes/barbersRouter.js"

const app = express()
const PORT = 3000

app.use(logger)
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Barber Booking API işləyir",
        endpoints: {
            barbers: "/barbers"
        }
    })
})

app.use("/barbers", barbersRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})