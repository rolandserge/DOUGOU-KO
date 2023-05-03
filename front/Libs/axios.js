import Axios from "axios"


const axiosAuth = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL_AUTH,
  headers: {
    Accept: "application/json",
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_BACKEND_AUTH
  },
  withCredentials: true,
})
export default axiosAuth