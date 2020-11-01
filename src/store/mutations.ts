import { MutationTree } from 'vuex';
import { State } from './state';

const mutation: MutationTree<State> = {
  GET_WEATHER(state: State, payload: any): void {
    console.log(payload.data)
    console.log("현재온도 : "+ (payload.data.main.temp) );
    console.log("현재습도 : "+ payload.data.main.humidity);
    console.log("날씨 : "+ payload.data.weather[0].main );
    console.log("상세날씨설명 : "+ payload.data.weather[0].description );
    console.log("날씨 이미지 : "+ payload.data.weather[0].icon );
    console.log("바람   : "+ payload.data.wind.speed );
    console.log("나라   : "+ payload.data.sys.country );
    console.log("도시이름  : "+ payload.data.name );
    console.log("구름  : "+ (payload.data.clouds.all) +"%" );     
  },
  GET_WEATHER_HISTORY(state: State, payload: any): void {
    console.log('과거의 날씨')
    console.log("현재온도 : "+ (payload.data.main.temp) );
    console.log("현재습도 : "+ payload.data.main.humidity);
    console.log("날씨 : "+ payload.data.weather[0].main );
    console.log("상세날씨설명 : "+ payload.data.weather[0].description );
    console.log("날씨 이미지 : "+ payload.data.weather[0].icon );
    console.log("바람   : "+ payload.data.wind.speed );
    console.log("나라   : "+ payload.data.sys.country );
    console.log("도시이름  : "+ payload.data.name );
    console.log("구름  : "+ (payload.data.clouds.all) +"%" );     
  },
};

export default mutation;