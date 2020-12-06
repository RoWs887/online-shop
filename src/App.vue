<template>
  <div id="app">
    <div id="box"></div>
    <com-main></com-main>
  </div>
</template>

<script>
import ComMain from "./components/com-main";

export default {
  name: "app",
  components: {
    ComMain,
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,400&display=swap);
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
