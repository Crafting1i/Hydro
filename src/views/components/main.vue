<template>
    <main>
        <header-block />
        <content-block />
    </main>
</template>

<script>
import headerBlock from "./sections/header"
import contentBlock from "./sections/content"

export default {
    name: "main",
    components: {
        headerBlock,
        contentBlock
    }
};
</script>

<style>
main {
    flex: 1 0 auto;
    height: 100%;
}
</style>