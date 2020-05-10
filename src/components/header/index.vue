<template>
  <header>
    <slot></slot>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "head-top",
  props: {
    title: {
      type: String,
      default: "喵喵電影"
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  text-align: center;
  background-color: #e54847;
  color: #fff;
  height: 50px;
  border: 1px solid #e54847;
  position: relative;
  display: flex;
  align-items: center;
  h1 {
    flex: 1;
    font-size: 18px;
    line-height: 50px;
    font-weight: 400;
  }
  i {
    font-size: 18px;
  }
}
</style>