<template>

    <div
        class='notification'
        :class='{smallVersionNotification: !show, fullVersionNotification: show}'
        @click.stop="showNotification"
    >
        <div v-if="!show">
            <div class="notificationIcon">
                <img
                    src='/nashPush.svg'
                    class='nashPush'
                />
                <img
                    src='/nashPush2.svg'
                    class='nashPush2'
                />
                <span class='countNotif'>3</span>
            </div>
        </div>
        <div
            v-else
            style="display: flex;"
        >
            <div class='fullVersionNotification--leftMenu'>
                <div
                    @click.stop="closeNotification"
                >
                    <img src='/notificationBack.svg' class='notificationBack'/>
                </div>
                <div class='period'>
                    <div
                        class='period--item'
                        :class='{"period--item-active": period === "week"}'
                        @click='changePeriod("week")'
                    >На неделю</div>
                    <div
                        class='period--item'
                        :class='{"period--item-active": period === "mouth"}'
                        @click='changePeriod("mouth")'
                    >На месяц</div>
                    <div
                        class='period--item'
                        :class='{"period--item-active": period === "halfyear"}'
                        @click='changePeriod("halfyear")'
                    >На полгода</div>
                    <div
                        class='period--item'
                        :class='{"period--item-active": period === "year"}'
                        @click='changePeriod("year")'
                    >На год</div>
                </div>
                <div>
                    <div
                        class='showAllNotification'
                        @click.stop="goToAll"
                    >
                        <div>Посмотреть все</div>
                        <img src='/notificationDots.svg' class='dots' />
                        <img src='/notificationDotsGrey.svg' class='dotsGrey' />
                    </div>
                </div>
            </div>
            <div class='mainBlockNotification'>
                <div class='mainBlockNotification--header'>{{ (infoUser.type === 'customer') ? 'Рекомендовано для вас' : 'Товары рекомендованые вашим заказчикам'}}</div>
                <div class='mainBlockNotification--headerTitle'>на основе ваших заказов</div>
                <div class='hr'></div>
                <div
                    class='mainBlockNotification--cards'
                >
                    <div
                        class='mainBlockNotification--card'
                        v-for='i of pieceNotification[period]'
                        :key='i'
                    >
                        <div>
                            <div>
                                <img src='/MaskGroup.svg' style='width:100px' />
                            </div>
                            <div class='mainBlockNotification--card-price'>
                                Цена
                            </div>
                        </div>
                        <div class='mainBlockNotification--card-info'>
                            <div class='mainBlockNotification--card-info--name' v-for='name of i.name' :key='name'>
                                {{name}}
                            </div>
                            <div class='mainBlockNotification--card-info--character'>
                            </div>
                            <div class='mainBlockNotification--card-info--category'>
                                Категория:
                            </div>
                            <div class='mainBlockNotification--card-info--categoryText' v-for='typeO of i.type' :key='typeO'>
                                {{typeO}}
                            </div>
                            <div
                                class='mainBlockNotification--card-info--detail'
                                @click.stop='goDetail(i.id)'
                            >
                                <div>Подробнее</div>
                                <img src='/notificationBack.svg' style='width:7px' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      show: false,
      period: 'week'
    }
  },
  async created () {
    await this.$store.dispatch('fetchPieceNotification')
  },
  methods: {
    showNotification () {
      this.show = true
    },
    closeNotification () {
      this.show = false
    },
    changePeriod (period) {
      this.period = period
    },
    async goDetail (id) {
      let Id = ''
      for (const i in id) {
        Id = id[i]
      }
      this.show = false
      this.$router.push(`/detail/${Id}`)
      await this.$store.dispatch('fetchInfo', Id)
    },
    goToAll () {
      this.show = false
      this.$router.push('/recomends')
    }
  },
  computed: {
    ...mapGetters(['infoUser', 'pieceNotification'])
  }
}
</script>

<style scoped>
    .mainBlockNotification--cards::-webkit-scrollbar {width:0px;}
    .notification {
        position: fixed;
        top: 100px;
        right: 0;
        padding: 10px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        padding-bottom: 0px;
        width: 44%;
        transition: all 0.5s ease-out;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.69) 100%);
        box-shadow: -5px -15px 15px -2px rgb(0 0 0 / 10%);
        backdrop-filter: blur(8px);
    }
    .notificationIcon {
        display: inline-block;
        position: relative;
        cursor: pointer;
    }
    .nashPush2 {
        display: none;
    }
    .notificationIcon:hover .nashPush {
        display: none;
    }
    .notificationIcon:hover .nashPush2 {
        display: block;
    }
    .notificationIcon:hover .countNotif {
        background: #264B82;
    }
    .notificationIcon img{
        width: 36px;
    }
    .countNotif{
        position: absolute;
        top: -5px;
        right: -5px;
        display: flex;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        background: linear-gradient(90deg, #CB2D3E 0%, #EF473A 100%);
        color: white;
        font-size: 14px;
    }
    .smallVersionNotification {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .fullVersionNotification {
        display: flex;
        max-height: 600px;
    }
    .fullVersionNotification--leftMenu {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 30%;
        margin-right: 20px;
    }
    .period {
        margin-left: -10px;
        /*margin-top: -100%;*/
    }
    .period--item {
        height: 52px;
        display: flex;
        align-items: center;
        padding: 0px 30px;
        font-weight: bold;
        font-size: 20px;
        cursor: pointer;
        transition: color 0.3s ease-out;
    }
    .period--item-active {
        background: linear-gradient(90deg, #CB2D3E 0%, #EF473A 100%);
        box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
        color: white;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
    }
    .notificationBack {
        width: 14px;
        margin-top: 10px;
        margin-left: 30px;
        cursor: pointer;
    }
    .showAllNotification {
        background: #FFFFFF;
        box-shadow: 0px -4px 10px rgb(0 0 0 / 10%);
        border-top-right-radius: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px 15px;
        margin-left: -10px;
        cursor: pointer;
    }
    .showAllNotification:hover {
        box-shadow: 1px -6px 10px rgb(0 0 0 / 11%);
    }
    .showAllNotification:hover .dots {
        display: block;
    }
    .showAllNotification:hover .dotsGrey {
        display: none;
    }
    .showAllNotification>div {
        font-weight: 600;
        color: #666666;
        margin-bottom: 7px;
        font-size: 15.7px;
    }
    .mainBlockNotification {
        width: 70%;
        margin-right: 30px;
    }
    .mainBlockNotification--header {
        text-align: center;
        font-weight: bold;
        font-size: 22px;
        color: #666666;
        margin-top: 10px;
    }
    .mainBlockNotification--headerTitle {
        text-align: center;
        font-weight: 400;
        font-size: 18px;
        color: #C2C2C2;
        margin-bottom: 10px;
    }
    .hr {
        height: 1px;
        background: #E5E5E5;
        margin-bottom: 20px;
    }
    .mainBlockNotification--cards {
        overflow-y: auto;
        max-height: 84%;
    }
    .mainBlockNotification--card {
        display: flex;
        border: 3px solid #E5E5E5;
        margin-bottom: 20px;
        border-radius: 20px;
        padding: 10px;
    }
    .mainBlockNotification--card:hover {
        border-color: #CB2D3E;
        cursor: pointer;
    }
    .mainBlockNotification--cards :last-child {
        margin-bottom: 0px;
    }
    .mainBlockNotification--card-price {
        font-weight: bold;
        font-size: 20px;
    }
    .mainBlockNotification--card-info {
        margin-left: 23px;
    }
    .mainBlockNotification--card-info--name {
        font-weight: bold;
        font-size: 19px;
    }
    .mainBlockNotification--card-info--character {
        font-weight: 400;
        font-size: 17px;
    }
    .mainBlockNotification--card-info--category {
        margin-top: 9px;
        margin-bottom: 1px;
    }
    .mainBlockNotification--card-info--categoryText {
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        color: #264B82;
    }
    .mainBlockNotification--card-info--detail {
        display: flex;
        justify-content: flex-end;
        margin-top: 8px;
        margin-bottom: 4px !important;
    }
    .mainBlockNotification--card-info--detail>div {
        margin-right: 14px;
        font-weight: bold;
        color: #666666;
    }
    .dots {
        display: none;
    }
</style>
