<template>
    <div>
        <div class='title' v-for='name of info.name' :key='name'>{{name}}</div>
        <div class='smallInfo'  v-for='types of info.type' :key='types'>Категория: {{types}}</div>
        <div class='cardInfo'>
            <div>
                <img src='/MaskGroup.svg' />
            </div>
            <div class='info'>
                <div v-for='i of info.description' :key='i.Id'>
                    <div class='cardInfo--title'>{{i.Name}}:</div>
                    <div class='cardInfo--info'>{{i.Value}}</div>
                </div>
            </div>
            <div class='addInfo'>
                <div>
                    <div class='cardInfo--title'>Котрактов</div>
                    <div class='cardInfo--contracts'>{{info.sold}}</div>
                </div>
                <div  class='cardInfo--fire'>
                    <img src='/fire.svg' style='margin-right: 6px;'/>
                    Востребованная продукция
                </div>
            </div>
        </div>
        <div class="parametersBlock">
            <div
                class='parametersBlock--item'
                @click.stop='changeParameters("pred")'
                :class='{activeParameters: parameters === "pred"}'
            >
                Предложения {{count}}
            </div>
            <div
                class='parametersBlock--item'
                @click.stop='changeParameters("caract")'
                :class='{activeParameters: parameters === "caract"}'
            >
                Характеристики
            </div>
            <div
                class='parametersBlock--item'
                @click.stop='changeParameters("classi")'
                :class='{activeParameters: parameters === "classi"}'
            >
                Классификация
            </div>
            <div class='parametersBlock--item settingsButton'>
                <img
                    src='/settings.svg'
                    @click.stop='openSettings'
                />
                <span class="paramentersCount">0</span>
                <img src='/arrowDown.svg' v-if='!showSettings'/>
                <img src='/arrowUp.svg' v-else/>
            </div>
        </div>
        <div class='postTable'>
            <div class='postTable--header'>
                <div class='postTable--header-item'>Поставщик</div>
                <div class='postTable--header-item2'>Условия поставки</div>
                <div class='postTable--header-item'>Стоимость с НДС</div>
            </div>
            <div class='postTable--content' v-for='post of info.sellers' :key='post.inn'>
                <div class='postTable--content-item'>
                    <div class='postTable--content-item--title'>{{post.name}}</div>
                    <div>ИНН: {{post.inn}}</div>
                </div>
                <div class='postTable--content-item2'>
                    <div></div>
                </div>
                <div class='postTable--content-item'>
                    <div class='postTable--content-item--price'></div>
                </div>
            </div>
        </div>
        <div class='hr'></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      showSettings: false,
      parameters: 'pred',
      count: 0
    }
  },
  async created () {
    await this.$store.dispatch('fetchInfo', this.$route.params.id)
    this.count = this.$store.getters.info.sellers.length
  },
  methods: {
    openSettings () {
      this.showSettings = !this.showSettings
    },
    changeParameters (parameters) {
      this.parameters = parameters
    }
  },
  computed: {
    ...mapGetters(['info'])
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
.cardInfo {
    display: flex;
    margin-top: 30px;
    margin-bottom: 40px;
}
.info {
    margin-left: 20px
}
.info>div {
    margin: 10px 0px;
    display: flex;
    align-items: center;
}
.info>div :first-child {
    margin-right: 10px;
}
.addInfo {
    margin-left: 150px
}
.addInfo>div {
    margin: 10px 0px
}
.cardInfo--title {
    font-weight: bold;
    font-size: 16px;
    color: #666666;
}
.cardInfo--info {
    font-size: 14px;
    color: #666666;
}
.cardInfo--price {
    font-weight: bold;
    font-size: 24px;
    color: #666666;
}
.cardInfo--contracts{
    font-weight: bold;
    font-size: 22px;
}
.cardInfo--fire {
    font-weight: bold;
    font-size: 16px;
    color: #666666;
    margin-top: 10px;
}
.parametersBlock {
    display: flex;
    justify-content: space-evenly;
    background: #E7EEF7;
    height: 50px;
    border-radius: 35px;
}
.parametersBlock--item {
    padding: 0.8rem 0px;
    color: #666666;
    font-weight: bold;
    cursor: pointer;
}
.activeParameters {
    border-bottom: 3px solid #264B82;
    color: #264B82;
}
.postTable {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 14px;
    color: #666666;
}
.postTable--content-item--title {
    font-weight: bold;
    font-size: 16px;
    color: #282828;
}
.postTable--content-item--price {
    font-weight: bold;
    font-size: 18px;
    color: #666666;
}
.postTable--header {
    display: flex;
    height: 40px;
    align-items: center;
    background: #E7EEF7;
    border-radius: 30px;
    padding: 0px 20px;
    color: #282828;
    font-weight: bold;
}
.postTable--header-item,
.postTable--content-item {
    width: 25%;
}
.postTable--header-item2,
.postTable--content-item2{
    width: 50%;
}
.postTable--content {
    display: flex;
    align-items: center;
    padding: 0px 20px;
}
.postTable--content .postTable--content-item div,
.postTable--content .postTable--content-item2 div {
    margin: 6px 0px;
}
.hr {
    height: 2px;
    background: #E7EEF7;
    margin-bottom: 20px;
}
.settingsButton {
    position: relative;
    display: flex;
    align-items: center;
}
.settingsButton :first-child{
    margin-right: 10px;
}
.paramentersCount {
    position: absolute;
    top: 7px;
    right: 10px;
    display: flex;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, #CB2D3E 0%, #EF473A 100%);
    color: white;
    font-size: 10px;
}
</style>
