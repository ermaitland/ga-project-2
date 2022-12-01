import axios from 'axios';

const MAKEUP_ENDPOINT = 'http://makeup-api.herokuapp.com/api/v1/products.json';

export const getAllMakeup = () => axios.get(MAKEUP_ENDPOINT);
