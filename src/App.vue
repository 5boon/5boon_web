<script src="main.js"></script>
<template>
  <div>
    <div style="text-align: center; width: 100%">
      <Nav/>
    </div>
    <div>
      <!-- Main Banner -->
      <MainBanner/>
    </div>
    <div>
      <!-- 5boon description  -->
      <Section1 />
    </div>
    <div style="text-align: center; width: 100%">
      <!-- section2  -->
      <Section2 />
    </div>
    <div>
      <!-- footer -->
      <MainFooter />
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import MainBanner from './components/MainBanner.vue'
import MainFooter from './components/MainFooter.vue'
import Section1 from './components/Section1.vue'
import Section2 from './components/Section2.vue'

export default {
  name: 'App',
  components: {
    Nav, MainBanner, MainFooter, Section1, Section2
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  body, html {
    height: 100%;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
