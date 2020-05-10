<template>
  <div>
    <Header title="我的"></Header>
    <div id="content">
      <Login></Login>
    </div>
    <navBar></navBar>
  </div>
</template>

<script>
import Header from "@/components/header";
import navBar from "@/components/footer";
import Login from "@/components/login";
export default {
  name: "mine",
  components: {
    Header,
    navBar,
    Login
  }
};
</script>

<style>
</style>