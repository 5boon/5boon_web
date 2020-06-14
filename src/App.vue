<template>
  <div>
      <!-- 네비게이션 바 고정 -->
      <div style="text-align: center; width: 100%">
          <Nav/>
      </div>
      <div>
          <!-- 여기에 라우터가 컴포넌트를 그린다 -->
          <router-view></router-view>
      </div>
  </div>
</template>

<script>

import Nav from "@/components/Nav";

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
  body, html {
    height: 100%;
    margin: 0;
  }
</style>
