const express = require("express")
const barbers = require("./data/barbers.json")

const app = express()
const PORT = 3000

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

app.use((req, res) => {
    res.status(404).json({ error: "Səhifə tapılmadı (404)" })
})

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})