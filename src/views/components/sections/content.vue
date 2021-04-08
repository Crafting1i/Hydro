<template>
    <div class="content">
        <h1>
            Немного о Hydro
        </h1>
        <div class='description'>
            <div id="firstContent">
                <h2>
                    Описание
                </h2>
                <p>
                    Hydro - это небольшой, ещё развивающийся, но достойный бот. В нём есть относительно большой асортимент команд. К примеру можно узнать полную информацию о пользователе или сервере.
                    Конечно, есть и развлечения. Бот может придоставить доступ к разным библиотекам и 18+ контентом, а может просто помочь создать атмосферу с помощью RP-команд.
                    К слову, предусмотренна защита от тех, кто захочет посмотреть непристойности в неподходящем канале, т.е. на котором нет пометки nsfw.
                    Об остальных командах можно узнать введя в чат <span class='command-text'>hy!help</span>.
                </p>
            </div>
            <div>
                <h2>О проекте</h2>
                <p>
                    Hydro как проект ещё совсем молодой. Мы создаём не большие вещи, например: сайт или бота для Discord. Мы учимся, совершенствуемся, но опыта ещё не много.
                    Мы бы хотели, чтобы Вы нам помогли и рассказали про какие-то ошибки или недочёты, а может, просто свои пожелаения и идеи. Вы можете это сделать на <a href='https://discord.gg/eN79cquNbz'>дискорд сервере партнёра</a>.
                    Будем рады вашей поддержке.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeContent"
}
</script>

<style>
.content {
    padding: 50px 30px 40px;
    margin-top: 100vh;
    z-index: 10;
    position: relative;
    background: white;
    border-top: 1px solid #eaecef;
}
.content > h1 {
    text-align: center;
    font-weight: 700;
}
.description {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
}
.description > div {
    display: flex;
    background: #f6f6f6;
    flex-direction: column;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    padding: 0 35px 10px;
    width: 40vw;
}
.command-text {
    background-color: #b4b4b4;
    border: 1px solid #b4b4b4;
    border-radius: 10px;
    font-size: 1em;
    padding: 0 5px;
}
.description p {
    font-size: 1.2rem;
}
p > a {
    color: #4fc08d;
}
@media screen and (max-width: 900px){
    .description {
        flex-direction: column;
        justify-content: space-around;
    }
    .description > div {
        width: 100%;
        margin: 15px 0;
    }
    .description > div#firstContent {
        margin-top: 0;
    }
    
}
</style>