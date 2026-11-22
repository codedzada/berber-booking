export function validateBarberPatch(req, res, next) {
    const { name, specialty, price, experienceYears } = req.body || {}
    const errors = []

    if (name !== undefined && (typeof name !== "string" || name.trim() === "")) {
        errors.push("name must be a non-empty string")
    }

    if (specialty !== undefined && (typeof specialty !== "string" || specialty.trim() === "")) {
        errors.push("specialty must be a non-empty string")
    }

    if (price !== undefined && (typeof price !== "number" || Number.isNaN(price) || price < 0)) {
        errors.push("price must be a number >= 0")
    }

    if (experienceYears !== undefined && (typeof experienceYears !== "number" || Number.isNaN(experienceYears) || experienceYears < 0)) {
        errors.push("experienceYears must be a number >= 0")
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors })
    }

    next()
}