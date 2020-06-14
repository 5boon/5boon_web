<script src="../routes/index.js"></script>
<template>
    <div class="nav-wrapper">
        <b-navbar type="white" variant="white" style="width: 1070px; height: 72px">
            <b-navbar-nav style="margin-left: 80px">
                <li class="nav-menu-first">
                    <a class="nav-link" href="/">
                        <img alt="logo" src="../images/5boon_icon.png" style="height: 30px; width: 30px">
                    </a>
                </li>
                <li class="nav-menu-others">
                    <a class="nav-link" href="/about">ABOUT</a>
                </li>
                <li class="nav-menu-others">
                    <a class="nav-link" href="/member">MEMBER</a>
                </li>
                <li class="nav-menu-last">
                    <a class="nav-link" href="/">ETC</a>
                </li>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: "Nav",
  components: {

  }
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
</style>
