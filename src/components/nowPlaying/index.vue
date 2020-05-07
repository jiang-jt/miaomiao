<template>
  <div class="movie_body">
    <glo-loading v-if="gloLoading"></glo-loading>
    <scroller v-else :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
      <ul>
        <li v-loading="loading" element-loading-text="拼命加载中"></li>
        <movieList v-for="(item,index) in dataList.subjects" :key="index">
          <template #img>
            <img :src="item.images.small" :alt="item.title" />
          </template>
          <template #info>
            <h2>{{ item.title }}</h2>
            <p>
              观众评
              <span class="grade">{{ item.rating.average }}</span>
            </p>
            <p>
              类型：
              <span
                v-for="(genre,idx) in item.genres"
                :key="idx"
              >{{ idx==item.genres.length-1?genre:genre+',' }}</span>
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
    </scroller>
  </div>
</template>

<script>
import movieList from "@/components/movieList";
import BScroll from "better-scroll";
export default {
  name: "nowPlaying",
  data() {
    return {
      dataList: {},
      loading: false,
      gloLoading: true,
      prevCityId: -1,
      prevCityNm: ""
    };
  },
  created() {},
  activated() {
    var cityId = this.$store.state.city.id;
    var cityNm = this.$store.state.city.nm;
    if (this.prevCityId === cityId) {
      return;
    }
    this.gloLoading = true;
    this.$http.get("/movieApi/in_theaters?city=" + cityNm).then(res => {
      this.dataList = res.data;
      this.gloLoading = false;
      this.prevCityId = cityId; // 记录上一个cityId
      this.prevCityNm = cityNm;  
    });
  },
  methods: {
    handleToDetail() {},
    handleToScroll(pos) {
      if (pos.y > 30) {
        this.loading = true;
      }
    },
    handleToTouchEnd(pos) {
      if (pos.y > 30) {
        this.$http.get("/movieApi/in_theaters?city=" + this.prevCityNm).then(res => {
          this.dataList = res.data;
          this.loading = false;
        });
      }
    }
  },
  components: {
    movieList,
   
  }
};
</script>

<style lang="scss" scoped>
.movie_body {
  flex: 1;
  overflow: auto;
}

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
</style>