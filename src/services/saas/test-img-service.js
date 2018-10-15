//import http from "http-service";

const url = 'https://picsum.photos';

export const getImgUrl = () => `${url}/420?random&test=${Math.random()}`;

export const getImgIdUrl = id => `${url}/420/420/?image=${id}`;

export const getListImgUrls = n => [...Array(n).keys()].map(x => getImgUrl(x));
