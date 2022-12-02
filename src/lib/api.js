import axios from 'axios';

const MAKEUP_ENDPOINT = 'http://makeup-api.herokuapp.com/api/v1/products.json';

export const getAllMakeup = () => axios.get(MAKEUP_ENDPOINT);

export const getLipStick = () =>
  axios.get(`${MAKEUP_ENDPOINT}?product_type=lipstick`);

export const getNailPaint = () =>
  axios.get(`${MAKEUP_ENDPOINT}?product_type=nailpaint`);

export const getFoundation = () =>
  axios.get(`${MAKEUP_ENDPOINT}?product_type=foundation`);

export const getMascara = () =>
  axios.get(`${MAKEUP_ENDPOINT}?product_type=mascara`);

export const getEyebrow = () =>
  axios.get(`${MAKEUP_ENDPOINT}?product_type=eyebrow`);
