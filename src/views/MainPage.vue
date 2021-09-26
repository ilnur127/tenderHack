<template>
<div class='mainPage'>
    <div>
        <div class='mainPage--header'>Портал Поставщиков</div>
        <div class='mainPage--text'>Оперативные закупки товаров, работ и услуг</div>
        <div class='mainPage--buttons'>
            <button class='mainPageButton mainPage--buttons-post'>Стать поставщиком</button>
            <button class='mainPageButton mainPage--buttons-customer'>Стать заказчиком</button>
        </div>
        <div class='hr'></div>
        <div>
            <Carousel :settings="settings" :autoplay="3000" :wrap-around="true">
                <Slide v-for="slide in sliderArr" :key="slide.id">
                    <div class="carousel__item">
                        <div class="carousel__item_header">
                            {{ slide.header }}
                        </div>
                        <div class="carousel__item_text">
                            {{ slide.text }}
                        </div>
                    </div>
                </Slide>

                <template #addons>
                    <Pagination />
                </template>
            </Carousel>
        </div>
    </div>
    <div>
        <img src='https://zakupki.mos.ru/static/media/main_image.a7cae9f6.png' />
    </div>
</div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
export default {
  data () {
    return {
      settings: {
        itemsToShow: 3
      },
      sliderArr: [
        {
          id: 1,
          header: '3042',
          text: 'Поставщиков зарегестрировано за месяц'
        },
        {
          id: 2,
          header: '13,2 млн',
          text: 'стандартных товарных единиц'
        },
        {
          id: 3,
          header: '236,2 тыс.',
          text: 'Поставщика'
        },
        {
          id: 4,
          header: '3042',
          text: 'Поставщиков зарегестрировано за месяц'
        },
        {
          id: 5,
          header: '13,2 млн',
          text: 'стандартных товарных единиц'
        },
        {
          id: 6,
          header: '236,2 тыс.',
          text: 'Поставщика'
        },
        {
          id: 7,
          header: '3042',
          text: 'Поставщиков зарегестрировано за месяц'
        },
        {
          id: 8,
          header: '13,2 млн',
          text: 'стандартных товарных единиц'
        },
        {
          id: 9,
          header: '236,2 тыс.',
          text: 'Поставщика'
        },
        {
          id: 10,
          header: '3042',
          text: 'Поставщиков зарегестрировано за месяц'
        },
        {
          id: 11,
          header: '13,2 млн',
          text: 'стандартных товарных единиц'
        },
        {
          id: 12,
          header: '236,2 тыс.',
          text: 'Поставщика'
        }
      ]
    }
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style scoped>
    .mainPage {
        display: flex;
        padding-top: 50px;
    }
    .mainPage>div {
        width: 50%;
    }
    .mainPage--header {
        text-align: left;
        font-weight: bold;
        font-size: 60px;
        text-transform: uppercase !important;
        line-height: 76px;
    }
    .mainPage--text {
        margin-bottom: 48px;
        font-size: 25px;
        margin-top: 23px;
        color: #666666;
    }
    .carousel__item {
        text-align: left;
        width: 200px;
        height: 100px;
    }
    .carousel__item_header {
        font-weight: bold;
        font-size: 26px;
        margin-bottom: 7px;
    }
    .carousel__item_text {
        font-size: 15px;
    }
    .mainPage--buttons {
        margin-bottom: 55px;
    }
    .mainPageButton {
        box-shadow: 0px 15px 15px 4px rgb(0 0 0 / 30%);
        border-radius: 200px;
        border: none;
        font-weight: bold;
        font-size: 19px;
        width: 230px;
        height: 52px;
    }
    .mainPage--buttons-post {
        background: linear-gradient(90deg, #CB2D3E 0%, #EF473A 100%);
        color: white;
        margin-right: 19px;
    }
    .mainPage--buttons-customer {
        background: #FFFFFF;
        color: #666666;
    }
    .hr {
        background: #E6E6E6;
        height: 1px;
        margin-bottom: 45px;
    }
</style>
