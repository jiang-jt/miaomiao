<template>
  <footer>
      <ul>
          <router-link tag="li" to="/movie">
              <i class="iconfont icon-caidanicondianyinghui"></i>
              <p>電影</p>
          </router-link>
          <router-link tag="li" to="/cinema">
              <i class="iconfont icon-yingyuan"></i>
              <p>影院</p>
          </router-link>
          <router-link tag="li" to="/mine">
              <i class="iconfont icon-wode"></i>
              <p>我的</p>
          </router-link>
      </ul>
  </footer>
</template>

<script>
export default {
     name:'navBar'
}
</script>

<style lang="scss" scoped>
footer{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-top: 2px solid #ebe8e3;
    ul{
        display: flex;
        align-items: center;
        height: 50px;
        text-align: center;
        li{
            flex: 1;
            height: 40px;
            i{
                font-size: 20px;
            }
            p{
                font-size: 12px;
                line-height: 18px;
            }
        }
        .router-link-active{
                color: #e54847;
            }
    }
}
</style>