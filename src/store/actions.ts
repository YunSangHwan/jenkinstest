import { ActionTree } from 'vuex';
import { State } from './state';
import weatherAPI from '../api/weatherAPI';

const action: ActionTree<State, any> = {
  async GET_WEATHER(state: State, paylod: any): Promise<void> { 
    const response = await weatherAPI.GET_WEATHER();
    console.log(response.data);
    
  }
};

export default action;
