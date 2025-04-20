import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100,
    message: "Demasiadas solicitudes desde esta IP, por favor intenta de nuevo más tarde.",
});