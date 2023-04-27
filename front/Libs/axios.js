import Axios from "axios"


const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_BACKEND_URL
  },
  withCredentials: true,
})
export default axios