<template>
    <b-carousel clid="carousel-fade" style="text-shadow: 0px 0px 2px #000"
                fade
                indicators
                :interval="400">
      <b-carousel-slide style="height: 400px" class="mood-best">
        <div style="margin-bottom: 100px">
          <img alt="Vue logo" src="../images/mood-best.png">
        </div>
      </b-carousel-slide>
      <b-carousel-slide  style="height: 400px"  class="mood-good">
        <div style="margin-bottom: 100px">
          <img alt="Vue logo" src="../images/mood-good.png">
        </div>
      </b-carousel-slide>
      <b-carousel-slide  style="height: 400px"  class="mood-soso">
        <div style="margin-bottom: 100px">
          <img alt="Vue logo" src="../images/mood-soso.png">
        </div>
      </b-carousel-slide>
      <b-carousel-slide  style="height: 400px"  class="mood-mope">
        <div style="margin-bottom: 100px">
          <img alt="Vue logo" src="../images/mood-best.png">
        </div>
      </b-carousel-slide>
      <b-carousel-slide  style="height: 400px"  class="mood-bad">
        <div style="margin-bottom: 100px">
          <img alt="Vue logo" src="../images/mood-best.png">
        </div>
      </b-carousel-slide>
      <b-carousel-slide  style="height: 400px"  class="mood-worst">
        <div style="margin-bottom: 100px">
          <img alt="Vue logo" src="../images/mood-best.png">
        </div>
      </b-carousel-slide>
    </b-carousel>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<style>
  .mood-best {
    background: linear-gradient(133.05deg, #EA6D7D 0%, #EA8E9A 100%);
  }
  .mood-good {
    background: linear-gradient(133.05deg, #EA8E9A 0%, #F4B1BA 100%);
  }
  .mood-soso {
    background: linear-gradient(133.05deg, #F4B1BA 0%, #9795FF 100%);
  }
  .mood-mope {
    background: linear-gradient(133.05deg, #9795FF 0%, #5070C2 100%);
  }
  .mood-bad {
    background: linear-gradient(133.05deg, #5070C2 0%, #494F67 100%);
  }
  .mood-worst {
    background: linear-gradient(133.05deg, #494F67 0%, #383B47 100%);
  }
</style>
