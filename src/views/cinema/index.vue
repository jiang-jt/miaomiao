<template>
  <div id="main">
    <Header title="喵喵影院"></Header>
    <div id="content">
      <div class="cinema_menu">
        <div class="city_switch">
          全城
          <i class="iconfont icon-xiajiantou"></i>
        </div>
        <div class="brand_switch">
          品牌
          <i class="iconfont icon-xiajiantou"></i>
        </div>
        <div class="feature_switch">
          特色
          <i class="iconfont icon-xiajiantou"></i>
        </div>
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
  name: "cinema",
  components: {
    Header,
    navBar
  }
};
</script>

<style lang="scss" scoped>
.cinema_menu {
  background-color: #fff;
  width: 100%;
  height: 45px;
  display: flex;
  border-bottom: 1px solid #e6e6e6;
  justify-content: space-around;
  align-items: center;
  i {
    font-size: 14px;
  }
}
</style>