<template>
    <div style="text-align: center">
        <div class="intro container">
            <div>
                <img class="intro-img" alt="etc intro" src="../images/etc-intro.jpg" style="">
            </div>
        </div>
        <div class="section1">
            <div class="icon-wrapper">
                <a href="https://github.com/5boon" target="_sub">
                    <img class="icon" alt="github" src="../images/github.png">
                </a>
                <span class="block">
                    GitHub
                </span>
            </div>
            <div class="icon-wrapper">
                <a href="#" target="_sub">
                    <img class="icon" alt="instagram" src="../images/instagram.png">
                </a>
                <span class="block">
                    Instagram
                </span>
            </div>
            <div class="icon-wrapper">
                <a href="#" target="_sub">
                    <img class="icon" alt="appstore" src="../images/appstore.png">
                </a>
                <span class="block">
                    AppStore
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Etc",
    }
</script>

<style scoped>
    .container {
      display: inline-block;
    }

    .intro-img {
        max-width: 100%;
        height: auto !important;
        margin-top: -112px;
    }

    .intro {
        padding: 7em 0 0 0;
		position: relative;
        max-width: 100%;
        background-color: #3e3042;
        color: white;
    }

    .section1{
        margin-left: 200px;
        padding: 7em 10em 3em 0;
		position: relative;
        height: 350px;
        width: auto;
    }

    .icon-wrapper {
        margin-right: 60px;
        display: inline-block;
    }

    .icon {
        width: 80px;
        height: 80px;
    }

    .block {
        display: block;
    }

</style>
