import Vue from 'vue';
import Router from 'vue-router';

import AllProducts from '../components/AllProducts';
import ProductInfo from '../components/ProductInfo';
import Cart from '../components/Cart';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/ProductInfo',
      name: 'ProductInfo',
      component: ProductInfo,
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/:type?',
      name: 'AllProducts',
      props: true,
      component: AllProducts,
    },
  ],
});