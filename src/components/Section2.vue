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
                <!-- key값이 유니크 하지 않으면 에러가남   -->
                <div>
                    <!-- Duplicate keys detected: { key }. This may cause an update error. -->
                    <b-carousel-slide
                            v-for="(img, i) in imgList" :key="`A-${i}`" :img-src="img.url"
                            style="height: 850px; background: white;">
                        <!-- <img alt="Vue logo" src="../images/good_app.png"> -->
                    </b-carousel-slide>
                </div>
            </b-carousel>
            <img class="phone-border" alt="Vue logo" src="../images/iphone.png">
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
                    {url: require('../images/good_app.png'), alt: 'I love you nature'},
                    {url: require('../images/best_app.png'), alt: 'Now with dog - Rosé'},
                    {url: require('../images/soso_app.png'), alt: 'Jeg er i Danmark'},
                    {url: require('../images/mope_app.png'), alt: 'Badabimbadabum'},
                    {url: require('../images/bad_app.png'), alt: 'I love you nature'},
                    {url: require('../images/worst_app.png'), alt: 'Now with dog - Rosé'}
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
