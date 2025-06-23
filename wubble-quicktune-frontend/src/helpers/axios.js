import axios from 'axios'

const BASE_URL = 'https://wubble-quicktune-ai.onrender.com//api'

export const publicRequest = axios.create({
    baseURL: BASE_URL
})
