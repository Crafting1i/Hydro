<template>
    <div>
        <navbar />
        <mainBlock />
        <footerBlock />
    </div>
</template>

<script>
import navbar from "./components/nav";
import mainBlock from "./components/main";
import footerBlock from "./components/footer";

export default {
    name: "App",
    components: {
        navbar,
        mainBlock,
        footerBlock
    },
};
</script>

<style>
:root {
    --link-size: 2.5rem;
}
body, html {
    margin: 0;
    padding: 0;
    background: #fff;
}
</style>