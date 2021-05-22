import axios, { Method, AxiosRequestConfig } from 'axios'

class RequestConfig {
  public baseURL?: string
  public headers?: any
  public method?: Method
  public url?: string
  public data?: any

  constructor(baseURL: string | undefined) {
    this.baseURL = baseURL
  }

  public setToken(token?: any) {
    if (token) {
      this.headers = {
        Authorization: `Bearer ${token}`,
      }
    }
  }

  public get(path: string, config?: AxiosRequestConfig) {
    this.method = 'GET'
    this.url = this.baseURL + path

    return { ...config, ...this }
  }

  public delete(path: string, config?: AxiosRequestConfig) {
    this.method = 'DELETE'
    this.url = this.baseURL + path

    return { ...config, ...this }
  }

  public post(path: string, data?: any, config?: AxiosRequestConfig) {
    this.method = 'POST'
    this.url = this.baseURL + path
    this.data = data

    return { ...config, ...this }
  }

  public put(path: string, data?: any, config?: AxiosRequestConfig) {
    this.method = 'PUT'
    this.url = this.baseURL + path
    this.data = data

    return { ...config, ...this }
  }

  public patch(path: string, data?: any, config?: AxiosRequestConfig) {
    this.method = 'PATCH'
    this.url = this.baseURL + path
    this.data = data

    return { ...config, ...this }
  }
}

const base = () => {
  const requestConfig = new RequestConfig(process.env.REACT_APP_API_HOST)

  return axios.create(requestConfig)
}

export default base
