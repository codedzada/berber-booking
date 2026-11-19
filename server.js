const express = require("express")
const barbers = require("./data/barbers.json")
const logger = require("./src/middleware/logger")
const notFound = require("./src/middleware/notFound")
const validateBarber = require("./src/middleware/validateBarber")
const errorHandler = require("./src/middleware/errorHandler")
const app = express()
const PORT = 3000

app.use(logger)
app.use(express.json())

app.get("/barbers", (req,res) => {
    const { specialty } = req.query
    if(specialty) {
        const filteredBarbers = barbers.filter(
            (b) => b.specialty.toLowerCase() === specialty.toLowerCase()
        )
       return res.json(filteredBarbers)
    }
    res.json(barbers)
})

app.get("/barbers/:id", (req,res) => {
    const id = Number(req.params.id)
    const barber = barbers.find((b) => b.id === id)

    if (!barber) {
        return res.status(404).json({error: "Barber Tapilmadi"})
    }
    res.json(barber)
})

// app.use((req, res) => {
//     res.status(404).json({ error: "Sehife tapilmadi (404)" })
// })

app.post("/barbers", validateBarber, (req, res) => {
    const { name, specialty, experienceYears, price } = req.body
    const id = Math.max(...barbers.map((e) => e.id)) + 1
    const barber = { id, name, specialty, experienceYears, price }

    barbers.push(barber)
    res.status(201).json(barber)
})

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})