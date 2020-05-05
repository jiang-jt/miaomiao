<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul>
          <li>北京</li>
          <li>上海</li>
          <li>天津</li>
          <li>杭州</li>
          <li>南京</li>
          <li>成都</li>
          <li>广州</li>
        </ul>
      </div>
      <div class="city_sort">
        <h2>A</h2>
        <ul>
          <li>鞍山</li>
          <li>鞍山</li>
          <li>鞍山</li>
          <li>鞍山</li>
          <li>鞍山</li>
          <li>鞍山</li>
          <li>鞍山</li>
        </ul>
      </div>
    </div>
    <div class="city_index">
      <ul>
        <li v-for="idx in abcArr" :key="idx">{{ String.fromCharCode((64 + idx)) }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "city",
  data() {
    return {
      abcArr: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26
      ]
    };
  },
  methods: {}
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
        li{
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
        line-height: 18px;
      }
    }
  }
}
</style>