<template>
	<router-view />
</template>

<script>
export default {
	data() {
		return
	}
}
</script>

<style>
/* Скролбар */
::-webkit-scrollbar {
    width: 2px;
    color: white;
}
::-webkit-scrollbar-track {
    background: #212121;
}
::-webkit-scrollbar-thumb {
    background: #fafafa;
}
::-webkit-scrollbar-thumb:hover {
    background: #fafafa;
}

/* Стандартная разметка CSS для работы */
body {
    margin: 0;
    font-family: Inter,Roboto,Oxygen,Fira Sans,Helvetica Neue,sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    transition: 0.5s;
}
h1 {
    font-size: 2.3rem;
}
a:active, a:hover, a {
    text-decoration: none;
}
span {
    font-size: 16px;
}
p {
    color: #4a4a4a;
    font-size: 16px;
}
/* img {
    pointer-events: none;
} */

/* Убираем проблемы от webkit'a */
:-webkit-any(article, aside, nav, section) :-webkit-any(article, aside, nav, section) h1 {
    margin-block-start: 0rem;
    margin-block-end: 0rem;
}
:-webkit-any(article, aside, nav, section) :-webkit-any(article, aside, nav, section) :-webkit-any(article, aside, nav, section) h1 {
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
}
:-webkit-any(article, aside, nav, section) h1 {
    margin-block-start: 0;
    margin-block-end: 0;
}
*, ::after, ::before {
    box-sizing: border-box;
}
</style>