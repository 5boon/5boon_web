<template>
    <div style="text-align: center">
        <div class="intro">
            <div style="margin-top: 30px">
                <h1>
                    오늘의 기분을 공유하고 싶었던
                    <span>5boon</span> 멤버들을 소개합니다!
                </h1>
                <span>
                    아 오늘 회의들어 갔는데 다들 기분 안좋아 보이더라<br>
                    그러게... 미리 기분을 알면 좋을텐데<br>
                    좋은거, 나쁜거 함께 공유하면 더 좋은 관계가 될텐데 말이야~
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
