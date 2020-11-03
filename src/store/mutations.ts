import { MutationTree } from 'vuex';
import { State } from './state';
import common from '@/utils/common';

const mutation: MutationTree<State> = {
  GET_WEATHER(state: State, payload: any): void {
    console.log(payload.data)
    // console.log("현재온도 : "+ (payload.data.main.temp) );
    // console.log("현재습도 : "+ payload.data.main.humidity);
    // console.log("날씨 : "+ payload.data.weather[0].main );
    // console.log("상세날씨설명 : "+ payload.data.weather[0].description );
    // console.log("날씨 이미지 : "+ payload.data.weather[0].icon );
    // console.log("바람   : "+ payload.data.wind.speed );
    // console.log("나라   : "+ payload.data.sys.country );
    // console.log("도시이름  : "+ payload.data.name );
    // console.log("구름  : "+ (payload.data.clouds.all) + "%" );

    state.weatherInfo.main.temp = payload.data.main.temp; //현재온도
    state.weatherInfo.main.humidity = payload.data.main.humidity; //현재습도
    state.weatherInfo.weather = new Array;
    const weather = {
      main: '',
      description: '',
      icon: '',
    };
    weather.main = payload.data.weather[0].main; //날씨
    weather.description = payload.data.weather[0].description; //상세날씨설명
    weather.icon = payload.data.weather[0].icon; //날씨 이미지
    state.weatherInfo.weather.push(weather);
    state.weatherInfo.wind.speed = payload.data.wind.speed; //바람
    state.weatherInfo.sys.country = payload.data.sys.country; //나라
    state.weatherInfo.name = payload.data.name; //도시이름
    state.weatherInfo.dt = common.dateFormat(payload.data.dt);
    state.weatherInfo.clouds.all = payload.data.clouds.all; //구름
  },

  GET_HISTORY_WEATHER(state: State, payload: any): void {
    // console.log('과거의 날씨');
    // console.log(payload.data.hourly)
    state.historyWeather = payload.data.hourly;
    state.historyWeather.map((data: any, index: number)=> {
      const label: string = common.dateFormatHM(data.dt);
      state.ticksLabels.push(label);
      state.historyWeather[index].dt = common.dateFormat(data.dt);
    });
  },

  CHOISE_WEATHER(state: State, payload: any): void {
    const no = payload.no;
    //console.log(state.historyWeather[no])

    state.weatherInfo.main.temp = state.historyWeather[no].temp; //현재온도
    state.weatherInfo.main.humidity = state.historyWeather[no].humidity; //현재습도
    state.weatherInfo.weather = new Array;
    const weather = {
      main: '',
      description: '',
      icon: '',
    };
    weather.main = state.historyWeather[no].weather[0].main; //날씨
    weather.description = state.historyWeather[no].weather[0].description; //상세날씨설명
    weather.icon = state.historyWeather[no].weather[0].icon; //날씨 이미지
    state.weatherInfo.weather.push(weather);
    state.weatherInfo.wind.speed = state.historyWeather[no].wind_speed; //바람
    state.weatherInfo.dt = state.historyWeather[no].dt;
    state.weatherInfo.clouds.all = state.historyWeather[no].clouds; //구름
  }
};

export default mutation;