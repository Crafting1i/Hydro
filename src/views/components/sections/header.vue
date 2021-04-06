<template>
    <header class="preview">
        <div class="inner">
            <div class="left">
                <img class="hero-logo" src="../../../assets/img/blue-logo.png" alt="Логотип бота">
            </div>
            <div class="right">
                <h2 class="name">Hydro Project</h2>
                <h1>
                    Прогрессивный
                    <br>JavaScript Бот
                </h1>
                <p>
                    <a class="button has-icon" href="https://discord.com/api/oauth2/authorize?client_id=694864535638769704&permissions=8&scope=bot">
                        <svg aria-labelledby="simpleicons-play-icon" role="img" viewBox="0 0 100 125" fill="#FFFFFF">
                            <title id="simpleicons-play-icon" lang="en">Play icon</title>
                            <path d="M50,3.8C24.5,3.8,3.8,24.5,3.8,50S24.5,96.2,50,96.2S96.2,75.5,96.2,50S75.5,3.8,50,3.8z M71.2,53.3l-30.8,18  c-0.6,0.4-1.3,0.5-1.9,0.5c-0.6,0-1.3-0.1-1.9-0.5c-1.2-0.6-1.9-1.9-1.9-3.3V32c0-1.4,0.8-2.7,1.9-3.3c1.2-0.6,2.7-0.6,3.8,0  l30.8,18c1.2,0.6,1.9,1.9,1.9,3.3S72.3,52.7,71.2,53.3z"></path>
                        </svg>
                        Пригласить
                    </a>
                    <a class="button git has-icon" href="https://github.com/Crafting1i" target="_blank" rel="noopener">
                        <svg aria-labelledby="simpleicons-github-dark-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title id="simpleicons-github-dark-icon" lang="en">GitHub Dark icon</title>
                            <path fill="#7F8C8D" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                        </svg>
                        GitHub
                    </a>
                </p>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "header"
}
</script>

<style>
header {
    height: 100vh;
}
.preview {
    padding: 100px 30px 40px;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
}
.inner {
    max-width: 1260px;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
}
/* левая часть, с логотипом*/
.preview .left {
    width: 61%;
}
.preview .left > img {
    height: 80%;
    float: right;
    margin-right: 20px;
}
/* Правая часть*/
.preview .right {
    width: 39%;
}
/* Кнопки*/
a.button {
    padding: .7em 1.5em;
    margin-right: 10px;
    background: #4fc08d;
    width: -webkit-fit-content;
    display: inline-block;
    border-radius: 100px;
    color: white;
    font-family: Inter,Roboto,Oxygen,Fira Sans,Helvetica Neue,sans-serif;
    font-weight: 700;
    letter-spacing: 0.1em;
    padding: 0.75em 2em;
    margin: 10px 10px 10px 5px;
}
a.has-icon {
    position: relative;
    text-indent: 1.3em;
}
a.has-icon > svg {
    position: absolute;
    left: .4em;
    top: .5em;
    width: 2.5em;
    height: 2.5em;
    text-align: left !important;
}
/* Изменение для серой кнопки*/
a.git {
    padding-left: 36px !important;
    background: #f6f6f6 !important;
    color: #6a5959 !important;
}
a.git > svg {
    top: .2em !important;
}
/* Скрытие название бота*/
.name {
    display: none;
}
/* Адаптив*/
@media screen and (max-width: 900px) {
    /* Для телефонов*/
    /* Настройка болока с содержимым*/
    main{
        height: 100%
    }
    .inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    /* Название бота*/
    .name {
        display: block;
        font-size: 2rem !important;
    }
    /* Изменение правой части превью*/
    .preview .right {
        text-align: center;
        align-items: center;
        width: 100%;
    }
    .preview .right h1 {
        font-size: 2rem !important;
    }
    /* Изменение левой части превью*/
    .preview .left {
        display: flex;
        width: 100%;
        place-content: center;
    }
    .preview .left > img {
        margin: 0;
        width: 60vw;
    }
}
@media screen and (max-width: 280px) {
    /* Поправки для Galaxy Fold*/
    .preview .right a {
        font-size: .88em;
    }
    .preview .right > h1 {
        font-size: 1.7rem !important;
    }
}
</style>