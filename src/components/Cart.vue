<template>
  <div class="fixed" @click="hiddenSide">
    <section class="box">
      <h2>My Cart</h2>
      <h1 v-if="!hasProduct()" class="empty">Add Some Product !!</h1>
      <div v-else>
        <div v-for="(product, index) in cartProducts" :key="index" class="cart-info">
          <img :src="require(`@/assets/img/${product.imageKy}.jpg`)">
          <div class="col-r">
            <h3 class="item-name">{{ product.name }}</h3>
            <span class="color" :style="`background-color:${product.color}`"></span>
            <span class="size">{{ product.size.name }}</span>
            <div class="smSize">
              <h3 class="item-name">{{ product.name }}</h3>
              <span class="color" :style="`background-color:${product.color}`"></span>
              <span class="size">{{ product.size.name }}</span>
            </div>
            <div class="num">
              <span class="numC" @click="Num(index,-1)">-</span>
              <span class="count">{{product.num}}</span>
              <span class="numC" @click="Num(index,1)">+</span>
            </div>
            <span class="price">NT$ {{product.num*product.price }}</span>
            <span @click="del(index)" class="del">X</span>
          </div>
        </div>
        <h3 class="total">Total: NT$ {{ totalPrice()}}</h3>
        <div class="btn-group">
          <router-link to="/">
            <button class="btn-reverse btn">Shopping</button>
          </router-link>
          <button class="btn">Checkout</button>
        </div>               
      </div>            
    </section>
    <Alert v-show='alertText'></Alert>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import Alert from './Alert'

export default {
  components:{
    Alert
  },
  computed: {
    ...mapState(["cartProducts",'alertText'])
  },
  methods: {
    ...mapActions(["removeProduct", "purchaseNum"]),
    ...mapMutations(["changeCartIndex", "changeShowSide",]),
    hasProduct() {
      return this.cartProducts.length > 0;
    },
    totalPrice() {
      return this.cartProducts.reduce(
        (current, next) => current + next.price * next.num,
        0
      );
    },
    Num(index, num) {
      this.changeCartIndex(index);
      this.purchaseNum(num);
    },
    del(product, index) {
      this.removeProduct(index);
    },
    hiddenSide() {
      this.changeShowSide(false);
    },
  }
};
</script>

<style scoped>
.fixed {
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1;
}
.box {
  max-width: 960px;
  margin: 0 auto;
  padding: 30px;
}
.empty {
  margin: 0 auto;
  width: 100%;
  padding: 150px 0;
  border: 1px solid #000;
  text-align: center;
}
img {
  width: 100px;
  display: block;
  margin-bottom: 10px;
}
.item-name,
.price {
  letter-spacing: 0.2px;
  line-height: 18px;
  width: 20%;
}
.price {
  width: 90px;
}
.cart-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
}
.color {
  width: 24px;
  height: 24px;
  border: 1px solid rgb(177, 176, 176);
  display: inline-block;
  vertical-align: middle;
}
.num .numC,
.num .count {
  border: 1px solid rgb(209, 209, 209);
  height: 28px;
  width: 20px;
  display: inline-block;
  text-align: center;
  line-height: 26px;
  font-size: 20px;
}
.num .numC {
  background-color: rgb(209, 209, 209);
  cursor: pointer;
}
@media screen and (min-width:991px) {
  .num .numC:hover {
    background-color: rgb(110, 109, 109);
    border: 1px solid rgb(110, 109, 109);
  }
  .btn:hover {
    background-color: rgb(69, 206, 137);
  }
  .btn-reverse:hover {
    background-color: #000;
    color: #fff;
  }
}
.num .count {
  width: 32px;
  border-top: 1px solid rgb(209, 209, 209);
  border-bottom: 1px solid rgb(209, 209, 209);
}
.del {
  cursor: pointer;
  margin-right: 20px;
}
.btn-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.btn {
  width: 100px;
  height: 36px;
  background-color: #000;
  color: #fff;
  text-align: center;
  margin-top: 10px;
}
.btn-reverse {
  border: 1px solid #000;
  background-color: #fff;
  color: #000;
}
.total {
  text-align: right;
}
.smSize {
  display: none;
}
.col-r {
  width: calc(100% - 130px);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media screen and (max-width: 768px) {
  .item-name,
  .color,
  .size {
    display: none;
  }
  .smSize,
  .smSize .item-name {
    display: block;
  }
  .smSize,
  .smSize .item-name {
    width: 150px;
  }
  .smSize .color,
  .smSize .size {
    display: inline-block;
    margin-left: 10px;
  }
  .smSize .item-name {
    margin: 10px;
  }
  .smSize .size {
    font-size: 20px;
    vertical-align: top;
  }
}
@media screen and (max-width: 576px) {
  .fixed {
    z-index: 0;
    margin-left: 80px;
    width: calc(100% - 80px);
  }
  .smSize,
  .num,
  .price,
  .del {
    display: inline-block;
    width: 100%;
    margin: 6px;
  }
  .price,
  .del {
    text-align: right;
  }
  .num {
    margin-left: 30px;
  }
  .del {
    position: absolute;
    top: 10px;
  }
  .col-r {
    flex-direction: column;
    text-align: left;
    position: relative;
  }
}
@media screen and (max-width: 475px) {
  .smSize .item-name {
    font-size: 16px;
    width: calc(100% - 30px);
  }
  .col-r {
    width: calc(100% - 110px);
  }
  .smSize .color {
    height: 16px;
    width: 16px;
  }
  .smSize .size {
    font-size: 16px;
  }
  .num .numC,
  .num .count {
    height: 24px;
    line-height: 24px;
  }
  .box {
    padding: 10px 30px 10px 10px;
  }
  .empty {
    padding: 100px 20px;
  }
}
@media screen and (max-width: 425px) {
  img {
    width: 70px;
  }
  .col-r {
    width: calc(100% - 80px);
  }
  .btn {
    width: 80px;
  }
}
</style>