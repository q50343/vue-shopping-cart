<template>
<div>
<h2>{{pageType.toUpperCase()}}</h2>
<listOfProducts :products="getProducts" />
  
</div>   
</template>

<script>
import { mapState, mapGetters} from 'vuex';
import listOfProducts from './ListOfProducts';

export default {
  components: {
    listOfProducts,
  },
  computed: {
    ...mapState(['pageType']),
    ...mapGetters([
      'getProducts',
    ]),
  },
};
</script>

<style scoped>
 h2{
    width: 90%;
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 1em;
    position: relative;
    bottom: -20px
}
@media screen and (max-width:991px) {
  h2{
    width: 80%;
  }
}
@media screen and (max-width:576px) {
  h2{
    width: calc(80% - 80px)
  }
}
@media screen and (max-width:425px) {
  h2{
    font-size: 20px;
  }
}
@media screen and (max-width:360px) {
  h2{
    font-size: 16px;
  }
}
</style>