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

  async GET_HISTORY_WEATHER(state: any, paylod: any): Promise<void> { 
    const latitude = paylod.latitude;
    const longitude = paylod.longitude;
    const timestamp = Math.floor(+ new Date() / 1000) - 86400;
    const response = await weatherAPI.GET_HISTORY_WEATHER(latitude, longitude, timestamp);
    await store.commit('GET_HISTORY_WEATHER', { data: response.data }); 
  },
};

export default action;
