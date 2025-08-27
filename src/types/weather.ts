// Raw API response
export interface WeatherDataApiResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  clouds: {
    all: number;
  };
  rain?: {
    '1h'?: number;
    '3h'?: number;
  };
  snow?: {
    '1h'?: number;
    '3h'?: number;
  };
  dt: number; // Time of data calculation (unix UTC)
  sys: {
    type?: number;
    id?: number;
    message?: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number; // Shift in seconds from UTC
  id: number; // City ID
  name: string; // City name
  cod: number; // Internal parameter
}

// Cleaned app-friendly type
export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  description: string;
  icon: string;
  feels_like: number;
  humidity: number;
  windSpeed: number;
}

/*
{
    "coord": {
        "lon": -0.1276,
        "lat": 51.5073
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 288.05,
        "feels_like": 287.53,
        "temp_min": 288.05,
        "temp_max": 288.05,
        "pressure": 1007,
        "humidity": 74,
        "sea_level": 1007,
        "grnd_level": 1004
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.89,
        "deg": 238,
        "gust": 8.11
    },
    "clouds": {
        "all": 100
    },
    "dt": 1756186566,
    "sys": {
        "country": "GB",
        "sunrise": 1756184630,
        "sunset": 1756234874
    },
    "timezone": 3600,
    "id": 2643743,
    "name": "London",
    "cod": 200
}
*/
