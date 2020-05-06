<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul>
          <li v-for="item in hotList" :key="item.id">{{ item.nm }}</li>
        </ul>
      </div>
      <div class="city_sort" ref="city_sort">
        <div v-for="(item,index) in citiesList" :key="index">
          <h2>{{ item.index }}</h2>
          <ul>
            <li v-for="city in item.list" :key="city.id">{{ city.nm }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="city_index">
      <ul>
        <li
          v-for="(item,index) in citiesList"
          :key="item.index"
          @touchstart="handleToIndex(index)"
        >{{ item.index }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "city",
  data() {
    return {
      i: 26,
      citiesList: [],
      hotList: []
    };
  },
  methods: {},
  mounted() {
    this.$http.get("/api/cityList").then(res => {
      if (res.data.msg == "ok") {
        let cities = res.data.data.cities;
        // [{index:'A',list[nm:'阿狸',id:1,....]}]
        var { citiesList, hotList } = this.formatCitiesList(cities);
        this.citiesList = citiesList;
        this.hotList = hotList;
      }
    });
  },
  methods: {
    formatCitiesList(cities) {
      var citiesList = [];
      var hotList = [];

      for (let i = 0; i < cities.length; i++) {
        if (cities[i].isHot === 1) {
          hotList.push(cities[i]);
        }
      }

      for (let i = 0; i < cities.length; i++) {
        // 获取到拼音首字母
        let firstLetter = cities[i].py.substring(0, 1).toUpperCase();
        if (isExist(firstLetter)) {
          // 如果不存在就添加
          citiesList.push({
            index: firstLetter,
            list: [{ nm: cities[i].nm, id: cities[i].id }]
          });
        } else {
          for (let j = 0; j < citiesList.length; j++) {
            if (citiesList[j].index === firstLetter) {
              citiesList[j].list.push({
                nm: cities[i].nm,
                id: cities[i].id
              });
            }
          }
        }
      }
      function isExist(firstLetter) {
        for (let i = 0; i < citiesList.length; i++) {
          if (citiesList[i].index === firstLetter) {
            return false;
          }
        }
        return true;
      }
      citiesList.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1;
        } else if (n1.index < n2.index) {
          return -1;
        } else {
          return 0;
        }
      });
      return {
        citiesList,
        hotList
      };
    },
    handleToIndex(index) {
      // 获取所有h2标签
      var h2 = this.$refs.city_sort.getElementsByTagName("h2");
      // 滚动条距离 = h2.offsetTop :可以获得 HTML 元素距离上方或外层元素的位置
      this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
    }
  }
};
</script>

<style lang="scss" scoped>
.city_body {
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: 45px;
  .city_list {
    flex: 1;
    background: #fff5f0;
    overflow: auto;
    .city_hot {
      margin-top: 20px;
      h2 {
        font-size: 14px;
        line-height: 30px;
        font-weight: 400;
        padding-left: 12px;
        background-color: #f0f0f0;
      }
      ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
        li {
          width: 29%;
          height: 33px;
          line-height: 33px;
          margin-top: 15px;
          text-align: center;
          background-color: #fff;
          margin-left: 3%;
          border: 1px solid #e6e6e6;
          box-sizing: border-box;
          font-weight: 400;
        }
      }
    }
    .city_sort {
      margin-top: 20px;
      h2 {
        font-size: 14px;
        line-height: 30px;
        font-weight: 400;
        padding-left: 12px;
        background-color: #f0f0f0;
      }
      ul {
        margin-top: 10px;
        margin-left: 10px;
        li {
          line-height: 30px;
        }
      }
    }
  }
  .city_index {
    width: 20px;
    /* Firefox */
    display: -moz-box;
    -moz-box-orient: horizontal;

    /* Safari、Opera 以及 Chrome */
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    ul {
      li {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
}
</style>