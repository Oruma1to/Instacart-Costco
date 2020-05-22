import axios from 'axios'

const getToken = () => {
  return new Promise(resolve => {
    resolve(`Bearer ${localStorage.getItem('token') || null}`)
  })
}

let apiUrl

const apiUrls = {
  production: 'https://instacart-costco.herokuapp.com/api',
  development: 'http://localhost:3000/api'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

const api = axios.create({
  baseURL: apiUrl
})

api.interceptors.request.use(async function (options) {
  options.headers['Authorization'] = await getToken()
  return options
}, function (error) {
  console.log('Request error: ', error)
  return Promise.reject(error)
});

export default api