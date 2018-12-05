<template>
  <div>
    <Menu></Menu>
    <div class="container">
      <router-view></router-view>
      <!-- <AllProducts></AllProducts> -->
      <Side></Side>
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu";
import Side from "./components/Side";
// import AllProducts from "./components/AllProducts";

export default {
  components: {
    Menu,
    Side,
    // AllProducts
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");
html {
  scroll-behavior: smooth;
}
body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif, 微軟正黑體;
}
* {
  box-sizing: border-box;
  transition: 0.3s ease;
}
a {
  color: #000;
  text-decoration: none;
}
.container {
  width: 100%;
}
li {
  list-style: none;
}
ul {
  padding: 0;
}
.cart {
  position: absolute;
  top: 75px;
  right: 300px;
}
button {
  border: none;
  cursor: pointer;
  background-color: #000;
}
</style>