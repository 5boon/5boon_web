<template>
    <div style="text-align: center">
        <div class="intro">
            <div style="margin-top: 40px">
                <h1>
                    오늘 당신의 기분은 어떤가요?
                </h1>
                <span>
                    오분(5boon)은 오늘 하루 당신의 기분을 기록하고 공유할 수 있습니다.<br>
                    서로의 감정을 미리 공유하여 좀 더 나은 관계를 형성할 수 있게 도와드립니다.
                </span>
            </div>
        </div>
        <div class="section1">
            <div style="width: 150px; margin-right: 50px; display: inline-block">
                <div class="box" style="background: #BDBDBD; margin-bottom: 10px">
                    <img class="profile" alt="mood color" src="../images/5boon_icon.png">
                </div>
                <span style="">Kanz</span><br>
                <span style="font-size: small; color: #494F67">iOS Developer</span>
            </div>
            <div style="width: 150px; margin-right: 50px; display: inline-block">
                <div class="box" style="background: #BDBDBD; margin-bottom: 10px">
                    <img class="profile" alt="mood color" src="../images/5boon_icon.png">
                </div>
                <span style="">Fernando</span><br>
                <span style="font-size: small; color: #494F67">iOS Developer</span>
            </div>
            <div style="width: 150px; margin-right: 50px; display: inline-block">
                <div class="box" style="background: #BDBDBD; margin-bottom: 10px">
                    <img class="profile" alt="mood color" src="../images/5boon_icon.png">
                </div>
                <span style="">Dorosi</span><br>
                <span style="font-size: small; color: #494F67">Designer</span>
            </div>
            <div style="width: 150px; margin-right: 50px; display: inline-block">
                <div class="box" style="background: #BDBDBD; margin-bottom: 10px">
                    <img class="profile" alt="mood color" src="../images/5boon_icon.png">
                </div>
                <span style="">Jay</span><br>
                <span style="font-size: small; color: #494F67">Backend Developer</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Member"
    }
</script>

<style scoped>
    .intro {
        padding: 7em 0 3em 0;
		position: relative;
        height: 400px;
        width: auto;
        background-image: url("../images/about-baner.jpg") ;
        background-size: 2200px;
        color: white;
    }

    .section1{
        margin-left: 200px;
        padding: 7em 10em 3em 0;
		position: relative;
        height: 400px;
        width: auto;
    }

    .box {
        width: 150px;
        height: 150px;
        border-radius: 70%;
        overflow: hidden;
    }

    .profile {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
