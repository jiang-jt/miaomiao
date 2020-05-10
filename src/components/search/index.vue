<template>
  <div class="search_body">
    <div class="search_input">
      <div class="search_input_wrapper">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" v-model="message" />
      </div>
    </div>
    <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
      <ul>
        <movieList v-for="(item,index) in moviesList" :key="index">
          <template #img>
            <img :src="item.img | setWH('64.90')" :alt="item.nm" />
          </template>
          <template #info>
            <h2>{{ item.nm }}</h2>
            <p>{{ item.enm }}</p>
            <p>{{ item.cat }}</p>
            <p>{{ item.frt }}</p>
          </template>
          <template #user_define>
            <div class="grade">{{ item.sc }}</div>
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
  data() {
    return {
      message: "",
      moviesList: []
    };
  },
  watch: {
    message(newVal) {
      // 函数防抖
      this.cancelRequest();
      var cityId = this.$store.state.city.id;
      this.$http
        .get("/api/searchList?cityId="+cityId+"&kw=" + newVal, {
          cancelToken: new this.$http.CancelToken(c => {
            this.source = c;
          })
        })
        .then(res => {
          let msg = res.data.msg;
          let dataList = res.data.data.movies;
          if (msg && dataList) {
            this.moviesList = dataList.list;
          }
        })
        .catch(err => {
          if (this.$http.isCancel(err)) {
            //console.log("Rquest canceled", err.message); //请求如果被取消，这里是返回取消的message
          } else {
            //handle error
            console.log(err);
          }
        });
    }
  },
  components: {
    movieList
  },
  methods: {
    cancelRequest() {
      if (typeof this.source === "function") {
        this.source("终止请求");
      }
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