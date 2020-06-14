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
                <img alt="Vue logo" src="../images/mood-soso.png">
            </div>
            <div style="display: inline; position: absolute; margin-left: 100px">
                <h1>
                    오늘 당신의 기분은 어떤가요?
                </h1>
                <span>
                    오분(5boon)은 오늘 하루 당신의 기분을 기록하고 공유할 수 있습니다.<br>
                    서로의 감정을 미리 공유하여 좀 더 나은 관계를 형성할 수 있게 도와드립니다.
                </span>
            </div>
        </div>
        <div class="section1" style="">
            <div style="display: inline; position: absolute;">
                <div style="display: inline-block">
                    <h1>
                        오늘 당신의 기분은 어떤가요?
                    </h1>
                    <span>
                        오분(5boon)은 오늘 하루 당신의 기분을 기록하고 공유할 수 있습니다.<br>
                        서로의 감정을 미리 공유하여 좀 더 나은 관계를 형성할 수 있게 도와드립니다.
                    </span>
                </div>
                <div class="bounce" style="display: inline-block; margin-left: 100px; margin-top: -40px">
                    <img alt="Vue logo" src="../images/mood-soso.png">
                </div>
            </div>
        </div>
        <div class="section1">
            <div class="bounce" style="display: inline-block;">
                <img alt="Vue logo" src="../images/mood-soso.png">
            </div>
            <div style="display: inline; position: absolute; margin-left: 100px">
                <h1>
                    오늘 당신의 기분은 어떤가요?
                </h1>
                <span>
                    오분(5boon)은 오늘 하루 당신의 기분을 기록하고 공유할 수 있습니다.<br>
                    서로의 감정을 미리 공유하여 좀 더 나은 관계를 형성할 수 있게 도와드립니다.
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About"
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
        padding: 7em 50em 3em 0;
		position: relative;
        height: 400px;
        width: auto;
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
