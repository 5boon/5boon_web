<template>
    <div style="text-align: center">
        <div class="banner">
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
            <div class="bounce" style="display: inline-block;">
                <img alt="logo" src="../images/mood-soso.png">
            </div>
            <div style="display: inline; position: absolute; margin-left: 50px">
                <img alt="mood color" src="../images/color.png" style="width: 500px;">
            </div>
            <div style="position: absolute; display: inline-block; margin-top: 140px;">
                <h5>
                    다양한 색감의 기분과 귀여운 캐릭터로 여러분의
                    <span class="bounce" style="color: #EA8E9A">기분</span>
                    을 표현해 보세요!
                </h5>
            </div>
        </div>
        <div class="section2" v-on:scroll="handleScroll1">
            <transition name="fade">
                <div v-if="showSection1" style="display: inline; position: absolute; margin-left: 20px">
                    <img alt="mood color" src="../images/choice-mood.png" style="width: 150px; margin-right: 40px">
                    <img alt="mood color" src="../images/write.png" style="width: 150px; margin-right: 40px">
                    <img alt="mood color" src="../images/home.png" style="width: 150px;">
                    <div style="position: absolute; margin-top: 50px">
                        <h5 style="margin-left: 90px">
                            <span style="color: #EA6D7D">기분</span>
                            을 선택하고 간단한
                            <span style="color: #9795FF">설명</span>
                            을 적을수 있어요!
                        </h5>
                    </div>
                </div>
            </transition >
        </div>
        <div class="section3" v-on:scroll="handleScroll2">
            <transition name="fade">
                <div v-if="showSection2" style="display: inline; position: absolute; margin-left: -30px">
                    <img alt="mood color" src="../images/group-list.png" style="width: 150px; margin-right: 30px">
                    <img alt="mood color" src="../images/group-detail.png" style="width: 150px; margin-right: 30px">
                    <div style="position: absolute; margin-top: 50px; display: inline-block; text-align: left">
                        <h5 style="width: 300px;">
                            나만의 그룹을 만들어서 <br>친구들과 기분을 <span style="color: #EA8E9A">공유</span>해 보세요!
                        </h5>
                        <span style="font-size: small">
                            또는 팀원들과 그룹을 만들어서 출근하기전 팀장님의 기분을 미리 살펴보는건 어떠세요?
                        </span>
                    </div>
                </div>
            </transition >
        </div>
        <div class="section4" v-on:scroll="handleScroll3">
            <transition name="fade">
                <div v-if="showSection3" style="display: inline; position: absolute; margin-left: -30px">
                    <div style="position: absolute; margin-top: 50px; display: inline-block; text-align: left; width: 200px">
                        <h5>
                            주간, 월간, 연간 <span style="color: #5070C2">그래프</span>를 확인할 수 있어요!
                        </h5>
                        <span style="font-size: small">
                            여러분의 기분을 그래프로 확인하고, 그때 당시의 기분과 기억을 되돌아 볼 수 있어요!
                        </span>
                    </div>
                        <img alt="mood color" src="../images/graph-week.png" style="width: 150px; margin-right: 30px; margin-left: 250px">
                        <img alt="mood color" src="../images/graph-year.png" style="width: 150px; margin-right: 30px">

                </div>
            </transition >
        </div>
    </div>
</template>

<script>
    export default {
        name: "About",
        data: function () {
            return {
                showSection1:false,
                showSection2:false,
                showSection3:false
            }
        },
        created () {
            // 스크롤 이벤트 등록
            window.addEventListener('scroll', this.handleScroll1);
            window.addEventListener('scroll', this.handleScroll2);
            window.addEventListener('scroll', this.handleScroll3);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll1);
            window.removeEventListener('scroll', this.handleScroll2);
            window.removeEventListener('scroll', this.handleScroll3);
        },
        methods:{
           handleScroll1 () {
              window.pageYOffset > 0 ? this.showSection1=true : this.showSection1=false;
           },
           handleScroll2 () {
              window.pageYOffset > 500 ? this.showSection2=true : this.showSection2=false;
           },
           handleScroll3 () {
              window.pageYOffset > 1000 ? this.showSection3=true : this.showSection3=false;
           }
        },

    }
</script>

<style scoped>
    .banner{
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
        padding: 7em 50em 3em 0;
		position: relative;
        height: 400px;
        width: auto;
    }

    .section2{
        margin-left: 200px;
        padding: 2em 50em 3em 0;
		position: relative;
        height: 500px;
        width: auto;
    }

    .section3{
        margin-left: 200px;
        padding: 4em 50em 3em 0;
		position: relative;
        height: 500px;
        width: auto;
    }

    .section4{
        margin-left: 200px;
        padding: 4em 50em 3em 0;
		position: relative;
        height: 530px;
        width: auto;
    }

    /* fade in, out  */
    .fade-enter-active  {
        transition: all 2s;
    }

    .fade-leave-active {
        transition: all 2s;
    }

    .fade-enter, .fade-leave-to  {
       opacity: 0;
    }

    /* 0.5 초씩 바운스 효과 */
    .bounce {
        position: relative;
        /* 파폭 */
        -moz-animation: bounce 1s infinite linear;
        /* 크롬 */
        -webkit-animation: bounce 1s infinite linear;
        -o-animation: bounce 1s infinite linear;
        animation: bounce 1s infinite linear;
    }

    /*
      바운스의 높이
      0% 일 때, 0px
      50%일 때, -5px
      70%일 때, -50px
      100%일 때, 0px
    */
    @-webkit-keyframes bounce {
      0% {
        top: 0;
      }

      50% {
        top: -5px;
      }

      70% {
        top: -50px;
      }

      100% {
        top: 0;
      }
    }

    @-moz-keyframes bounce {
      0% {
        top: 0;
      }

      50% {
        top: -5px;
      }

      70% {
        top: -50px;
      }

      100% {
        top: 0;
      }
    }

    @-o-keyframes bounce {
      0% {
        top: 0;
      }

      50% {
        top: -5px;
      }

      70% {
        top: -50px;
      }

      100% {
        top: 0;
      }
    }

    @-ms-keyframes bounce {
      0% {
        top: 0;
      }

      50% {
        top: -5px;
      }

      70% {
        top: -50px;
      }

      100% {
        top: 0;
      }
    }

    @keyframes bounce {
      0% {
        top: 0;
      }

      50% {
        top: -5px;
      }

      70% {
        top: -50px;
      }

      100% {
        top: 0;
      }
    }
</style>
