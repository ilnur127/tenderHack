import store from '../store'
export default {
  state: {
    info: {}
  },
  mutations: {
    setInfo (state, info) {
      state.info = info
    }
  },
  actions: {
    async fetchInfo ({ dispatch }, id) {
      try {
        const info = await fetch(`http://${store.getters.getHost}/get_item_info?iid=${id}`, {
          method: 'GET'
        }).then((res) => res.json())
        console.log(info)
        store.commit('setInfo', info)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    info: s => s.info
  }
}
