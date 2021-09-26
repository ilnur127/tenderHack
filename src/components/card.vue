<template>
    <div class='card' @click='goToCard(card.id)'>
        <div class='card--leftBlock'>
            <img src='/MaskGroup.svg' />
        </div>
        <div class='card--centerBlock'>
            <div class='card--centerBlock-title' v-for='name of card.name' :key='name'>{{name}}</div>
            <div class='card--centerBlock-model'>Модель: Classic</div>
            <div>Категория: <span class='card--centerBlock-from'  v-for='typeO of card.type' :key='typeO'>{{typeO}}</span></div>
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
                <span class='card--rigthBlock-actualText'>{{period}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['card', 'period'],
  methods: {
    async goToCard (id) {
      let Id = ''
      for (const i in id) {
        Id = id[i]
      }
      this.show = false
      this.$router.push(`/detail/${Id}`)
      await this.$store.dispatch('fetchInfo', Id)
    }
  }
}
</script>
<style scoped>
.card {
    display: flex;
    border: 2px solid #E6E6E6;
    padding: 30px 50px;
    border-radius: 20px;
    justify-content: space-between;
    cursor: pointer;
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
</style>
