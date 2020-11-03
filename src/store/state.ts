export interface WeatherInfo {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: string;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: string; 
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: any;
  wind: {
    speed: number; 
    deg: number
  };
}

export interface HistoryWeatherInfo {
  clouds: number;
  dew_point: number;
  dt: string;
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  visibility: number;
  weather: any;
  wind_deg: number;
  wind_speed: number;
}

export interface State {
  weatherInfo: WeatherInfo;
  historyWeather: HistoryWeatherInfo[];
  ticksLabels: any;
}

const state: State = {
  weatherInfo: {
    base: '',
    clouds: {
      all: 0,
    },
    cod: 0,
    coord: {
      lon: 0,
      lat: 0,
    },
    dt: '',
    id: 0,
    main: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
    name: '',
    sys: {
      type: 0,
      id: 0,
      country: '', 
      sunrise: 0,
      sunset: 0,
    },
    timezone: 0,
    visibility: 0,
    weather: [],
    wind: {
      speed: 0, 
      deg: 0,
    },
  },
  historyWeather: [],
  ticksLabels: [],
};
export default state;