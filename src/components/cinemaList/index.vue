<template>
  <div class="cinema_body">
    <glo-loading v-if="gloLoading"></glo-loading>
    <scroller v-else :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
      <ul>
        <li
          style="margin-top:-45px;margin-bottom:45px;"
          class="loadingClass"
          ref="loadWrapper"
          v-loading="loading"
          element-loading-text="拼命加载中"
        ></li>
        <li v-for="item in cinemaListTag" :key="item.id">
          <div class="title">
            <span>{{ item.nm }}</span>
            <span class="q">{{ 23 }}元起</span>
          </div>
          <div class="address">
            <span>{{ item.addr }}</span>
            <span>{{ item.distance }}</span>
          </div>
          <div class="card">
            <div
              v-for="(item,key) in item.tag"
              :key="key"
              :class="key | formatClass"
            >{{ key | formatCard}}</div>
          </div>
        </li>
      </ul>
    </scroller>
  </div>
</template>

<script>
export default {
  name: "cList",
  data() {
    return {
      cinemaList: [],
      loading: false,
      gloLoading: true,
      prevCityId: -1
    };
  },
  computed: {
    cinemaListTag() {
      let res = this.cinemaList.filter(item => {
        for (const key in item.tag) {
          if (item.tag.hasOwnProperty(key)) {
            const val = item.tag[key];
            if (val !== 1) {
              delete item.tag[key];
            }
          }
        }
        return item;
      });
      return res;
    }
  },
  activated() {
    var cityId = this.$store.state.city.id;
    if (this.prevCityId === cityId) {
      return;
    }
    this.gloLoading = true;
    this.$http.get("/api/cinemaList?cityId=" + cityId).then(res => {
      let msg = res.data.msg;
      if (msg === "ok") {
        this.cinemaList = res.data.data.cinemas;
        this.gloLoading = false;
        this.prevCityId = cityId;
      }
    });
  },
  filters: {
    formatCard(key) {
      var card = [
        { key: "allowRefund", value: "退" },
        { key: "buyout", value: "一口价" },
        { key: "endorse", value: "改签" },
        { key: "sell", value: "折扣" },
        { key: "snack", value: "小吃" }
      ];
      for (let i = 0; i < card.length; i++) {
        if (card[i].key === key) {
          return card[i].value;
        }
      }
    },
    formatClass(key) {
      var card = [
        { key: "allowRefund", value: "bl" },
        { key: "buyout", value: "bl" },
        { key: "endorse", value: "bl" },
        { key: "sell", value: "ol" },
        { key: "snack", value: "ol" }
      ];
      for (let i = 0; i < card.length; i++) {
        if (card[i].key === key) {
          return card[i].value;
        }
      }
    }
  },
  methods: {
    handleToScroll(pos) {
      if (pos.y > 30) {
        this.loading = true;
        this.$refs.loadWrapper.style.height = "100px";
      }
    },
    handleToTouchEnd(pos) {
      if (pos.y > 30) {
        this.$http
          .get("/api/cinemaList?cityId=" + this.prevCityId)
          .then(res => {
            let msg = res.data.msg;
            if (msg === "ok") {
              this.cinemaList = res.data.data.cinemas;
              this.loading = false;
              this.$refs.loadWrapper.style.height = "0px";
            }
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cinema_body {
  flex: 1;
  overflow: auto;
  -webkit-box-flex: 1;
  ul {
    padding: 20px;
    .loadingClass {
      border: 0;
      padding: 0;
      margin: 0;
    }
    li {
      border-bottom: 1px solid #e6e6e6;
      margin-bottom: 20px;
      div {
        margin-bottom: 10px;
      }
      .title {
        span:first-child {
          font-weight: 400;
        }
        .q {
          color: #f03d37;
          font-size: 11px;
        }
      }
      .address {
        font-size: 13px;
        color: #666;
        span:last-child {
          float: right;
        }
      }
      .card {
        display: flex;
        div {
          padding: 0 3px;
          height: 15px;
          line-height: 15px;
          border-radius: 2px;
          color: #f90;
          border: 1px solid #f90;
          font-size: 13px;
          margin-right: 5px;
          color: black;
        }
        .bl {
          border: 1px solid #589daf;
          color: #589daf;
        }
        .or {
          border: 1px solid #f90;
          color: #f90;
        }
      }
    }
  }
}
</style>