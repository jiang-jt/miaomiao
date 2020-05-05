<template>
  <div>
    <Header title="喵喵影院"></Header>

    <navBar></navBar>
  </div>
</template>

<script>
import Header from "@/components/header";
import navBar from "@/components/footer";
export default {
  name: "cinema",
  components: {
    Header,
    navBar
  }
};
</script>

<style>
</style>