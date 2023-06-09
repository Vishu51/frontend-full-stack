import api from './api'
export class ApiHelper {
  get (uri, config) {
    return api.get(api.defaults.baseURL + uri, config)
  }

  post (uri, data) {
    return api.post(api.defaults.baseURL + uri, data)
  }

  options (uri) {
    return api.options(api.defaults.baseURL + uri)
  }

  patch (uri, data) {
    return api.patch(api.defaults.baseURL + uri, data)
  }

  put (uri, data, config) {
    return api.put(api.defaults.baseURL + uri, data, config)
  }

  delete (uri, config) {
    return api.delete(api.defaults.baseURL + uri, config)
  }
}
