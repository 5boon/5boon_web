<template>
    <div style="text-align: center">
        <div class="intro">
            <div class="intro-inner">
                <img class="" alt="etc intro" src="../images/etc-intro.jpg" style="width: 1450px; margin-top: -112px">
            </div>
        </div>
        <div class="section1">
            <div class="icon-wrapper">
                <a href="https://github.com/5boon" target="_sub">
                    <img class="icon" alt="github" src="../images/github.png">
                </a>
                <span style="display: block">
                    GitHub
                </span>
            </div>
            <div class="icon-wrapper">
                <a href="#" target="_sub">
                    <img class="icon" alt="instagram" src="../images/instagram.png">
                </a>
                <span style="display: block">
                    Instagram
                </span>
            </div>
            <div class="icon-wrapper">
                <a href="#" target="_sub">
                    <img class="icon" alt="appstore" src="../images/appstore.png">
                </a>
                <span style="display: block">
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
    .intro {
        padding: 7em 0 3em 0;
		position: relative;
        height: 529px;
        width: auto;
        /*background-image: url("../images/etc-intro.png") ;*/
        /*background-size: 2000px;*/
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

    .intro-inner {
        height: 400px;
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

</style>
