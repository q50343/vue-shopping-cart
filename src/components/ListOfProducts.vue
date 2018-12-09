<template>
<div @click='hiddenSide'>
  <!-- search -->
  <div class="search-group">
    <span v-show='searching' class="search-inp">
      <input type="text" v-model='search' class="search">
      <span @click='noSearching' class="x" >✕</span>
    </span>  
    <span @click='isSearching'>
      <i class="fas fa-search"></i>
      <span>Search</span>
    </span>
  </div>  
  <h1 v-if='filteredProducts == ""' class="no-data">抱歉，暫無你查詢的內容</h1>
  <!-- product list -->
  <ul class="listOfProducts" v-else>    
    <li v-for="(product, id) in filteredProducts" :key="id" :data-id='id' class="product">
      <router-link to="/ProductInfo">
      <div class="imgbox" @click="addCurrentProduct(product)">
        <img :src="require(`@/assets/img/${product.imageKy}.jpg`)" alt="404">
      </div>   
      <div class="product-info">       
        <span class="product-name">{{ product.name }}</span>
        <span>NT$ {{ product.price }}</span>
      </div> 
      </router-link>
    </li>
  </ul>
  <a href="#" class="top"><i class="fas fa-angle-double-up"></i></a>
  <router-view></router-view>
</div>  
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  props: ['products'],
  data(){
    return{
      searching: false,
      search:''
    }
  },
  methods: {
    ...mapActions([
      'addProduct',
      'changeCurrentProduct',
    ]),
    ...mapMutations(['changeShowSide']),
    isSearching(){
      this.searching = true
    },
    noSearching(){
      this.searching = false 
      this.search = ''     
    },
    addCurrentProduct(product) {
      this.changeCurrentProduct(product);
    },
    hiddenSide(){
      this.changeShowSide(false)
    }
  },
  computed: {
    filteredProducts(){
      return this.products.filter((product) => {
        return product.name.match(this.search)
      })
    }
  },
}
</script>

<style scoped>
.listOfProducts {
  width: 90%;
  max-width: 1020px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 150px;
}
.search-group{
  width: calc(90% - 30px);
  max-width: 1010px;
  text-align: right;
  margin: 0 auto;
  cursor: pointer;
  position: relative;
}
.product {
  width: calc((100% - 80px) / 3);
  background-color: #fff;
  box-sizing: border-box;
  padding: 10px;
  margin: 1em 10px;
  border-radius: 7px;
  position: relative;
  height: 30vw;
}
.product[data-id='0'], .product[data-id='1']{
  width: calc((100% - 55px) / 2);
  height: 450px ;
}
.product-name {
  font-weight: normal;
  cursor: pointer;
}
.product-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
}
.imgbox{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 10px;
}
img{
  width: 100%;
  position: absolute;
  bottom: 50%;
  transform: translateY(50%)
}
@media screen and (min-width:991px) {
  img:hover{
    transform: scale(1.07) translateY(45%);
  }
}
.search{
  border:none;
  border-bottom: 1px solid #000;  
  font-size: 40px; 
  width: 300px;
  text-align: center;
}
.search-inp{
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%)
}
.search-group span{
  display: inline-block;
  padding: 0 10px;
}
.search:focus{
  outline: none
}
.no-data{
  width: 100%;
  text-align: center;
  padding-top: 100px;
}
.top{
  position: fixed;
  bottom: 30px;
  right: 30px;
  font-size: 30px;
}
@media screen and (max-width:991px) {
  .search-group{
    width: calc(80% - 20px)
  }
  .search{
    font-size: 30px;
    width: 200px;
  }
  .product[data-id='0'], .product[data-id='1']{
    height: 40vw;
  }
  .product{
    height: 40vw;
    width: calc((100% - 55px) / 2);
  }
  .listOfProducts{
    width: 80%
  }
}
@media screen and (max-width:760px) {
  .search-group{
    width: 80%
  }
  .search-inp{
    width: 270px;
  }
  .search{
    font-size: 20px;
    width: 140px;
  }
  .product[data-id='0'], .product[data-id='1']{
    width: 100%;
    height: 75vw;
  }
  .product{
    height: 75vw;
    width: 100%;
  }
  .listOfProducts{
    width: 80%
  }
}
@media screen and (max-width:576px) {
  .search-inp{
    bottom: 60px;
    width: 230px;
  }
  .search{
    width: 170px;   
  }
  .product[data-id='0'], .product[data-id='1']{
    margin-left: 50px;
  }
  .product{
    margin-left: 50px;
  }
  .top{
    bottom: 20px;
    right: 20px;
  }
  .no-data{
    width: calc(80% - 80px);
    font-size: 20px;
    border: 1px solid #000;
    padding: 100px 20px;
    margin: 20px 0 0 calc(10% + 60px);
  }
}
@media screen and (max-width:425px) {
  .search-group span{
    padding: 0 4px
  }
  .search{
    width: 150px;
  }
  .search-inp{
    width: 210px;
  }
  .product-info,.product-info span{
    display: block;
    text-align: center;
    padding-bottom: 4px;
  }
  .product{
    margin-bottom: 24px;
  }
  .no-data{
    width: calc(80% - 70px);
  }
}
@media screen and (max-width:360px) {
  .product{
    margin-bottom: 40px;
  }
}
</style>