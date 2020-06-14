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
        <!-- footer 고정-->
        <div>
            <MainFooter />
        </div>
  </div>
</template>

<script>

import Nav from "@/components/Nav";
import MainFooter from '@/components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    Nav, MainFooter
  }
}
</script>

<style>
  body, html {
    height: 100%;
    margin: 0;
  }
</style>
