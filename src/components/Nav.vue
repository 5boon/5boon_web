<script src="../routes/index.js"></script>
<template>
    <v-container fluid :grid-list-md="!$vuetify.breakpoint.xs" style="width: 900px; font-family: 'Anton', sans-serif;">
         <v-layout row wrap>
             <v-flex>
                 <div class="box" style="background: #BDBDBD; margin-top: 9px; margin-left: 20px">
                     <a class="nav-link" href="/" style="padding: 0">
                        <img class="profile"
                             alt="logo" src="../images/5boon_icon.png"
                             style="height: 27px; width: 27px; margin-left: -1px; margin-top: -1px">
                     </a>
                 </div>
             </v-flex>
             <v-flex>
                <div>
                     <a class="nav-link" href="/about">ABOUT</a>
                </div>
             </v-flex>
             <v-flex>
                 <div>
                    <a class="nav-link" href="/member">MEMBER</a>
                 </div>
             </v-flex>
             <v-flex>
                <div>
                    <a class="nav-link" href="/etc">ETC</a>
                </div>
            </v-flex>
         </v-layout>
    </v-container>
</template>

<script>
export default {
  name: "Nav",
  components: {

  },
  data: () => ({
      isMobile: false,
    }),

    beforeDestroy () {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', this.onResize, { passive: true })
      }
    },

    mounted () {
      this.onResize()
      window.addEventListener('resize', this.onResize, { passive: true })
    },

    methods: {
      onResize () {
        this.isMobile = window.innerWidth < 600
      },
    },
}
</script>

<style>
    li{
        font-family: 'Anton', sans-serif;
        font-size: x-large;
    }

    .nav-wrapper {
        display: inline-block;
    }

    .nav-link{
        color: black;
    }

    .nav-menu-first {
        margin-right: 200px;
    }

    .nav-menu-others {
        margin-right: 160px;
    }

    .nav-menu-last {
        margin-left: 90px;
    }

    .box {
        width: 23px;
        height: 23px;
        border-radius: 70%;
        overflow: hidden;
    }

    .profile {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
