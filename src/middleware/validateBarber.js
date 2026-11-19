function validateBarber(req, res, next) {
    const { name, specialty, experienceYears, price } = req.body || {}
    const details = []

    if (typeof name !== "string" || name.trim() === "") {
        details.push("name is required")
    }

    if (typeof specialty !== "string" || specialty.trim() === "") {
        details.push("specialty is required")
    }

    if (typeof price !== "number" || Number.isNaN(price) || price < 0) {
        details.push("price must be a number >= 0")
    }

    if (typeof experienceYears !== "number" || Number.isNaN(experienceYears) || experienceYears < 0) {
        details.push("experienceYears must be a number >= 0")
    }

    if (details.length > 0) {
        return res.status(400).json({ details })
    }

    next()
}

module.exports = validateBarber