<template>
  <div class="fixed">
    <span v-show="!showCartSide" class="x" @click="goBack">✕</span>
    <ul class="img-box">
      <li
        class="img-g"
        v-for="(image,id) in currentProduct.images"
        :key="id"
        :class="{active2:`${id}` == active,active1:`${id+1}` == active,active0:`${id+2}` == active}"
      >
        <img :src="require(`@/assets/img/${image.img}.jpg`)" alt="404">
      </li>
    </ul>
    <span class="add" @click="ToggleAdd" :class="{rotate:this.toggleAdd}">+</span>
    <div class="info" :class="{move:showCartSide,smSize:this.toggleAdd}">
      <h2 class="product-title">{{ currentProduct.name }}</h2>
      <h3>Color</h3>
      <div>
        <div v-for="color in currentProduct.colors" :key="color.code" class="group">
          <input
            type="radio"
            :id="color.code"
            :value="color.code"
            v-model="colorSelect"
            class="inp-c"
          >
          <label :for="color.code" class="color" :style="`background-color:${color.code}`"></label>
        </div>
      </div>
      <div>
        <div v-for="(size,id) in currentProduct.sizes" :key="id" class="group">
          <input
            type="radio"
            :id="size.name"
            :disabled="size.stock == 0"
            :value="size"
            v-model="sizeSelect"
            class="inp-s"
          >
          <label
            v-if="size.name"
            :for="size.name"
            class="not"
            :class="{size:size.stock !== 0}"
          >{{size.name}}</label>
        </div>
      </div>

      <div class="num">
        <span class="numC" @click="addNum(-1)">-</span>
        <span class="count">{{count}}</span>
        <span class="numC" @click="addNum(1)">+</span>
      </div>
      <span class="product-price">NT$ {{ currentProduct.price }}</span>
      <button type="button" class="btn" @click="addProductToCart(currentProduct)">Add To Cart</button>
    </div>
    <ul>
      <li
        v-for="(image,id) in currentProduct.images"
        :key="id"
        class="dot"
        @click="getChangeImg(id)"
        :style="`left:calc(40% + (${id} + 1) * 20px)`"
        :class="{active:id == active}"
        :data-id="id"
      >
        <button>{{ id }}</button>
      </li>
    </ul>
    <transition name="appearR">
      <cartSide v-show="showCartSide" @hiddenCartSide="hiddenCartSide"></cartSide>
    </transition>
    <Alert v-show='alertText'></Alert>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import cartSide from "./cartSide";
import Alert from './Alert'
export default {
  components: {
    cartSide,
    Alert
  },
  data() {
    return {
      active: 2,
      count: 1,
      colorSelect: "",
      sizeSelect: "",
      currentColorSelect: "",
      currentSizeSelect: "",
      showCartSide: false,
      toggleAdd: false,
    };
  },
  computed: {
    ...mapState([
      "cartProducts", 
      "userSelected",
      'pageType',
      'products',
      'currentProduct',
      'alertText']),
    total() {
      return this.currentProduct.images.length;
    }
  },
  methods: {
    ...mapMutations(["changeUserSelected",'showAlert']),
    ...mapActions([
      "addProduct",
      "changeStockNoSize",
      "changeStock",
      "changeStockIfExist",
    ]),
    ToggleAdd(){
      this.toggleAdd = !this.toggleAdd
    },
    addProductToCart(product) {
      if (this.colorSelect == "") {
        this.showAlert("請選擇顏色")
        return;
      }
      //   有分有size和無size
      if (this.currentProduct.sizes.length) {
        if (this.sizeSelect == "") {
          this.showAlert("請選擇尺寸")
        } else {
          this.currentProduct.size = this.sizeSelect;
          if (this.currentProduct.size.stock - this.count < 0) {
            this.showAlert("庫存不足，請重新選取數量")
          } else {
            //判断是否购物车中已经有商品，如果有就增加数量，反之加入这个商品
            let cartIndex = this.cartProducts.findIndex(
              item => item.id === product.id
            );
            //表示不存在 ,要加入商品
            if (cartIndex === -1) {
              this.addProduct({
                id: product.id,
                name: product.name,
                price: product.price,
                imageKy: product.imageKy,
                num: this.count,
                color: this.colorSelect,
                size: this.sizeSelect
              });
              this.changeStock(this.count);
            } else {
              // 變更cartIndex 加入size,color 的判斷
              cartIndex = this.cartProducts.findIndex(
                item =>
                  item.id === product.id &&
                  this.colorSelect === item.color &&
                  product.size.name === item.size.name
              );
              this.changeUserSelected(cartIndex);
              if (cartIndex !== -1) {
                this.changeStockIfExist(this.count);
                this.changeStock(this.count);
              } else {
                this.addProduct({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  imageKy: product.imageKy,
                  num: this.count,
                  color: this.colorSelect,
                  size: this.sizeSelect
                });
              }
            }
            this.showCartSide = true;
          }
        }
      }
      if (this.colorSelect && !this.currentProduct.sizes.length) {
        (this.currentProduct.color = this.colorSelect),
          (this.currentProduct.num = this.count);
        if (this.currentProduct.sizes.stock - this.count < 0) {
          this.showAlert("庫存不足，請重新選取數量")
        } else {
          //判断是否购物车中已经有商品，如果有就增加数量，反之加入这个商品
          let cartIndex = this.cartProducts.findIndex(
            item => item.id == product.id
          );
          //表示不存在 ,要加入商品
          if (cartIndex === -1) {
            this.addProduct({
              id: product.id,
              name: product.name,
              price: product.price,
              imageKy: product.imageKy,
              num: this.count,
              color: this.colorSelect,
              size: product.sizes
            });
            this.changeStockNoSize(this.count);
          } else {
            cartIndex = this.cartProducts.findIndex(
              item => item.id === product.id && this.colorSelect === item.color
            );
            this.changeUserSelected(cartIndex);
            if (cartIndex !== -1) {
              this.changeStockIfExist(this.count);
              this.changeStockNoSize(this.count);
            } else {
              this.addProduct({
                id: product.id,
                name: product.name,
                price: product.price,
                imageKy: product.imageKy,
                num: this.count,
                color: this.colorSelect,
                size: product.sizes
              });
            }
          }
          this.showCartSide = true;
        }
      }
    },
    addNum(num) {
      if (this.count + num >= 1) {
        this.count = this.count + num;
      }
    },
    getChangeImg(id) {
      this.active = (id + this.total) % this.total;
    },
    hiddenCartSide() {
      this.showCartSide = false;
    },
    goBack() {
      this.getProducts = this.products.filter((product) => {
        if(this.pageType == 'all'){
          return product
        }else{
          return ( product.type.match(this.pageType) || product.category.match(this.pageType))
        }        
      }) 
      this.$router.push({
        name: 'AllProducts',
        params: { type:this.pageType, getProducts: this.getProducts }
      })
    },
  }
};
</script>

<style scoped>
body {
  overflow: hidden;
}
.fixed {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.x {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 30px;
  z-index: 20;
  cursor: pointer;
}
.img-box {
  height: 100vh;
  display: flex;
  position: absolute;
  top: 0;
}
.dot button {
  font-size: 0;
  line-height: 0;
  display: block;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  z-index: 10;
}
.dot {
  position: fixed;
  bottom: 40px;
}
.dot[data-id="0"], .dot[data-id="1"], .add {
  display: none;
}
.dot button:before {
  font-size: 30px;
  line-height: 30px;
  position: absolute;
  content: "•";
  text-align: center;
  opacity: 0.25;
  color: black;
}
.dot button:hover:before,
.dot.active button:before {
  opacity: 1;
}
ul {
  margin: 0;
}
.img-g {
  width: 0px;
  position: relative;
  overflow: hidden;
  height: 100vh;
}
.active0 {
  width: 45vw;
  transform: scale(1.5);
}
.active1 {
  width: 35vw;
  transform: scale(1.15);
}
.active2 {
  width: 20vw;
  transform: scale(1);
}
img {
  height: 100vh;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.info {
  padding: 10px 28px 28px 28px;
  background-color: rgb(255, 255, 255);
  width: 300px;
  height: 380px;
  position: absolute;
  top: 60%;
  left: 75%;
  transform: translate(-50%, -50%);
}
.info.move {
  left: 45%;
}
.group {
  display: inline-block;
}
input[type="radio"] {
  display: none;
}
.color {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;
  border: 1px solid rgb(177, 176, 176);
}
.color:after {
  content: "";
  width: 22.5px;
  height: 22.5px;
  border: 1px solid rgb(155, 155, 155);
  left: -3.5px;
  top: -3px;
  position: absolute;
  display: none;
}
.color:hover:after,
.inp-c:checked ~ .color:after {
  display: inline-block;
}
.not {
  width: 28px;
  height: 28px;
  display: inline-block;
  line-height: 28px;
  text-align: center;
  margin-right: 8px;
  margin-bottom: 8px;
  font-size: 12px;
  cursor: pointer;
  border: 0.5px solid rgb(189, 189, 189);
  color: rgb(189, 189, 189);
}
.size {
  border: 0.5px solid #000;
  color: #000;
}
.size:hover,
.inp-s:checked ~ label {
  background: rgb(0, 0, 0);
  color: #fff;
}
.product-price {
  position: absolute;
  bottom: 38px;
  left: 28px;
  font-size: 20px;
}
.btn {
  position: absolute;
  bottom: 30px;
  right: 28px;
  font-size: 18px;
  background: rgb(0, 0, 0);
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  transition: 0.3s;
}
.btn:hover {
  background: rgb(69, 206, 137);
}
.num .numC,
.num .count {
  border: 1px solid rgb(209, 209, 209);
  height: 28px;
  width: 20px;
  display: inline-block;
  margin-top: 10px;
  text-align: center;
  line-height: 26px;
  font-size: 20px;
}
.num .numC {
  background-color: rgb(209, 209, 209);
  cursor: pointer;
}
/* hover */
@media screen and (min-width:991px) {
  .num .numC:hover {
    background-color: rgb(110, 109, 109);
    border: 1px solid rgb(110, 109, 109);
  }
}
.num .count {
  width: 32px;
  border-top: 1px solid rgb(209, 209, 209);
  border-bottom: 1px solid rgb(209, 209, 209);
}
.appearR-enter-active {
  animation: appear-animation 0.3s;
}
.appearR-leave-active {
  animation: appear-animation 0.3s reverse;
}
@keyframes appear-animation {
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
@media screen and (max-width: 991px) and (min-height: 991px) {
  .active0 {
    width: 100vw;
    transform: scale(1.5);
  }
  .active1 {
    width: 0vw;
    transform: scale(1.15);
  }
  .active2 {
    width: 0vw;
    transform: scale(1);
  }
}
@media screen and (max-width: 991px){
  .active0 {
    width: 65vw;
    transform: scale(1.5);
    min-width: 460px;
  }
  .active1 {
    width: 35vw;
    min-width: 360px;
    transform: scale(1.15);
  }
  .active2 {
    width: 0vw;
    transform: scale(1);
  }
  .info {
    top: calc(80% - 190px);
    left: 60%;
  }
}

@media screen and (max-width: 425px){
  .img-box{
    background-color: #fff;
  }
  .active0 {
    width: 100vw;
    transform: scale(1);
    height: calc(100vh - 50px);
  }
  .active1 {
    width: 0vw;
    min-width: 0;
  }
  .active2 {
    width: 0vw;  
    min-width: 0;
  }
  .add{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    display: block;
    position: fixed;
    z-index: 10 ;
    text-align: center;
    font-size: 40px;
    line-height: 50px;
    bottom: 70px;
    right: 20px;
  }
  .info{
    display: none
  }
  .smSize{
    display: block
  }
  .rotate {
    transform: rotate(45deg)
  }
  .dot{
    transform: translateX(-25vw)
  }
}
@media screen and (max-width: 375px){
  .info{
    width: 260px;
    height: 300px;
    left: 50%;
  }
  .info h3,.info h2{
    font-size: 20px;
    margin: 10px 0
  }
  .btn{
    font-size: 14px;
    padding: 4px 8px
  }
  .product-price{
    font-size:16px ;
    bottom: 30px
  }
  .active0 img{
    transform: translateX(-65%)
  } 
}
</style>