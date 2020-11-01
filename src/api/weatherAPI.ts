import axios from 'axios';

// const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=452f91ea3d48b76403978bcf4bb153f2'; 

// const API = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${VUE_APP_WHATHER_APP_KEY}&units=metric';
export default {
  async GET_WEATHER(latitude: any, longitude: any): Promise<any> {
    console.log(latitude)
    console.log(longitude)
    const res = await axios.post(
      `https://api.openweathermap.org/data/2.5/weather?lat=` + latitude + `&lon=` + longitude + `&appid=452f91ea3d48b76403978bcf4bb153f2&units=metric`
    );
    return res;
  },

  async GET_WEATHER_HISTORY(latitude: any, longitude: any): Promise<any> {
    console.log(latitude)
    console.log(longitude)
    //http://history.openweathermap.org/data/2.5/history/city?lat={lat}&lon={lon}&type=hour&start={start}&end={end}&appid={API key}
    //http://history.openweathermap.org/data/2.5/history/city?lat={lat}&lon={lon}&type=hour&start={start}&end={end}&appid={API key}
    const res = await axios.post(
      `http://history.openweathermap.org/data/2.5/history/city?lat=` + latitude + `&lon=` + longitude + `&type=hour&start=1604100000&end=1604228795&appid=452f91ea3d48b76403978bcf4bb153f2&units=metric`


    );
    return res;
  },
};