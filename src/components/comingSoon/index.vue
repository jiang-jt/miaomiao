<template>
    <div class="movie_body">
      <div id="wrapper">
        <ul>
          <movieList v-for="(item,index) in dataList.subjects" :key="index">
            <template #img>
              <img
                :src="item.images.small"
                :alt="item.title"
              />
            </template>
            <template #info>
              <h2>{{ item.title }}</h2>
              <p>
                <span>{{ item.collect_count*35 }}</span>人想看
              </p>
              <p>
                主演：
                <span v-for="(actor,idx) in item.casts" :key="idx">{{ idx==item.casts.length-1?actor.name:actor.name+',' }}</span>
              </p>
              <p>{{ item.pubdates[0] }}</p>
            </template>
            <template #user_define>
              <div class="btn_pre">预售</div>
            </template>
          </movieList>
        </ul>
      </div>
    </div>
</template>
<script>
import movieList from "@/components/movieList";
export default {
  name: "comingSoon",
  data() {
    return {
      dataList:''
    };
  },
  components: {
    movieList
  },
  created(){

  },
  mounted(){
    this.$http.get('/coming_soon')
    .then(res=>{
      this.dataList =res.data
      console.log(res.data)
    })
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
  }
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