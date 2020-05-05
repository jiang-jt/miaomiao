<template>
  <div class="cinema_body">
    <div class="wrapper">
      <ul>
        <li>
          <div class="title">
            <span>UA电影城（上海梅龙镇广场店）</span>
            <span class="q">元起</span>
          </div>
          <div class="address">
            <span>静安区南京西路1038号梅龙镇广场10楼（近江宁路）</span>
            <span>863.4km</span>
          </div>
          <div class="card">
            <div class="bl">改签</div>
            <div class="bl">退</div>
            <div class="or">折扣卡</div>
            <div class="or">小吃</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
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