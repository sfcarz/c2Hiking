import axios from 'axios';

const key = 'AIzaSyD2rwmhCb8KL_qNIGiSNY9ie983fQw4YZU'

export default async function position() {
  try {
    const result = await axios.get(`https://www.googleapis.com/geolocation/v1/geolocate?key=${key}`)
    console.log(result);
  } catch (e) {
    console.log('something went wrong', e);
  }
}