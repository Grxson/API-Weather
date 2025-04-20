import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/apiError.js";
import redisClient from "../redis/redisClient.js";
import { fetchWeatherFromApi } from "../services/weather.service.js"


export const getWeather = catchAsync(async (req, res, next) => {
    const { city } = req.params;

    if (!city) return next(new ApiError("Ciudad requerida", 400));

    const cachedData = await redisClient.get(city.toLowerCase());

    if (cachedData) {
        return res.status(200).json({
            source: "cache",
            data: JSON.parse(cachedData)
        });
    }

    const weatherData = await fetchWeatherFromApi(city);
    if (!weatherData) return next(new ApiError("No se pudieron obtener los datos del clima", 500));

    await redisClient.set(city.toLowerCase(), JSON.stringify(weatherData), {
        EX: parseInt(process.env.CACHE_EXPIRATION),
    });

    res.status(200).json({
        source: "api",
        data: weatherData
    });
});