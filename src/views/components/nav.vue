<template>
<nav>
    <div class="navbar">
        <img src="../../assets/img/blue-logo.png" alt="CLILogo" class="logo"><h1>Hydro Bot!</h1>
    </div>
</nav>
</template>
<script>
export default {
    name: 'navbar'
}
</script>

<style>
.navbar {
    border-bottom: 1px solid #eaecef;
    width: 100%;
    line-height: 2.2rem;
    padding: .7rem 1.5rem;
    vertical-align: middle;
    box-sizing: border-box;
    pointer-events: none;
    background: white;
    position: fixed;
    z-index: 20;
    top: 0;
}
.navbar > .logo {
    width: 2.3rem;
    height: 2.3rem;
    margin-right: 8px;
    vertical-align: bottom;
}
.navbar > h1 {
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 600;
    position: relative;
    vertical-align: middle;
}
</style>