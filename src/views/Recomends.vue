<template>
    <div>
        <div class='title'>РЕКОМЕНДОВАННЫЕ ДЛЯ ВАС ТОВАРЫ, РАБОТЫ И УСЛУГЫ</div>
        <div class='smallInfo'>НА ОСНОВЕ ВАШИХ ЗАКАЗОВ</div>
        <div class='hr'></div>
        <div class='recomendsBlock'>
            <div class='cardsBlock'>
                <div>
                    <div class='card'>
                        <div class='card--leftBlock'>
                            <img src='/MaskGroup.svg' />
                        </div>
                        <div class='card--centerBlock'>
                            <div class='card--centerBlock-title'>Бумага для офисной техники SvetoCopy (А4, марка С, 80г/кв.м 500 листов)</div>
                            <div class='card--centerBlock-model'>Модель: Classic</div>
                            <div>Категория: <span class='card--centerBlock-from'>Бумага для офисной техники белая</span></div>
                            <div class='card--centerBlock-chacter'>Материал: </div>
                            <div>Цвет: </div>
                            <div>Уровень: </div>
                            <div>Марка: </div>
                            <div>Размер: </div>
                        </div>
                        <div class='card--rigthBlock'>
                            <div>
                                <div class='card--rigthBlock-post'>
                                    Поставщик
                                    <img src='/delivery.svg' />
                                </div>
                                <div class='card--rigthBlock-postName'>ИП Заур Р.Ф.</div>
                            </div>
                            <div>
                                <img src='/fire.svg' style='margin-right: 6px;'/>
                                <span class='card--rigthBlock-actual'>Актуальность на: </span>
                                <span class='card--rigthBlock-actualText'>Месяц</span>
                            </div>
                        </div>
                    </div>
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
                        <input type='checkbox' id='mouth' value='mouth' v-model='selectedFilters'/>
                        <label for='mouth'>На месяц</label>
                    </div>
                    <div class='filterItem--Input'>
                        <input type='checkbox' id='halfyear' value='halfyear'  v-model='selectedFilters'/>
                        <label for='halfyear'>На полгода</label>
                    </div>
                    <div class='filterItem--Input'>
                        <input type='checkbox' id='year' value='year' v-model='selectedFilters'/>
                        <label for='year'>На год</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyPagination from '../components/Pagination.vue'
import paginationMixin from '../mixins/pagination.mixin.js'

export default {
  data () {
    return {
      selectedFilters: []
    }
  },
  mixins: [paginationMixin],
  components: {
    MyPagination
  },
  watch: {
    selectedFilters (value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>
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
    width: 12%;
    padding-left: 80px;
}
.card {
    display: flex;
    border: 2px solid #E6E6E6;
    padding: 30px 50px;
    border-radius: 20px;
    justify-content: space-between;
}
.card--leftBlock img {
    width: 200px;
}
.card--centerBlock {
    width: 40%;
    margin-left: 100px;
    margin-right: 80px;
}
.card--centerBlock-title {
    font-weight: bold;
    font-size: 16px;
    color: #666666;
}
.card--centerBlock-model {
    font-size: 16px;
    color: #666666;
}
.card--centerBlock-from {
    font-weight: bold;
    font-size: 16px;
    color: #264B82;
}
.card--centerBlock-chacter {

}
.card--rigthBlock {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.card--rigthBlock-post {
    font-weight: bold;
    font-size: 22px;
    color: #264B82;
}
.card--rigthBlock-postName {
    font-size: 22px;
    color: #7E95B8;
}
.card--rigthBlock-actual {
    font-weight: bold;
    font-size: 16px;
    color: #282828;
}
.card--rigthBlock-actualText {
    font-weight: bold;
    font-size: 16px;
    color: #264B82;
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
