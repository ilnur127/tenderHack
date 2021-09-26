<template>
    <div class='NavBar--block'>
        <div
            class='NavBar--block-item'
            @click='$router.push("/")'
        >
            <img src='https://zakupki.mos.ru/static/media/pp_logo.80b7ad86.svg' />
        </div>
        <div class='NavBar--block-item centerMenu'>
            <div class='centerMenu--item'>
                <div>
                    <img src='/menu.svg' />
                </div>
                <div class='centerMenu--item-text'>Меню</div>
            </div>
            <div class='centerMenu--item'>
                <div>
                    <img src='/audio.svg' />
                </div>
                <div class='centerMenu--item-text otherColor'>
                    Оставить обращение
                </div>
            </div>
            <div class='centerMenu--item'>
                <div>
                    <img src='/solution.svg' />
                </div>
                <div class='centerMenu--item-text otherColor'>
                    Центр поддержки
                </div>
            </div>
            <div class='centerMenu--item'>
                <div>
                    <img src='/cursor.svg' />
                </div>
                <div class='centerMenu--item-text otherColor'>
                    г Казань
                </div>
            </div>
            <div class='centerMenu--item-buttons'>
                <div class='centerMenu--item-buttons--shop'>
                    <img src='/shopping-cart.svg' width='26px' />
                </div>
                <div>
                    <img src='/ruFlag.svg' width='16px' />
                </div>
            </div>
        </div>
        <div class='NavBar--block-item rigthMenuBlock'>
            <div class='rigthMenuBlock--FIO'>
                <div class='rigthMenuBlock--FIO-header'>Гареев Ильнур Ильдарович</div>
                <div class='rigthMenuBlock--FIO-firm'>ЗАО Торос</div>
            </div>
            <div  class='rigthMenuBlock--img'>
                <img src='/lk.svg' />
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
    .NavBar--block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #FFFFFF;
        box-shadow: 0px 4px 20px rgb(0 0 0 / 8%);
        height: 76px;
        padding: 0px 75px;
        z-index: 99999;
        position: relative;
    }
    .NavBar--block-item {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .NavBar--block-item--menu {
        display: flex;
        align-items: center;
    }
    .menu--lines {
        display: inline-block;
        vertical-align: middle;
        margin-top: -4px !important;
    }
    .menu--lines>div{
        width: 20px;
        height: 2px;
        background-color: rgb(38, 75, 130);
        margin: 7px 0px;
        border-radius: 1px;
    }
    .centerMenu--item {
        display: flex;
        align-items: center;
        margin-left: 40px;
    }
    .centerMenu--item img{
        width: 22px;
    }
    .centerMenu--item-text {
        margin-left: 20px;
    }
    .otherColor {
        color: #264B82;
    }
    .centerMenu--item-buttons {
        margin-left: 50px;
        display: flex;
        align-items: center;
    }
    .centerMenu--item-buttons--shop {
        margin-right: 20px
    }
    .rigthMenuBlock {
        border-left: 1px solid #E6E6E6;
    }
    .rigthMenuBlock--FIO {
        width: 150px;
        text-align: end;
        margin-right: 46px;
        font-weight: normal;
        color: #282828;
    }
    .rigthMenuBlock--FIO-header {
        font-size: 14px;
        font-weight: 600;
    }
    .rigthMenuBlock--FIO-firm {
        font-size: 14px;
    }
    .rigthMenuBlock--img>img {
        height: 55px;
    }
</style>
