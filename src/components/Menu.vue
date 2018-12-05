<template>
  <header class="header" @click="hiddenSide">
    <nav class="nav">
      <div>
        <ul class="nav-links">
          <li class="logo">Logo</li>
          <li class="link" @click="getType('all')">ALL</li>
          <li class="link" @click="getType('top')">TOP</li>
          <li class="link" @click="getType('bottom')">BOTTOM</li>
          <li class="link" @click="getType('accessories')">ACCESSORIES</li>
        </ul>
      </div>
      <div class="nav-right">
        <p class="cart-icon">
          <router-link to="/Cart">
            <p>
              <img class="bag_icon"
                src="https://static.zara.net/stdstatic/1.88.0-b.50/images/icon-32-shopping-bag.svg"               
              >
              <span :class="{cart_num_big:cart>9}" class="cart_num">{{cart}}</span>
              <span class="hidden-sm">My cart</span>
            </p>
          </router-link>
          <transition name="appearT">
            <CartIcon class="cart"></CartIcon>
          </transition>
        </p>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import CartIcon from "./CartIcon";

export default { 
  components: {
    CartIcon
  },
  data() {
    return {
      searching: false,
      search: "",
      getProducts:null
    };
  },
  computed: {
    ...mapState(["products",'cartProducts']),
    cart() {
      return this.cartProducts.reduce((current, next) => current + next.num,0);
    }
  },
  methods: {
    ...mapMutations(['changeShowSide','changepageType']),
    isSearching() {
      this.searching = true;
    },
    noSearching() {
      this.searching = false;
    },
    hiddenSide(){
      this.changeShowSide(false)
    },
    getType(type) {
      this.changepageType(type)  
      this.$router.push({
        name: 'AllProducts',
        params: { type: type}
      })    
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 36px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 60px;
}
.nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.nav-links {
  display: flex;
  justify-content: flex-start;
  padding: 0;
}
.nav-right {
  height: 50px;
  margin-right: 30px;
}
.nav-right p {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  margin: 6px 0;
}
.nav-right p i {
  padding: 0 10px;
}
.nav-right p span {
  font-weight: 200;
}
.logo {
  font-size: 20px;
  padding: 0px 50px;
  font-weight: 800;
  display: inline-block;
  list-style: none;
  line-height: 30px;
}
.link, .link a{
  color: #000;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  padding: 0 20px;
  line-height: 36px;
  font-size: 14px;
  transition: 0.3s;
  cursor: pointer;
}
@media screen and (min-width:991px) {
  .link:hover , .link a:hover{
    background: #000;
    color: #fff;
  }
  .cart-icon:hover .cart {
    display: block;
    animation: appear-animation 0.4s;
  }
}
.cart_num {
  display: inline-block;
  text-align: center;
  font-size: 14px;
  position: relative;
  left: -19px;
  line-height: 15px;
}
.cart_num_big {
  left: -24px;
}
.bag_icon {
  position: relative;
  top: 10px;
}
.cart {
  display: none;
}
@keyframes appear-animation {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}
@media screen and (max-width: 760px) {
  .hidden-sm {
    display: none;
  }
  .logo {
    padding: 0 30px;
  }
  .nav-right{
    margin-right:0;
  }
}
@media screen and (max-width: 576px) {
  header{
    margin-bottom: 30px;
  }
  .nav-links{
    display: none
  }
}
</style>
