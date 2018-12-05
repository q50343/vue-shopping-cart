<template>
<div class="fixed">
  <div class="box">
    <h3><i class="fas fa-shopping-cart"></i> Your Cart</h3>
    <div v-for="(product, index) in getProductsInCart"  :key="index" class="box-item">
      <img :src="require(`@/assets/img/${product.imageKy}.jpg`)">
      <div class="item-info">
        <p class="item-name">{{ product.name }}</p>
        <div class="descr">
          <span class="color" :style='`background-color:${product.color}`'></span> 
          <span class="size">{{ product.size.name }}</span>
        </div>
        <span class="price" v-if='product.num'>{{product.num}} x </span>
        <span class="price">NT$ {{ product.price }}</span>
      </div>     
    </div>
    <div class="bottom">
      <h4 @click="hiddenCartSide" class="back"><i class="fas fa-angle-double-left"></i> Continue Shopping</h4>
      <router-link to="/Cart">
        <button class="btn">View cart</button>
      </router-link>
    </div>
  </div>
</div>  
</template>

<script>
import { mapState } from 'vuex';
export default {
  props:['showCartSide'],
  methods: {
    hiddenCartSide(){
      this.$emit('hiddenCartSide')
    }
  },
  computed: {
    ...mapState([
      'cartProducts',
    ]),
    getProductsInCart(){
      return this.cartProducts.filter((product,index) => {          
          return index < 3  
      })
    }
  },
};
</script>

<style scoped>
.fixed{
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 50;
}
.box {
    width: 340px;
    height: auto;
    box-sizing: border-box;
    padding: 10px 30px;
    position: absolute;
    top: 0px;
    right: 0;
    z-index: 60;
    background-color: rgb(253, 253, 253);
    height: 100%;
}
h3{
  text-align: right;
  padding-bottom: 10px;
  padding-left: 20px;
  color:rgb(54, 54, 54)
}
.box-item {
    display: table;
    margin-bottom: 40px;
}
.item-info{
    display: table-cell;
    vertical-align: middle;
    text-align: left;
    line-height: 12px;
}
img{
    width: 80px ;
    margin-right: 20px;
    display: block;
}
.item-name, .price{
    font-size: 18px;
    letter-spacing: 0.2px;
    line-height: 24px;
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
  font-size: 18px;
  vertical-align: middle;
  margin-left: 6px;
  
}
.descr{
  margin-bottom: 20px;
}
.btn{
    width: 100px;
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
.back{
  cursor: pointer;
  display: inline-block;
  padding-right: 20px;
}
.bottom{
  position: absolute;
  bottom: 20px
}
</style>