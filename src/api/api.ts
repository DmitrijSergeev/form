import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const Api = {
  getUsers() {
    return instance.get('users')
  },
}
