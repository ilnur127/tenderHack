export default {
  state: {
    info: JSON.parse(localStorage.getItem('userInfo')) || {}
  },
  mutations: {
    setInfoUser (state, info) {
      console.log()
      state.info = info
      localStorage.setItem('userInfo', JSON.stringify(info))
    }
  },
  getters: {
    infoUser: s => {
      return s.info
    }
  }
}
