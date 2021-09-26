<template>
<div class='authBlock'>
    <div class='authModel'>
        <div class='close'>
            <img src='/Group.svg' class='closeGray'/>
            <img src='/GroupRed.svg' class='closeRed'/>
        </div>
        <div class='authModel--header'>Авторизация</div>
        <div>
            <div class='authModel--input'>
                <label>Логин</label>
                <input v-model='login' placeholder='Введите логин'/>
            </div>
            <div class='authModel--input'>
                <label>Пароль</label>
                <input v-model='password' placeholder='Введите пароль'/>
            </div>
            <div>
                <button class='authModel--enter'>Войти</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
</script>
<style scoped>
.authBlock {
    width: 100%;
    height: 100%;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    position: absolute;
    top: 0;
    z-index: 99999;
}
.authModel {
    position: absolute;
    padding: 40px 140px 20px 140px;
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
    color: #C4C4C4;
}
.authModel--input input:focus{
    outline: none;
}
.authModel--enter {

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
</style>
