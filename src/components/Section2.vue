<template>
    <div class="section2-wrapper">
        <div>
            <b-carousel
                id="carousel-1"
                :interval="1500"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
            >
                <!-- key 값이 유니크 하지 않으면 에러가남   -->
                <div><img src="../assets/logo.png" height="200" width="200"/>
                    <!-- Duplicate keys detected: { key }. This may cause an update error. -->
                    <b-carousel-slide
                            v-for="(img, i) in imgList" :key="`A-${i}`" :img-src="img.url"
                            style="height: 850px; background: white;">
                        <!-- <img alt="Vue logo" src="../images/good_app.png"> -->
                    </b-carousel-slide>
                </div>
            </b-carousel>
            <img class="phone-border" alt="iphone" src="../images/iphone.png">
        </div>
    </div>
</template>

<script>
    export default {
        name: "section2",
        data: function() {
            return {
                items: [1, 2, 3, 4],
                imgList: [
                    {url: require('../images/good_app.png'), alt: 'good'},
                    {url: require('../images/best_app.png'), alt: 'best'},
                    {url: require('../images/soso_app.png'), alt: 'soso'},
                    {url: require('../images/mope_app.png'), alt: 'mope'},
                    {url: require('../images/bad_app.png'), alt: 'bad'},
                    {url: require('../images/worst_app.png'), alt: 'worst'}
                ]
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    .section2-wrapper {
        display: inline-block;
        height: 1000px;
        width: 400px;
        margin-top: 100px;
    }

    .phone-border {
        position: absolute;
        width: 590px;
        height: 970px;
        top: 900px;
        margin-left: -282px
    }
</style>
