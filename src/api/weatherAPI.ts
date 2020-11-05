import axios from 'axios';

// const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=452f91ea3d48b76403978bcf4bb153f2'; 

// const API = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${VUE_APP_WHATHER_APP_KEY}&units=metric';
export default {
  async GET_WEATHER(latitude: any, longitude: any): Promise<any> {
    //console.log(`https://api.openweathermap.org/data/2.5/weather?lat=` + latitude + `&lon=` + longitude + `&appid=452f91ea3d48b76403978bcf4bb153f2&units=metric`)
    const res = await axios.post(`https://api.openweathermap.org/data/2.5/weather?lat=` + latitude + `&lon=` + longitude + `&appid=452f91ea3d48b76403978bcf4bb153f2&units=metric`);
    return res;
  },

  async GET_HISTORY_WEATHER(latitude: any, longitude: any, timestamp: any): Promise<any> {
    //console.log(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=` + latitude + `&lon=` + longitude + `&dt=1604409057&appid=452f91ea3d48b76403978bcf4bb153f2`)
    const res = await axios.post(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=` + latitude + `&lon=` + longitude + `&dt=` + timestamp + `&appid=452f91ea3d48b76403978bcf4bb153f2&units=metric`);
    return res;
  },
};