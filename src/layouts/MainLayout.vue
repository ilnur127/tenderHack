<template>
    <NavBar></NavBar>
    <main>
        <div class="app-page">
            <router-view />
        </div>
    </main>
    <Notification></Notification>
    <authModel></authModel>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Notification from '../components/Notification'
import authModel from '../components/auth'
export default {
  data () {

  },
  components: {
    NavBar,
    Notification,
    authModel
  }
}
</script>

<style>
.app-page {
    padding: 0px 75px;
    background: linear-gradient(180deg, #F3F7FC 0%, #FFFFFF 100%);
}
</style>
