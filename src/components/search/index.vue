<template>
  <div class="search_body">
    <div class="search_input">
      <div class="search_input_wrapper">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" @input="search_movie"/>
      </div>
    </div>
    <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
      <ul>
        <movieList>
          <template #img>
            <img
              src="https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2578705064.webp"
              alt
            />
          </template>
          <template #info>
            <h2>绝命始终</h2>
            <p>How it's made</p>
            <p>电视剧,纪录片</p>
            <p>2018-4-2</p>
          </template>
          <template #user_define>
            <div class="grade">7.8</div>
          </template>
        </movieList>
      </ul>
    </div>
  </div>
</template>

<script>
import movieList from "@/components/movieList";
export default {
  name: "search",
  components: {
    movieList
  },
  methods:{
    search_movie(){
      console.log("change触发")
    }
  }
};
</script>

<style lang="scss" scoped>
.search_body {
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  .search_input {
    padding: 8px 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
    .search_input_wrapper {
      border: 1px solid #e6e6e6;
      padding: 0 10px;
      background-color: #fff;
      display: flex;
      border-radius: 5px;
      line-height: 25px;
      input {
        font-size: 13px;
        border: none;
        padding: 4px 0;
        width: 100%;
        outline: none;
        color: #000;
        margin-left: 5px;
      }
    }
  }
  .search_result {
    flex: 1;
    h3 {
      font-size: 15px;
      font-weight: 700;
      color: #999;
      padding: 9px 15px;
      border-bottom: 1px solid #e6e6e6;
    }
    ul {
      li {
        border-bottom: 1px dashed #c9c9c9;
        padding: 0px 10px 12px;
        .grade {
          width: 47px;
          height: 100%;
          text-align: center;
          color: #fc7103;
        }
      }
    }
  }
}
</style>