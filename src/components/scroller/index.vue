<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroller",
  props: {
    handleToScroll: {
      type: Function,
      default: function() {}
    },
    handleToTouchEnd: {
      type: Function,
      default: function() {}
    }
  },
  mounted() {
    var scroll = new BScroll(this.$refs.wrapper, {
      tap: true,
      probeType: 1
    });
    this.scroll = scroll;
    // 通过prop传递过来两个函数 ，用以绑定BScroll的相关事件
    scroll.on("scroll", pos => {
      this.handleToScroll(pos);
    });
    scroll.on("touchEnd", pos => {
      this.handleToTouchEnd(pos);
    });
  },
  methods:{
      toScrollTop(y){
           this.scroll.scrollTo(0,y);
      }
  }
};
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>