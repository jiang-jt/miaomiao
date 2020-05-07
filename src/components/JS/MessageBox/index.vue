<template>
  <div class="messageBox">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <div>
      <div @touchstart="handleCancel">{{ cancel }}</div>
      <div @touchstart="handleOk">{{ ok }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "messageBox"
};
</script>

<style lang="scss" scoped>
.messageBox {
  width: 200px;
  height: 120px;
  position: absolute;
  border: 1px solid #ccc;
  border-radius: 4px;
  left: 50%;
  top: 50%;
  background-color: white;
  margin-left: -100px;
  margin-top: -100px;
  -webkit-box-shadow: 3px 3px 3px 3px #ccc;
  box-shadow: 3px 3px 3px 3px #ccc;
  h2 {
    text-align: center;
    font-size: 18px;
    line-height: 40px;
    font-weight: 700;
  }
  p {
    text-align: center;
    line-height: 40px;
  }
  > div {
    display: flex;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    border: 1px solid #ccc;
    div {
      flex: 1;
      text-align: center;
      border-right: 1px solid #ccc;
      line-height: 30px;
    }
    div:last-child {
      border: none;
    }
  }
}
</style>