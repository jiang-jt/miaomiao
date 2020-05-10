<template>
  <div class="movie_body">
    <glo-loading v-if="gloLoading"></glo-loading>
    <scroller v-else :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
      <ul>
        <li ref="loadWrapper" v-loading="loading" element-loading-text="拼命加载中"></li>
        <movieList v-for="(item,index) in dataList.subjects" :key="index">
          <template #img>
            <img @tap="handleToDetail(item.id)" :src="item.images.small" :alt="item.title" />
          </template>
          <template #info>
            <h2 @tap="handleToDetail(item.id)">{{ item.title }}</h2>
            <p>
              <span>{{ item.collect_count*35 }}</span>人想看
            </p>
            <p>
              主演：
              <span
                v-for="(actor,idx) in item.casts"
                :key="idx"
              >{{ idx==item.casts.length-1?actor.name:actor.name+',' }}</span>
            </p>
            <p>{{ item.pubdates[0] }}</p>
          </template>
          <template #user_define>
            <div class="btn_pre">预售</div>
          </template>
        </movieList>
      </ul>
    </scroller>
  </div>
</template>
<script>
import movieList from "@/components/movieList";
export default {
  name: "comingSoon",
  data() {
    return {
      dataList: "",
      loading: false,
      gloLoading: true
    };
  },
  components: {
    movieList
  },
  created() {},
  mounted() {
    this.$http.get("/movieApi/coming_soon").then(res => {
      this.dataList = res.data;
      this.gloLoading = false;
    });
  },
  methods: {
     handleToDetail(id) {
      this.$router.push("/movie/detail/2/" + id);
    },
    handleToScroll(pos) {
      if (pos.y > 30) {
        this.loading = true;
        this.$refs.loadWrapper.style.height = '71.2px';
      }
    },
    handleToTouchEnd(pos) {
      if (pos.y > 30) {
        this.$http.get("/movieApi/coming_soon").then(res => {
          this.dataList = res.data;
          this.loading = false;
          this.$refs.loadWrapper.style.height = '0px';
        });
      }
    }
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
}

.btn_pre {
  width: 47px;
  height: 27px;
  background-color: #3c9fe6;
  text-align: center;
  line-height: 28px;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
}
</style>