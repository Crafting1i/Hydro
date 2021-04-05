<template>
    <div class="content">
        <h1>
            Немного о Hydro
        </h1>
        <div class='description'>
            <div>
                <h2>
                    Описание
                </h2>
                <p>
                    Hydro - это небольшой, ещё развивающийся, но достойный бот. В нём есть относительно большой асортимент команд. К примеру можно узнать полную информацию о пользователе или сервере.
                    Конечно, есть и развлечения. Бот может придоставить доступ к разным библиотекам и 18+ контентом, а может просто помочь создать атмосферу с помощью RP-команд. К слову, предусмотренна защита от тех, кто захочет посмотреть непристойности в неподходящем канале, т.е. на котором нет пометки nsfw.
                    Об остальных командах можно узнать введя в чат <span class='command-text'>hy!help</span>.
                </p>
            </div>
            <div>
                <h2>Help</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum nam a eligendi suscipit laborum ipsam, nihil necessitatibus dolores quos reiciendis ipsa iure iste vero mollitia nulla cumque doloremque alias esse.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeContent"
}
</script>

<style scouped>
.content {
    padding: 60px 30px 40px
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
h2
.command-text {
    background-color: gray;
    border: 1px solid gray;
    border-radius: 20px;
}
</style>