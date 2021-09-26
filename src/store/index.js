import { createStore } from 'vuex'
import record from './record'

export default createStore({
  state: {
    host: 'ff1d-94-180-248-211.eu.ngrok.io'
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getHost: (s) => s.host
  },
  modules: {
    record
  }
})
