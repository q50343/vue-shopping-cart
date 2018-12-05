<template>
  <div class="side" :class='{"scroll":scroll}'>
    <h3 v-if="isShowSide" @click="noShowSide">✕</h3>
    <h1 v-else @click="showSide">...</h1>
    <h4 @mouseenter="showSort" class="sort">Sort results</h4>
    <h4 @mouseenter="showCategory" class="category">Category</h4>
    <transition name="appearL">
      <div v-show="isShowSide" class="main" :class='{"scroll":scroll}'>
        <div v-show="sortMain" class="sort-main">
          <h4 @click="getPriceL">Price low to heigh</h4>
          <h4 @click="getPriceH">Price heigh to low</h4>
          <h4 @click="getPopular">Popular</h4>
        </div>
        <div v-show="categoryMain" class="category-main">
            <h4 @click="getType('coat')">Coat</h4>
            <h4 @click="getType('sweater')">Sweaters</h4>
            <h4 @click="getType('t-shirts')">T-shirts</h4>
            <h4 @click="getType('dress')">Dress</h4>
            <h4 @click="getType('pants')">Pants</h4>
            <h4 @click="getType('bag')">Bags</h4>         
            <h4 @click="getType('scarf')">Scarfs</h4>
            <h4 @click="getType('shoes')">Shoes</h4>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      isClick: false,
      sortMain: false,
      categoryMain: false,
      scroll: false
    };
  },
  computed: {
    ...mapState(["products",'isShowSide','pageType'])
  },
  methods: {
    ...mapMutations(["priceL", "priceH", "popular",'changeShowSide','changepageType']),
    getPriceL() {
      this.priceL();
      this.changeShowSide(false);

    },
    getPriceH() {
      this.priceH();
      this.changeShowSide(false);
    },
    getPopular() {
      this.popular();
      this.changeShowSide(false);
    },
    showSide() {
      this.isClick = true;
      this.changeShowSide(true);
      this.categoryMain = true;
    },
    noShowSide() {
      this.isClick = false;
      this.changeShowSide(false);
      this.sortMain = false;
      this.categoryMain = false;
    },
    showSort() {
      this.categoryMain = false;
      this.isClick = true;
      this.changeShowSide(true);
      this.sortMain = true;
    },
    showCategory() {
      this.sortMain = false;
      this.isClick = true;
      this.changeShowSide(true);
      this.categoryMain = true;
    },
    handleScroll() {
      if (document.documentElement.scrollTop > 0) {
        this.scroll = true;
      } else {
        this.scroll = false;
      }
    },
    getType(category) {
      this.noShowSide()
      this.changepageType(category)     
      this.$router.push({
        name: 'AllProducts',
        params: { type: category}
      }) 
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
* {
  cursor: pointer;
}
.side {
  position: fixed;
  top: 82px;
  left: calc((100% - 1080px) / 2 - 30px);
  text-align: left;
  background-color: #fff;
}
h1 {
  letter-spacing: 3px;
  transition: 0.3s ease;
}
@media screen and (min-width:991px) {
  h1:hover {
    letter-spacing: 0.5px;
    transform: translateX(10%);
  }
}
h3 {
  padding-top: 16px;
}
.sort,
.category {
  writing-mode: vertical-lr;
  margin: 100px 0;
  transform: rotate(180deg);
  position: relative;
}
.sort::before,
.category::before {
  content: "";
  width: 4px;
  position: absolute;
  height: 0;
  top: -10%;
  background-color: #000;
  right: -30px;
}
.sort:hover::before,
.category:hover::before {
  height: 120%;
  transition: 0.3s ease;
}
.main {
  position: absolute;
  padding-top: 70px;
  padding-left: 20px;
  left: 40px;
  width: 250px;
  background-color: #fff;
  height: 100vh;
  top: 80px;
}
.main h4,
.main h5 {
  margin: 0;
  padding: 8px;
}
.main h5 {
  margin: 0;
  padding: 6px;
}
.main h4:hover,
.main h5:hover {
  color: rgba(0, 0, 0, 0.3);
}
.scroll {
  top: 0;
  padding-top: 70px;
}
.scroll.main {
  padding-top: 220px;
}
.appearL-enter-active {
  animation: appearL-animation 0.3s;
}
.appearL-leave-active {
  animation: appearL-animation 0.3s reverse;
}
@keyframes appearL-animation {
  0% {
    transform: translateX(-300px);
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
@media screen and (max-width:1199px) {
  .side{
    left: 3.5%;
  }
  .main{
    left: 30px;
  }
  .sort::before,
  .category::before {
    content: "";
    right: -20px;
  }
}
@media screen and (max-width:991px) {
  .side{
    left: 6%;
  }
}
@media screen and (max-width:576px) {
  .side{
    left: calc(4% + 30px);
    top: 0;
  }
  .side h1{
    margin: 0
  }
}

</style>
