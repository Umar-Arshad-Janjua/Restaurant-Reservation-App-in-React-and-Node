import express from "express";
import send_reservation from "../controller/reservation.js";

const router = express.Router();

// POST route to send a reservation
router.post("/send", send_reservation);

export default router;
