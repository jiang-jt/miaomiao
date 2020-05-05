<template>
  <div class="movie_body">
    <div id="wrapper">
      <ul>
        <movieList v-for="(item,index) in dataList.subjects" :key="index">
          <template #img>
            <img :src="item.images.small" :alt="item.title" />
          </template>
          <template #info>
            <h2>{{ item.title }}</h2>
            <p>
              观众评
              <span class="grade">{{ item.collect_count }}</span>
            </p>
            <p>
              主演：
              <span
                v-for="(actor,idx) in item.casts"
                :key="idx"
              >{{ idx==item.casts.length-1?actor.name:actor.name+',' }}</span>
            </p>
          </template>
          <template #user_define>
            <div class="btn_pre">购票</div>
          </template>
        </movieList>
      </ul>
    </div>
  </div>
</template>

<script>
import movieList from "@/components/movieList";
export default {
  name: "nowPlaying",
  data() {
    return {
      dataList: {}
    };
  },
  created() {},
  mounted() {
    this.$http.get("/in_theaters").then(res => {
      this.dataList = res.data;
      console.log(this.dataList);
    });
  },
  methods: {},
  components: {
    movieList
  }
};
</script>

<style lang="scss" scoped>
.movie_body {
  flex: 1;
  overflow: auto;
}
#wrapper {
  height: 100%;
  ul {
    margin: 0 12px;
    overflow: hidden;
    .grade {
      font-weight: 700;
      color: #faaf00;
      font-size: 15px;
      margin-left: 3px;
    }
    .btn_pre {
      width: 47px;
      height: 27px;
      background-color: red;
      text-align: center;
      line-height: 28px;
      font-size: 13px;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
    }
  }
}
</style>