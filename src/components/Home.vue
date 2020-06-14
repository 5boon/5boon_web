<script src="routes/index.js"></script>
<script src="main.js"></script>
<template>
    <div>
        <div>
          <!-- Main Banner -->
          <MainBanner/>
        </div>
        <div>
          <!-- 5boon description  -->
          <Section1 />
        </div>
        <div class="section2">
          <!-- section2  -->
          <Section2 />
        </div>
    </div>
</template>

<script>
import MainBanner from '../components/MainBanner.vue'
import Section1 from '../components/Section1.vue'
import Section2 from '../components/Section2.vue'

export default {
  name: 'Home',
  components: {
    MainBanner, Section1, Section2
  }
}
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .section2 {
      text-align: center;
      width: 100%;
  }

  body, html {
    height: 100%;
    margin: 0;
  }
</style>
