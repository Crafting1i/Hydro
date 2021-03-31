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
    margin: 0;
    font-size: 20rem;
    margin-top: -150px;
}
.page-404 p {
    margin: 0;
    font-size: 3.3em;
    margin-top: -120px;
}
.page-404 > a {
    color: #3eaf7c;
    font-size: 1.5em;
}
.page-404 > a:hover {
    text-decoration: underline;
} 
</style>