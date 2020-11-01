export interface List {
  dt: 0;
  main: {
    temp: 0;
    feels_like: 0;
    pressure: 0;
    humidity: 0;
    temp_min: 0;
    temp_max: 0;
  };
  wind: {
    speed: 0;
    deg: 0;
  };
  clouds: {
    all: 0;
  };
  weather: [
    {
      id: 0;
      main: '';
      description: '';
      icon: '';
    },
  ];
}
export interface WeatherInfo {
  message: '';
  cod: '';
  city_id: 0;
  calctime: 0;
  cnt: 0;
  list: any;
}


export interface State {
  weatherInfo: WeatherInfo;
}

const state: State = {
  weatherInfo: {
    message: '',
    cod: '',
    city_id: 0,
    calctime: 0,
    cnt: 0,
    list: [],
  },
};
export default state;