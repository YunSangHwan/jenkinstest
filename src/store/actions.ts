import { ActionTree } from 'vuex';
import { State } from './state';
import weatherAPI from '../api/weatherAPI';
import store from '.';

const action: ActionTree<State, any> = {
  async GET_WEATHER(state: any, paylod: any): Promise<void> { 
    const latitude = paylod.latitude;
    const longitude = paylod.longitude;
    const response = await weatherAPI.GET_WEATHER(latitude, longitude);
    await store.commit('GET_WEATHER', { data: response.data }); 
  },

  async GET_WEATHER_HISTORY(state: any, paylod: any): Promise<void> { 
    console.log(123)
    const latitude = paylod.latitude;
    const longitude = paylod.longitude;
    const response = await weatherAPI.GET_WEATHER_HISTORY(latitude, longitude);
    await store.commit('GET_WEATHER_HISTORY', { data: response.data }); 
  },
};

export default action;
