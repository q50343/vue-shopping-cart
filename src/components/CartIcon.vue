<template>
  <div class="box">
    <span v-if="!hasProduct()">Your Cart is Empty</span>
    <div v-else v-for="(product, index) in newGetProductsInCart"  :key="index" class="box-item">
      <img :src="require(`@/assets/img/${product.imageKy}.jpg`)">
      <div class="item-info">
        <p class="item-name">{{ product.name }}</p>
        <div>
          <span class="color" :style='`background-color:${product.color}`'></span> 
          <span class="size">{{ product.size.name }}</span>
        </div>
        <span class="price" v-if='product.num'>{{product.num}} x </span>
        <span class="price">NT$ {{ product.price }}</span>
      </div>     
    </div>
    <div class="cart-info" v-if="hasProduct()">
      <router-link to="/Cart">
        <button class="btn">View cart</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex';
export default {
  computed: {
    ...mapState([
      'cartProducts',
    ]),
    newGetProductsInCart(){
      return this.cartProducts.filter((product,index) => {          
          return index < 3  
      })
    }
  },
  methods: {
    ...mapActions([
      'showOrHiddenPopupCart',
    ]),
    hasProduct() {
      return this.cartProducts.length > 0;
    },
    hiddenSide(){
      this.isShowSide = false
    }
  },
  
};
</script>

<style scoped>
.box {
    width: 240px;
    height: auto;
    box-sizing: border-box;
    padding: 16px;
    position: absolute;
    right: 50px;
    top: 40px;
    z-index: 2;
    border: 1px solid rgb(131, 131, 131);
    background-color: rgb(253, 253, 253);
}
.box-item {
    display: table;
    margin-bottom: 10px;
}
.item-info{
    display: table-cell;
    vertical-align: middle;
    text-align: left;
    line-height: 12px;
}
img{
    width: 50px ;
    margin-right: 20px;
    display: block;
}
.item-name, .price{
    font-size: 12px;
    letter-spacing: 0.2px;
    line-height: 18px;
    margin: 4px 0
}
.color{
    width: 12px;
    height: 12px;
    margin:  0;
    border: 1px solid rgb(177, 176, 176);
    display: inline-block;
    vertical-align: middle
}
.size{
  font-size: 12px;
  vertical-align: middle;
  margin-left: 6px;
}
.btn{
    width: 206px;
    height: 30px;
    background-color: #000;
    color: #fff;
    text-align: center;
    margin-top: 10px;
}
@media screen and (min-width:991px) {
  .btn:hover{
    background-color: rgb(69, 206, 137);
  }
}
</style>