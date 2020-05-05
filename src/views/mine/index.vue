<template>
  <div>
    <Header title="我的"></Header>

    <navBar></navBar>
  </div>
</template>

<script>
import Header from "@/components/header";
import navBar from "@/components/footer";
export default {
  name: "mine",
  components: {
    Header,
    navBar
  }
};
</script>

<style>
</style>