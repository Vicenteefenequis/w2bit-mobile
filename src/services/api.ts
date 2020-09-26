import axios from 'axios';
import * as rapidConfig from '../../rapidApiKeyAcess.json';
   
const api = axios.create({
    baseURL:'https://covid-19-data.p.rapidapi.com'
    
})
api.defaults.headers['x-rapidapi-host'] = `${rapidConfig["x-rapidapi-host"]}`;
api.defaults.headers['x-rapidapi-key'] = `${rapidConfig["x-rapidapi-key"]}`;
api.defaults.headers['content-type'] = "application/octet-stream";
api.defaults.headers['useQueryString'] = true;

export default api;   
