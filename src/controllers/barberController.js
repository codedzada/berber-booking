import barbers from "../../data/barbers.json" with { type: "json" }

export function getBarbers(req, res) {
    const { specialty, status } = req.query
    let result = barbers

    if (specialty) {
        result = result.filter(
            (b) => b.specialty.toLowerCase() === specialty.toLowerCase()
        )
    }

    if (status) {
        result = result.filter(
            (b) => b.status && b.status.toLowerCase() === status.toLowerCase()
        )
    }

    res.json(result)
}

export function getBarberById(req, res) {
    const id = Number(req.params.id)
    const barber = barbers.find((b) => b.id === id)

    if (!barber) {
        return res.status(404).json({ error: "Barber Tapilmadi" })
    }
    res.json(barber)
}

export function createBarber(req, res) {
    const { name, specialty, experienceYears, price, status = "open" } = req.body
    const id = Math.max(...barbers.map((e) => e.id)) + 1
    const barber = { id, name, specialty, experienceYears, price, status }

    barbers.push(barber)
    res.status(201).json(barber)
}

export function updateBarber(req, res) {
    const id = Number(req.params.id)
    const index = barbers.findIndex((b) => b.id === id)

    if (index === -1) {
        return res.status(404).json({ error: "Barber tapılmadı" })
    }

    barbers[index] = { ...barbers[index], ...req.body, id }
    res.json(barbers[index])
}

export function deleteBarber(req, res) {
    const id = Number(req.params.id)
    const index = barbers.findIndex((b) => b.id === id)

    if (index === -1) {
        return res.status(404).json({ error: "Barber tapılmadı" })
    }

    barbers.splice(index, 1)
    res.status(204).end()
}