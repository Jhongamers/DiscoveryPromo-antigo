import axios from 'axios';

const api = axios.create({baseURL:'https://api255.herokuapp.com/api'});

export default api;