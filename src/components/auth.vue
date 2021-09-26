<template>
<div class='authBlock'>
    <div class='authModel'>
        <div class='close' @click='$emit("closeModal")'>
            <img src='/Group.svg' class='closeGray'/>
            <img src='/GroupRed.svg' class='closeRed'/>
        </div>
        <div class='authModel--header'>Авторизация</div>
        <div>
            <div class='authModel--input'>
                <label>Логин</label>
                <input v-model='login' placeholder='Введите логин'/>
                <span class='error' v-if='errorLogin'>Введите логин</span>
            </div>
            <div class='authModel--input'>
                <label>Пароль</label>
                <input v-model='password' placeholder='Введите пароль'/>
                <span class='error' v-if='errorPassword'>Введите пароль</span>
            </div>
            <div class='error' v-if='errorSubmit'>{{errorMessage}}</div>
            <div class='authModel--enter'>
                <button @click='submitForm'>Войти</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      login: '',
      password: '',
      errorMessage: '',
      errorLogin: false,
      errorPassword: false,
      errorSubmit: false
    }
  },
  methods: {
    checkLogin () {
      if (this.login === '') {
        this.errorLogin = true
      } else {
        this.errorLogin = false
      }
    },
    checkPassword () {
      if (this.login === '') {
        this.errorLogin = true
      } else {
        this.errorLogin = false
      }
    },
    async submitForm () {
      this.checkLogin()
      this.checkPassword()
      if (this.errorLogin || this.errorPassword) {
        return false
      }
      const formData = {
        login: this.login,
        password: this.password
      }
      const result = await this.$store.dispatch('login', formData).then(res => res)
      if (result.error) {
        this.errorMessage = result.message
        this.errorSubmit = true
      } else {
        this.$emit('closeModal')
      }
    }
  },
  watch: {
    login () {
      this.checkLogin()
    },
    password () {
      this.checkPassword()
    }
  }
}
</script>
<style scoped>
.authBlock {
    width: 100%;
    height: 100%;
    -webkit-backdrop-filter: blur(4px);
    background: rgba(231, 238, 247, 0.7);
    backdrop-filter: blur(4px);
    position: absolute;
    top: 0;
    z-index: 99999;
}
.authModel {
    position: absolute;
    padding: 40px 140px 40px 140px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.15);
    border-radius: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.authModel--header {
    font-weight: bold;
    font-size: 65px;
    color: #282828;
    margin-bottom: 40px;
}
.authModel--input {
    margin-bottom: 26px;
    display: flex;
    flex-direction: column;
}
.authModel--input label{
    font-weight: bold;
    font-size: 16px;
    color: #282828;
    margin-bottom: 3px;
}
.authModel--input input{
    background: #E7EEF7;
    border: none;
    border-radius: 10px;
    height: 16px;
    padding: 11px 0px 10px 24px;
    color: #666666;
}
.authModel--input input:focus{
    outline: none;
}
.close {
    position: absolute;
    top: 0;
    right: 0;
    top: 20px;
    right: 36px;
    cursor: pointer;
}
.close img {
    width: 17px;
}
.close:hover .closeRed {
    display: block
}
.close:hover .closeGray {
    display: none
}
.closeRed {
    display: none
}
.authModel--enter {
    margin-top: 60px;
    text-align: center;
}
.authModel--enter button {
    background: #C2C2C2;
    padding: 9px 56px;
    color: white;
    border: none;
    border-radius: 15px;
    font-weight: bold;
    font-size: 26px;
    cursor: pointer;
}
.authModel--enter:hover > button {
    background: linear-gradient(90deg, #CB2D3E 0%, #EF473A 100%);
}
.error {
    color: red;
    font-size: 12px;
}
</style>
