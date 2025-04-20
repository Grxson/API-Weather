import express from "express";
import { getWeather } from "../controllers/weather.controller.js";
const router = express.Router();

router.get('/:city', getWeather);

export default router;