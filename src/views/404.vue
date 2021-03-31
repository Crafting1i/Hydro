<template>
    <div class='page-404'>
        <h1>
            404
        </h1>
        <p>
            Страница не найдена
        </p>
        <router-link to="/">
            На главную
        </router-link>
    </div>
</template>

<script>
export default {
    name: "404"
}
</script>

<style>
/* 404*/
.page-404 {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.page-404 > h1 {
    margin: -150px 0 0;
    font-size: 20rem;
}
.page-404 > p {
    margin: -120px 0 0;
    font-size: 3.3em;
}
.page-404 > a {
    color: #3eaf7c;
    font-size: 1.5em;
}
.page-404 > a:hover {
    text-decoration: underline;
}
@media screen and (max-width: 900px) {
    .page-404 > h1 {
        font-size: 50vw;
        margin: 0;
    }
    .page-404 > p {
        font-size: 8.5vw;
        margin-top: -2.6em;
    }
    .page-404 > a {
        color: #3eaf7c;
        font-size: 6vw;
    }
}
</style>