import axios from 'axios'
export default axios.create({
  baseURL: '',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
