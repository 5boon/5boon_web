<template>
  <div>
    <div style="text-align: center; width: 100%">
      <Nav/>
    </div>
    <div>
      <MainBanner/>
    </div>
    <div>
      <Section1 />
    </div>
    <div>
      <Section2 />
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import MainBanner from './components/MainBanner.vue'
import Section1 from './components/Section1.vue'
import Section2 from './components/Section2.vue'

export default {
  name: 'App',
  components: {
    Nav, MainBanner, Section1, Section2
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
