import { createStore } from 'vuex'
import record from './record'
import auth from './authForm'
import user from './user'
import recomend from './recomend'

export default createStore({
  state: {
    host: '35b6-94-180-252-116.eu.ngrok.io'
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getHost: (s) => s.host
  },
  modules: {
    record,
    auth,
    user,
    recomend
  }
})
