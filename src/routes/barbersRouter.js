import { Router } from "express"
import {
    getBarbers,
    getBarberById,
    createBarber,
    updateBarber,
    deleteBarber
} from "../controllers/barberController.js"
import validateBarber from "../middleware/validateBarber.js"
import { validateBarberPatch } from "../middleware/validateBarberPatch.js"

const router = Router()

router.get("/", getBarbers)
router.get("/:id", getBarberById)
router.post("/", validateBarber, createBarber)
router.patch("/:id", validateBarberPatch, updateBarber)
router.delete("/:id", deleteBarber)

export default router