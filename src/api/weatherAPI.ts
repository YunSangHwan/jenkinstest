import axios from 'axios';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=452f91ea3d48b76403978bcf4bb153f2'; 

export default {
  async GET_WEATHER(): Promise<any> {
    const res = await axios.post(API_URL);
    console.log(res)
    return res;
  },
};