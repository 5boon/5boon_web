<template>
    <div style="display: inline-block;">
        <b-navbar type="white" variant="white" style="width: 1070px; height: 72px">
            <b-navbar-nav style="margin-left: 100px">
                <li class="nav-menu-first">
                    <a class="nav-link" href="#">홈</a>
                </li>
                <li class="nav-menu-others">
                    <a class="nav-link" href="#">오분 소개</a>
                </li>
                <li class="nav-menu-others">
                    <a class="nav-link" href="#">오늘의 기분</a>
                </li>
                <li class="nav-menu-others">
                    <a class="nav-link" href="#">참여한 사람</a>
                </li>
                <li class="nav-menu-last">
                    <a class="nav-link" href="#">기타</a>
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
    font-family: 'Single Day', cursive;
    font-size: x-large;
  }

  .nav-link{
      color: black;
  }

  .nav-menu-first {
    margin-right: 200px;
    }

  .nav-menu-others {
    margin-right: 50px;
    }

  .nav-menu-last {
    margin-left: 100px;
    }
</style>
