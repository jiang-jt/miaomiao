<template>
  <div class="cinema_body">
    <div class="wrapper">
      <ul>
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
            <div v-for="(item,key) in item.tag" :key="key" :class='key | formatClass'>{{ key | formatCard}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "cList",
  data() {
    return {
      cinemaList: []
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
        console.log(item);
        return item;
      });
      console.log(res);
      return res;
    }
  },
  mounted() {
    this.$http.get("/api/cinemaList?cityId=18").then(res => {
      let msg = res.data.msg;
      if (msg === "ok") {
        this.cinemaList = res.data.data.cinemas;
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
    formatClass(key){
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
  }
};
</script>

<style lang="scss" scoped>
.cinema_body {
  flex: 1;
  overflow: auto;
  -webkit-box-flex: 1;
  .wrapper {
    height: 100%;
    ul {
      padding: 20px;
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
}
</style>