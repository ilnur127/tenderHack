<template>
    <div>
        <div class='title'>{{ (infoUser.type === 'customer') ? 'РЕКОМЕНДОВАННЫЕ ДЛЯ ВАС ТОВАРЫ, РАБОТЫ И УСЛУГЫ' : 'Данные товары, работы и услуги были рекомендованы вашим заказчикам'}}</div>
        <div class='smallInfo'>НА ОСНОВЕ ВАШИХ ЗАКАЗОВ</div>
        <div class='hr'></div>
        <div style='display:flex;'>
            <div class='seachForInn'>
                <label>Поставщик</label>
                <input @change='findForInn' placeholder='Введите ИНН'>
            </div>
            <div class='infoForInn' v-if='need'>
                <div class='infoForInn-header'>Информация о введенной компании</div>
                <div>Название - {{NameForInn}}</div>
            </div>
        </div>
        <div class='hr'></div>
        <div class='recomendsBlock'>
            <div class='cardsBlock'>
                <div>
                    <Card v-for='card of allNotification.week' :key='card' :card='card' :period='"week"'/>
                    <Card v-for='card of allNotification.mouth' :key='card' :card='card' :period='"mouth"'/>
                    <Card v-for='card of allNotification.halfyear' :key='card' :card='card' :period='"halfyear"'/>
                    <Card v-for='card of allNotification.year' :key='card' :card='card' :period='"year"'/>
                </div>
                <MyPagination />
            </div>
            <div class='filtersBlock'>
                <div class='filterHeader'>Фильтр</div>
                <div class='filterItem'>
                    <img src='/energy.svg' />
                    Актуальность
                </div>
                <div>
                    <div class='filterItem--Input'>
                        <input type='checkbox' id='mouth' value='week' v-model='week'/>
                        <label for='mouth'>На неделю</label>
                    </div>
                    <div class='filterItem--Input'>
                        <input type='checkbox' id='mouth' value='mouth' v-model='mouth'/>
                        <label for='mouth'>На месяц</label>
                    </div>
                    <div class='filterItem--Input'>
                        <input type='checkbox' id='halfyear' value='halfyear'  v-model='halfyear'/>
                        <label for='halfyear'>На полгода</label>
                    </div>
                    <div class='filterItem--Input'>
                        <input type='checkbox' id='year' value='year' v-model='year'/>
                        <label for='year'>На год</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyPagination from '../components/Pagination.vue'
import Card from '../components/card.vue'
import paginationMixin from '../mixins/pagination.mixin.js'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      week: true,
      mouth: true,
      halfyear: true,
      year: true,
      NameForInn: '',
      need: false
    }
  },
  mixins: [paginationMixin],
  components: {
    MyPagination,
    Card
  },
  async created () {
    await this.$store.dispatch('fetchAllNotification')
  },
  computed: {
    ...mapGetters(['allNotification', 'infoUser'])
  },
  methods: {
    async findForInn (evt) {
      await this.$store.dispatch('fetchAllNotificationForInn', evt.target.value)
      console.log('123')
      var url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party'
      var token = '9f00e38aa1417230945cc3b805edd9435af23a97'

      var options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Token ' + token
        },
        body: JSON.stringify({
          query: evt.target.value,
          type: 'LEGAL'
        })
      }

      await fetch(url, options)
        .then(response => response.json())
        .then(result => {
          this.NameForInn = result.suggestions[0].value
          this.need = true
        })
        .catch(error => console.log('error', error))
    }
  },
  watch: {
    week (value) {
      console.log(value)
    },
    mouth (value) {
      console.log(value)
    },
    halfyear (value) {
      console.log(value)
    },
    year (value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>
.seachForInn {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 20px;
}
.seachForInn label,
.infoForInn-header {
    font-weight: bold;
    font-size: 16px;
    color: #282828;
    margin-bottom: 10px;
}
.seachForInn input {
    background: #E7EEF7;
    width: 300px;
    border: none;
    padding: 11px 0px 10px 22px;
    border-radius: 15px;
}
.seachForInn input:focus {
    outline: none;
}
.title {
    font-weight: bold;
    font-size: 32px;
    padding-top: 20px;
}
.smallInfo {
    margin: 5px 0px;
    font-size: 16px;
    color: #666666;
}
.hr {
    height: 2px;
    background: #E7EEF7;
    margin-top: 40px;
    margin-bottom: 40px;
}
.recomendsBlock {
    display: flex;
}
.cardsBlock {
}
.filtersBlock {
    width: 15%;
    padding-left: 80px;
}
.filterHeader {
    font-weight: bold;
    font-size: 36px;
    margin-bottom: 25px;
}
.filterItem {
    font-weight: bold;
    font-size: 20px;
    color: #666666;
    margin-bottom: 20px;
}
.filterItem--Input {
    font-size: 20px;
    color: #666666;
    margin: 5px 0px;
}
</style>
