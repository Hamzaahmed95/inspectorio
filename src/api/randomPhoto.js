import axios from 'axios'
import { BASE_URL, API_KEY } from './constants'

const ENDPOINTS = {
    getRandomPhoto: () => `${BASE_URL}/photos/random/?client_id=${API_KEY}`,
}

export const getRandomPhoto = async (list) => {

    try {
        let API_ENDPOINT = ENDPOINTS.getRandomPhoto();
        const res = await axios.get(API_ENDPOINT);
        if (res.data && res.data !== 'undefined') {
            const result = list.some(image => {
                return image.id === res.data.id;
            })
            return result ? getRandomPhoto(list) : { apiData: res.data }
        }
        throw res;
    }
    catch (error) {
        console.log("ERROR: ", error)
    }
}