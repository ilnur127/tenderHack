import store from '../store'
export default {
  state: {
    allNotification: {},
    pieceNotification: {}
  },
  mutations: {
    setAllNotification (state, result) {
      state.allNotification = result
    },
    setPieceNotification (state, result) {
      state.pieceNotification = result
    }
  },
  actions: {
    async fetchAllNotification ({ dispatch }) {
      try {
        const result = await fetch(`http://${store.getters.getHost}/get_notification?uid=${store.getters.infoUser.id}&all=true`, {
          method: 'GET'
        }).then(res => res.json())
        console.log(result)
        store.commit('setAllNotification', result)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchAllNotificationForInn ({ dispatch }, inn) {
      try {
        const result = await fetch(`http://${store.getters.getHost}/get_notification?uid=${inn}&all=true`, {
          method: 'GET'
        }).then(res => res.json())
        console.log(result)
        store.commit('setAllNotification', result)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchPieceNotification ({ dispatch }) {
      try {
        const result = await fetch(`http://${store.getters.getHost}/get_notification?uid=${store.getters.infoUser.id}`, {
          method: 'GET'
        }).then(res => res.json())
        console.log(result)
        store.commit('setPieceNotification', result)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    allNotification: s => s.allNotification,
    pieceNotification: s => s.pieceNotification
  }
}
