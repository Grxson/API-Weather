# 🌦️ Weather API

## Una API meteorológica simple que consulta datos en tiempo real desde [Visual Crossing Weather API](https://www.visualcrossing.com/) y los almacena temporalmente en caché usando Redis. Soporta consultas por ciudad y devuelve información detallada del clima, incluyendo temperatura, humedad, condiciones, y más.

## Link del Proyecto

https://roadmap.sh/projects/weather-api-wrapper-service

## 🚀 Tecnologías utilizadas

- **Node.js** + **Express**
- **Axios** (para llamadas HTTP externas)
- **Redis** (para caching de resultados)
- **dotenv** (para manejar variables de entorno)
- **morgan** (logging de peticiones)
- **express-rate-limit** (limitación de peticiones)
- **Control de errores personalizado** con clases como `ApiError` y middlewares

---

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Grxson/API-Weather.git
cd API-Weather
```

2. Instala las dependencias

```bash
npm install
```

3. Configura el archivo .env

```bash
PORT=5000
WEATHER_API_KEY=TU_CLAVE_DE_VISUAL_CROSSING
WEATHER_API_BASE_URL=https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
REDIS_URL=redis://localhost:6379

```

## 🛠️ Scripts

```bash
npm run dev
```

## 📡 Endpoints

### `GET /api/weather/:city`

Obtiene los datos meteorológicos de una ciudad específica.

#### 🔸 Parámetros:

- `:city` — Nombre de la ciudad (puede incluir espacios codificados con `%20`)

#### 🔹 Ejemplos:

```bash
GET http://localhost:5000/api/v1/weather/ciudad%20de%20mexico
GET http://localhost:5000/api/v1/weather/barcelona
```
