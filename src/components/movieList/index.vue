<template>
  <li>
    <div class="pic_show">
      <slot name="img"></slot>
    </div>
    <div class="info_list">
      <slot name="info"></slot>
    </div>
    <slot name="user_define"></slot>
  </li>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
li {
  margin-top: 12px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  padding-bottom: 10px;
  align-items: center;
  height: 90px;
  .pic_show {
    width: 64px;
    height: 90px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .info_list {
    margin-left: 10px;
    flex: 1;
    h2 {
      font-weight: 700;
      font-size: 17px;
      line-height: 24px;
    }
    p {
      width: 200px;
      line-height: 22px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #666;
      font-size: 13px;
    }
  }
}
</style>