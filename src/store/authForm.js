import store from '.'
export default {
  state: {
    users: {
      0: {
        id: 5002001584,
        login: 'ilnur',
        password: '12345',
        type: 'customer'
      },
      1: {
        id: 2,
        login: 'mansur',
        password: '12345',
        type: 'post'
      }
    }
  },
  actions: {
    async login ({ dispatch, commit }, { login, password }) {
      try {
        let message = ''
        let error = false
        for (const user in this.state.auth.users) {
          if (login === this.state.auth.users[user].login) {
            if (password === this.state.auth.users[user].password) {
              store.commit('setInfoUser', this.state.auth.users[user])
              return this.state.auth.users[user]
            } else {
              error = true
              message = 'no password'
              return { error, message }
            }
          } else {
            error = true
            message = '404'
            return { error, message }
          }
        }
      } catch (e) {
        const error = e
        throw error
      }
    }
  }
}
