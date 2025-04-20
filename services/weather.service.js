import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const fetchWeatherFromApi = async (city) => {
    const url = `${process.env.WEATHER_API_URL}/${city}?key=${process.env.WEATHER_API_KEY}&unitGroup=metric`;
    const response = await axios.get(url);
    return response.data;
}