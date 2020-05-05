<template>
  <div id="main">
    <Header></Header>
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>赣州</span>
          <i class="iconfont icon-xiajiantou"></i>
        </router-link>
        <div class="hot_swtich">
          <router-link tag="div" to="/movie/nowPlaying" class="hot_item">正在热映</router-link>
          <router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/search" class="search_entry">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <navBar></navBar>
  </div>
</template>

<script>
import Header from "@/components/header";
import navBar from "@/components/footer";
export default {
  name: "movie",
  components: {
    Header,
    navBar
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/mixin.scss";
.movie_menu {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
  align-items: center;
  z-index: 10;
  .city_name {
    margin-left: 20px;
    height: 100%;
    line-height: 45px;
    color: #000;
  }
  @include router-link-active;
  .hot_swtich {
    display: flex;
    height: 100%;
    line-height: 45px;
    .hot_item {
      flex: 1;
      text-align: center;
      margin: 0 12px;
      font-size: 15px;
      font-weight: 700;
      color: #666;
    }
    @include router-link-active;
  }
  .search_entry {
    margin-right: 20px;
    height: 100%;
    line-height: 45px;
    i {
      font-size: 22px;
      color: red;
      font-weight: 700;
    }
  }
}
</style>