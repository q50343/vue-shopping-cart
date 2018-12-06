import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    products:[
      { 
        id: 1,
        name: '紐扣大衣',
        price: 3199,
        type: 'top',
        category: 'coat',
        imageKy: 'coat1',
        images: [
          {img:'coat1'},
          {img:'coat1-1'},
          {img:'coat1-2'},
          {img:'coat1-3'},
          {img:'coat1-4'},
          {img:'coat1-5'},
          {img:'coat1-6'},
          {img:'coat1-7'},
          {img:'coat1'},
          {img:'coat1-1'},
        ],
        sizes:[
          {id:1 ,name:'XS',stock:11, size_select: false},
          {id:2 ,name:'S',stock:1 ,size_select: false},
          {id:3 ,name:'M',stock:0 ,size_select: false},
          {id:4 ,name:'L',stock:1 ,size_select: false},
          {id:5 ,name:'XL',stock:5 ,size_select: false},
          {id:6 ,name:'XXL',stock:0 ,size_select: false},
        ],
        colors:[
          {code:'#ceb29c', name:'brown'},
          {code:'#ddeeee', name:'grey'}
        ],
        totalReviews: 16,
        all:'all'
      },        
      {
        id: 2,
        name: '人造皮草大衣',
        price: 3490,
        type: 'top',
        category: 'coat',
        imageKy: 'coat2',
        images: [
          {img:'coat2'},
          {img:'coat2-1'},
          {img:'coat2-2'},
          {img:'coat2-3'},
          {img:'coat2-4'},
          {img:'coat2-5'},
          {img:'coat2-6'},
          {img:'coat2'},
          {img:'coat2-1'},
        ],
        sizes:[
          {id:1 ,name:'XS',stock:11, size_select: false},
          {id:2 ,name:'S',stock:1, size_select: false},
          {id:3 ,name:'M',stock:0, size_select: false},
          {id:4 ,name:'L',stock:1, size_select: false},
          {id:5 ,name:'XL',stock:5, size_select: false},
          {id:6 ,name:'XXL',stock:1, size_select: false},
        ],
        colors:[
          {code:'#000', name:'black'}
        ],
        totalReviews: 36,
        all:'all'
      },
      {
        id: 3,
        name: '圍裹領羽絨外套',
        price: 3990,
        type: 'top',
        category: 'coat',
        imageKy: 'coat3',
        images: [
          {img:'coat3'},
          {img:'coat3-1'},
          {img:'coat3-2'},
          {img:'coat3-3'},
          {img:'coat3-4'},
          {img:'coat3-5'},
          {img:'coat3-6'},
          {img:'coat3-7'},
          {img:'coat3-8'},
          {img:'coat3'},
          {img:'coat3-1'},
        ],
        sizes:[
          {id:1 ,name:'XS',stock:11, size_select: false},
          {id:2 ,name:'S',stock:1, size_select: false},
          {id:3 ,name:'M',stock:0, size_select: false},
          {id:4 ,name:'L',stock:1, size_select: false},
          {id:5 ,name:'XL',stock:0, size_select: false},
          {id:6 ,name:'XXL',stock:0, size_select: false},
        ],
        colors:[
          {code:'#ceb29c', name:'brown'},
          {code:'#000', name:'black'}
        ],
        totalReviews: 11,
        all:'all'
      },
      {
        id: 4,
        name: '人字斜紋男士版大衣',
        price: 3990,
        type: 'top',
        category: 'coat',
        imageKy: 'coat4',
        images: [
          {img:'coat4'},
          {img:'coat4-1'},
          {img:'coat4-2'},
          {img:'coat4-3'},
          {img:'coat4-4'},
          {img:'coat4-5'},
          {img:'coat4-6'},
          {img:'coat4-7'},
          {img:'coat4'},
          {img:'coat4-1'},
        ],
        sizes:[
          {id:1 ,name:'XS',stock:0, size_select: false},
          {id:2 ,name:'S',stock:1, size_select: false},
          {id:3 ,name:'M',stock:0, size_select: false},
          {id:4 ,name:'L',stock:1, size_select: false},
          {id:5 ,name:'XL',stock:10, size_select: false},
          {id:6 ,name:'XXL',stock:10, size_select: false},
        ],
        colors:[
          {code:'#333', name:'grey'}
        ],
        totalReviews: 11,
        all:'all'
      },
      {
        id: 5,
        name: '雙面效果連帽斗篷',
        price: 2490,
        type: 'top',
        category: 'coat',
        imageKy: 'coat5',
        images: [
          {img:'coat5'},
          {img:'coat5-1'},
          {img:'coat5-2'},
          {img:'coat5-3'},
          {img:'coat5-4'},
          {img:'coat5-5'},
          {img:'coat5-6'},
          {img:'coat5-7'},
          {img:'coat5'},
          {img:'coat5-1'},
        ],
        sizes:[
          {id:1 ,name:'S',stock:11, size_select: false},
          {id:2 ,name:'M',stock:20, size_select: false},
        ],
        colors:[
          {code:'#ceb29c', name:'brown'},
          {code:'#ddeeee', name:'grey'}
        ],
        totalReviews: 21,
        all:'all'
      },
      {
        id: 6,
        name: '人造皮草騎士外套',
        price: 3990,
        type: 'top',
        category: 'coat',
        imageKy: 'coat6',
        images: [
          {img:'coat6'},
          {img:'coat6-1'},
          {img:'coat6-2'},
          {img:'coat6-3'},
          {img:'coat6-4'},
          {img:'coat6-5'},
          {img:'coat6-6'},
          {img:'coat6-7'},
          {img:'coat6'},
          {img:'coat6-1'},
        ],
        sizes:[
          {id:1 ,name:'XS',stock:10, size_select: false},
          {id:2 ,name:'S',stock:1, size_select: false},
          {id:3 ,name:'M',stock:10, size_select: false},
          {id:4 ,name:'L',stock:1, size_select: false},
          {id:5 ,name:'XL',stock:0, size_select: false},
        ],
        colors:[
          {code:'#ffe', name:'white'}
        ],
        totalReviews: 111,
        all:'all'
      },
      {
        id: 7,
        name: '限量版喀什米爾山羊絨 POLO 衫',
        price: 2990,
        type: 'top',
        category: 'sweater',
        imageKy: 'sweater1',
        images: [
          {img:'sweater1'},
          {img:'sweater1-1'},
          {img:'sweater1-2'},
          {img:'sweater1-3'},
          {img:'sweater1-4'},
          {img:'sweater1-5'},
          {img:'sweater1-6'},
          {img:'sweater1'},
          {img:'sweater1-1'},
        ],
        sizes:[
          {id:1 ,name:'S',stock:1, size_select: false},
          {id:1 ,name:'M',stock:10, size_select: false},
        ],
        colors:[
          {code:'#544646', name:'brown'},
          {code:'#a62f0f', name:'red'}
        ],
        totalReviews: 61,
        all:'all'
      },
      {
        id: 8,
        name: '限量版麻花針織衫',
        price: 3290,
        type: 'top',
        category: 'sweater',
        imageKy: 'sweater2',
        images: [
          {img:'sweater2'},
          {img:'sweater2-1'},
          {img:'sweater2-2'},
          {img:'sweater2-3'},
          {img:'sweater2-4'},
          {img:'sweater2-5'},
          {img:'sweater2-6'},
          {img:'sweater2'},
          {img:'sweater2-1'},
        ],
        sizes:[
          {id:1 ,name:'S',stock:1, size_select: false},
          {id:2 ,name:'M',stock:0, size_select: false},
        ],
        colors:[
          {code:'#ceb29c', name: 'brown'},
          {code:'#fff', name:'white'}
        ],
        totalReviews: 31,
        all:'all'
      },
      {
        id: 9,
        name: '寬鬆版紋理針織開襟衫',
        price: 2290,
        type: 'top',
        category: 'sweater',
        imageKy: 'sweater3',
        images: [
          {img:'sweater3'},
          {img:'sweater3-1'},
          {img:'sweater3-2'},
          {img:'sweater3-3'},
          {img:'sweater3-4'},
          {img:'sweater3-5'},
          {img:'sweater3-6'},
          {img:'sweater3'},
          {img:'sweater3-1'},
        ],
        sizes:[
          {id:1 ,name:'S',stock:1, size_select: false},
          {id:2 ,name:'M',stock:6, size_select: false},
        ],
        colors:[
          {code:'#ceb29c', name:'brown'},
          {code:'#252108', name:'black'}
        ],
        totalReviews: 1,
        all:'all'
      },
      {
        id: 10,
        name: '加大版紋理 T 恤',
        price: 890,
        type: 'top',
        category: 't-shirts',
        imageKy: 't-shirts1',
        images: [
          {img:'t-shirts1'},
          {img:'t-shirts1-1'},
          {img:'t-shirts1-2'},
          {img:'t-shirts1-3'},
          {img:'t-shirts1-4'},
          {img:'t-shirts1-5'},
          {img:'t-shirts1-6'},
          {img:'t-shirts1-7'},
          {img:'t-shirts1'},
          {img:'t-shirts1-1'},
        ],
        sizes:[
          {id:1 ,name:'S',stock:1, size_select: false},
          {id:2 ,name:'M',stock:6, size_select: false},
          {id:3 ,name:'L',stock:5, size_select: false}
        ],
        colors:[
          {code:'#ceb29c', name:'brown'},
          {code:'#fff', name:'white'}
        ],
        totalReviews: 1,
        all:'all'
      },
      {
        id: 10,
        name: '印字 T 恤',
        price: 890,
        type: 'top',
        category: 't-shirts',
        imageKy: 't-shirts2',
        images: [
          {img:'t-shirts2'},
          {img:'t-shirts2-1'},
          {img:'t-shirts2-2'},
          {img:'t-shirts2-3'},
          {img:'t-shirts2-4'},
          {img:'t-shirts2-5'},
          {img:'t-shirts2-6'},
          {img:'t-shirts2-7'},
          {img:'t-shirts2'},
          {img:'t-shirts2-1'},
        ],
        sizes:[
          {id:1 ,name:'S',stock:1, size_select: false},
          {id:2 ,name:'M',stock:6, size_select: false},
          {id:3 ,name:'L',stock:5, size_select: false}
        ],
        colors:[
          {code:'#ceb29c', name:'brown'},
          {code:'#7d8598', name:'grey'}
        ],
        totalReviews: 11,
        all:'all'
      },
      {
        id: 11,
        name: '基本款 T 恤',
        price: 490,
        type: 'top',
        category: 't-shirts',
        imageKy: 't-shirts3',
        images: [
          {img:'t-shirts3'},
          {img:'t-shirts3-1'},
          {img:'t-shirts3-2'},
          {img:'t-shirts3-3'},
          {img:'t-shirts3-4'},
          {img:'t-shirts3-5'},
          {img:'t-shirts3-6'},
          {img:'t-shirts3-7'},
          {img:'t-shirts3'},
          {img:'t-shirts3-1'},
        ],
        sizes:[
          {id:1 ,name:'S',stock:1, size_select: false},
          {id:2 ,name:'M',stock:6, size_select: false},
          {id:3 ,name:'L',stock:5, size_select: false},
          {id:4 ,name:'XL',stock:9, size_select: false}
        ],
        colors:[
          {code:'#ceb29c', name:'brown'},
          {code:'#fff', name:'white'},
          {code:'#333', name:'grey'}
        ],
        totalReviews: 11,
        all:'all'
      },
      {
        id: 12,
        name: '基本款 T 恤',
        price: 490,
        type: 'top',
        category: 't-shirts',
        imageKy: 't-shirts4',
        images: [
          {img:'t-shirts4'},
          {img:'t-shirts4-1'},
          {img:'t-shirts4-2'},
          {img:'t-shirts4-3'},
          {img:'t-shirts4-4'},
          {img:'t-shirts4-5'},
          {img:'t-shirts4-6'},
          {img:'t-shirts4'},
          {img:'t-shirts4-1'},
        ],
        sizes:[
          {id:1 ,name:'S',stock:1, size_select: false},
          {id:2 ,name:'M',stock:6, size_select: false},
          {id:3 ,name:'L',stock:5, size_select: false},
          {id:4 ,name:'XL',stock:0, size_select: false}
        ],
        colors:[
          {code:'#fff', name:'white'},
          {code:'#000', name:'black'}
        ],
        totalReviews: 11,
        all:'all'
      },
      {
        id: 13,
        name: '標語短版 T 恤',
        price: 490,
        type: 'top',
        category: 't-shirts',
        imageKy: 't-shirts5',
        images: [
          {img:'t-shirts5'},
          {img:'t-shirts5-1'},
          {img:'t-shirts5-2'},
          {img:'t-shirts5-3'},
          {img:'t-shirts5-4'},
          {img:'t-shirts5-5'},
          {img:'t-shirts5-6'},
          {img:'t-shirts5-7'},
          {img:'t-shirts5'},
          {img:'t-shirts5-1'},
        ],
        sizes:[
          {id:1 ,name:'S',stock:1, size_select: false},
          {id:2 ,name:'M',stock:6, size_select: false},
          {id:3 ,name:'L',stock:5, size_select: false},
        ],
        colors:[
          {code:'#fff', name:'white'},
          {code:'#ceb29c', name:'brown'}
        ],
        totalReviews: 11,
        all:'all'
      },
      {
        id: 14,
        name: '口袋慢跑長褲',
        price: 790,
        type: 'bottom',
        category: 'pants',
        imageKy: 'pants1',
        images: [
          {img:'pants1'},
          {img:'pants1-1'},
          {img:'pants1-2'},
          {img:'pants1-3'},
          {img:'pants1-4'},
          {img:'pants1'},
          {img:'pants1-1'},
        ],
        sizes:[
          {id:1 ,name:'S',stock:1, size_select: false},
          {id:2 ,name:'M',stock:6, size_select: false},
          {id:3 ,name:'L',stock:5, size_select: false},
        ],
        colors:[
          {code:'#fff', name:'white'},
          {code:'#000', name:'black'}
        ],
        totalReviews: 45,
        all:'all'
      },
      {
        id: 15,
        name: '格紋慢跑長褲',
        price: 1290,
        type: 'bottom',
        category: 'pants',
        imageKy: 'pants2',
        images: [
          {img:'pants2'},
          {img:'pants2-1'},
          {img:'pants2-2'},
          {img:'pants2-3'},
          {img:'pants2-4'},
          {img:'pants2-5'},
          {img:'pants2-6'},
          {img:'pants2-7'},
          {img:'pants2'},
          {img:'pants2-1'},
        ],
        sizes:[
          {id:1 ,name:'S',stock:1, size_select: false},
          {id:2 ,name:'M',stock:6, size_select: false},
          {id:3 ,name:'L',stock:5, size_select: false},
          {id:4 ,name:'XL',stock:9, size_select: false}
        ],
        colors:[
          {code:'#fff', name:'white'},
          {code:'#7d8598', name:'grey'}
        ],
        totalReviews: 45,
        all:'all'
      },
      {
        id: 16,
        name: '人字細紋休閒長褲',
        price: 1490,
        type: 'bottom',
        category: 'pants',
        imageKy: 'pants3',
        images: [
          {img:'pants3'},
          {img:'pants3-1'},
          {img:'pants3-2'},
          {img:'pants3-3'},
          {img:'pants3-4'},
          {img:'pants3-5'},
          {img:'pants3-6'},
          {img:'pants3'},
          {img:'pants3-1'},
        ],
        sizes:[
          {id:1 ,name:'S',stock:1, size_select: false},
          {id:2 ,name:'M',stock:6, size_select: false},
          {id:3 ,name:'L',stock:5, size_select: false},
          {id:4 ,name:'XL',stock:9, size_select: false}
        ],
        colors:[
          {code:'#333', name:'grey'}
        ],
        totalReviews: 45,
        all:'all'
      },
      {
        id: 17,
        name: '繫腰帶窄管長褲',
        price: 1490,
        type: 'bottom',
        category: 'pants',
        imageKy: 'pants4',
        images: [
          {img:'pants4'},
          {img:'pants4-1'},
          {img:'pants4-2'},
          {img:'pants4-3'},
          {img:'pants4-4'},
          {img:'pants4-5'},
          {img:'pants4-6'},
          {img:'pants4'},
          {img:'pants4-1'},
        ],
        sizes:[
          {id:1 ,name:'S',stock:1, size_select: false},
          {id:2 ,name:'M',stock:6, size_select: false},
          {id:3 ,name:'L',stock:5, size_select: false},
          {id:4 ,name:'XL',stock:9, size_select: false}
        ],
        colors:[
          {code:'#111', name:'grey'}
        ],
        totalReviews: 45,
        all:'all'
      },
      {
        id: 18,
        name: '動物斑紋迷你裙',
        price: 1190,
        type: 'bottom',
        category: 'dress',
        imageKy: 'dress1',
        images: [
          {img:'dress1'},
          {img:'dress1-1'},
          {img:'dress1-2'},
          {img:'dress1-3'},
          {img:'dress1-4'},
          {img:'dress1-5'},
          {img:'dress1'},
          {img:'dress1-1'},
        ],
        sizes:[
          {id:1 ,name:'XS',stock:9, size_select: false},
          {id:2 ,name:'S',stock:1, size_select: false},
          {id:3 ,name:'M',stock:6, size_select: false},
          {id:4 ,name:'L',stock:5, size_select: false},
        ],
        colors:[
          {code:'#111', name:'grey'}
        ],
        totalReviews: 45,
        all:'all'
      },
      {
        id: 19,
        name: '荷葉邊格紋中長裙',
        price: 1290,
        type: 'bottom',
        category: 'dress',
        imageKy: 'dress2',
        images: [
          {img:'dress2'},
          {img:'dress2-1'},
          {img:'dress2-2'},
          {img:'dress2-3'},
          {img:'dress2-4'},
          {img:'dress2-5'},
          {img:'dress2'},
          {img:'dress2-1'},
        ],
        sizes:[
          {id:1 ,name:'XS',stock:9, size_select: false},
          {id:2 ,name:'S',stock:1, size_select: false},
          {id:3 ,name:'M',stock:6, size_select: false},
          {id:4 ,name:'L',stock:5, size_select: false},
        ],
        colors:[
          {code:'#111', name:'grey'}
        ],
        totalReviews: 15,
        all:'all'
      },
      {
        id: 20,
        name: '前開叉明線中長裙',
        price: 1290,
        type: 'bottom',
        category: 'dress',
        imageKy: 'dress3',
        images: [
          {img:'dress3'},
          {img:'dress3-1'},
          {img:'dress3-2'},
          {img:'dress3-3'},
          {img:'dress3-4'},
          {img:'dress3'},
          {img:'dress3-1'},
        ],
        sizes:[
          {id:1 ,name:'XS',stock:9, size_select: false},
          {id:2 ,name:'S',stock:1, size_select: false},
          {id:3 ,name:'M',stock:6, size_select: false},
          {id:4 ,name:'L',stock:0, size_select: false},
        ],
        colors:[
          {code:'#111', name:'grey'}
        ],
        totalReviews: 15,
        all:'all'
      },
      {
        id: 21,
        name: '條紋圍巾',
        price: 899,
        type: 'accessories',
        category: 'scarf',
        imageKy: 'scarf1',
        images: [
          {img:'scarf1'},
          {img:'scarf1-1'},
          {img:'scarf1-2'},
          {img:'scarf1-3'},
          {img:'scarf1-4'},
          {img:'scarf1'},
          {img:'scarf1-1'},
        ],
        sizes:{id:1 ,name:'',stock:11, size_select: false},
        colors:[
          {code:'#e3dcca', name:'brown'}
        ],
        totalReviews: 0,
        all:'all'
      },
      {
        id: 22,
        name: '柔軟觸感格紋圍巾',
        price: 1199,
        type: 'accessories',
        category: 'scarf',
        imageKy: 'scarf2',
        images: [
          {img:'scarf2'},
          {img:'scarf2-1'},
          {img:'scarf2-2'},
          {img:'scarf2'},
          {img:'scarf2-1'},
        ],
        sizes:{id:1 ,name:'',stock:11, size_select: false},
        colors:[
          {code:'#b58a67', name:'brown'},
          {code:'#c1b4a3', name:'brown'}
        ],
        totalReviews: 11,
        all:'all'
      },
      {
        id: 23,
        name: '格紋圍巾',
        price: 699,
        type: 'accessories',
        category: 'scarf',
        imageKy: 'scarf3',
        images: [
          {img:'scarf3'},
          {img:'scarf3-1'},
          {img:'scarf3-2'},
          {img:'scarf3-3'},
          {img:'scarf3-4'},
          {img:'scarf3'},
          {img:'scarf3-1'},
        ],
        sizes:{id:1 ,name:'',stock:11, size_select: false},
        colors:[
          {code:'#b0b4b7', name:'grey'}
        ],
        totalReviews: 1,
        all:'all'
      },
      {
        id: 24,
        name: '蛇紋圓形單肩包',
        price: 1199,
        type: 'accessories',
        category: 'bag',
        imageKy: 'bag1',
        images: [
          {img:'bag1'},
          {img:'bag1-1'},
          {img:'bag1-2'},
          {img:'bag1-3'},
          {img:'bag1-4'},
          {img:'bag1'},
          {img:'bag1-1'},
        ],
        sizes:{id:1 ,name:'',stock:11, size_select: false},
        colors:[
          {code:'#917a5b', name:'brown'}
        ],
        totalReviews: 1,
        all:'all'
      },
      {
        id: 25,
        name: 'EVERYDAY 日常背包',
        price: 799,
        type: 'accessories',
        category: 'bag',
        imageKy: 'bag2',
        images: [
          {img:'bag2'},
          {img:'bag2-1'},
          {img:'bag2-2'},
          {img:'bag2-3'},
          {img:'bag2-4'},
          {img:'bag2-5'},
          {img:'bag2-6'},
          {img:'bag2'},
          {img:'bag2-1'},
        ],
        sizes:{id:1 ,name:'',stock:11, size_select: false},
        colors:[
          {code:'#b0b4b7', name:'grey'},
          {code:'yellow', name:'yellow'}
        ],
        totalReviews: 6,
        all:'all'
      },
      {
        id: 26,
        name: '金屬扣單肩包',
        price: 990,
        type: 'accessories',
        category: 'bag',
        imageKy: 'bag3',
        images: [
          {img:'bag3'},
          {img:'bag3-1'},
          {img:'bag3-2'},
          {img:'bag3-3'},
          {img:'bag3-4'},
          {img:'bag3'},
          {img:'bag3-1'},
        ],
        sizes:{id:1 ,name:'',stock:11, size_select: false},
        colors:[
          {code:'#b0b4b7', name:'grey'},
          {code:'#000' ,name:'black'}
        ],
        totalReviews: 1,
        all:'all'
      },
      {
        id: 27,
        name: '幾何印花晚宴包',
        price: 1390,
        type: 'accessories',
        category: 'bag',
        imageKy: 'bag4',
        images: [
          {img:'bag4'},
          {img:'bag4-1'},
          {img:'bag4-2'},
          {img:'bag4-3'},
          {img:'bag4-4'},
          {img:'bag4-5'},
          {img:'bag4-6'},
          {img:'bag4'},
          {img:'bag4-1'},
        ],
        sizes:{id:1 ,name:'',stock:11, size_select: false},
        colors:[
          {code:'#ddddda', name:'grey'}
        ],
        totalReviews: 9,
        all:'all'
      },
      {
        id: 28,
        name: '頂部提帶圓筒單肩包',
        price: 1190,
        type: 'accessories',
        category: 'bag',
        imageKy: 'bag5',
        images: [
          {img:'bag5'},
          {img:'bag5-1'},
          {img:'bag5-2'},
          {img:'bag5-3'},
          {img:'bag5-4'},
          {img:'bag5-5'},
          {img:'bag5'},
          {img:'bag5-1'},
        ],
        sizes:{id:1 ,name:'',stock:11, size_select: false},
        colors:[
          {code:'#ddddda', name:'grey'},
          {code:'#b58a67', name:'brown'}
        ],
        totalReviews: 3,
        all:'all'
      },
      {
        id: 29,
        name: '真皮斜背包',
        price: 1790,
        type: 'accessories',
        category: 'bag',
        imageKy: 'bag6',
        images: [
          {img:'bag6'},
          {img:'bag6-1'},
          {img:'bag6-2'},
          {img:'bag6-3'},
          {img:'bag6-4'},
          {img:'bag6'},
          {img:'bag6-1'},
        ],
        sizes:{id:1 ,name:'',stock:11, size_select: false},
        colors:[
          {code:'#1f4d80', name:'grey'}
        ],
        totalReviews: 1,
        all:'all'
      },
      {
        id: 30,
        name: '紋理晚宴包',
        price: 1490,
        type: 'accessories',
        category: 'bag',
        imageKy: 'bag7',
        images: [
          {img:'bag7'},
          {img:'bag7-1'},
          {img:'bag7-2'},
          {img:'bag7-3'},
          {img:'bag7-4'},
          {img:'bag7-5'},
          {img:'bag7-6'},
          {img:'bag7'},
          {img:'bag7-1'},
        ],
        sizes:{id:1 ,name:'',stock:11, size_select: false},
        colors:[
          {code:'#c7adad', name:'brown'}
        ],
        totalReviews: 20,
        all:'all'
      },
      {
        id: 31,
        name: '多色細帶涼鞋',
        price: 2199,
        type: 'accessories',
        category: 'shoes',
        imageKy: 'shoes1',
        images: [
          {img:'shoes1'},
          {img:'shoes1-1'},
          {img:'shoes1-2'},
          {img:'shoes1-3'},
          {img:'shoes1-4'},
          {img:'shoes1-5'},
          {img:'shoes1'},
          {img:'shoes1-1'},
        ],
        sizes:[
          {id:1 ,name:'35',stock:11, size_select: false},
          {id:2 ,name:'36',stock:1, size_select: false},
          {id:3 ,name:'37',stock:0, size_select: false},
          {id:4 ,name:'38',stock:1, size_select: false},
          {id:5 ,name:'39',stock:5, size_select: false},
          {id:6 ,name:'40',stock:0, size_select: false},
          {id:7 ,name:'41',stock:11, size_select: false},
          {id:8 ,name:'42',stock:0, size_select: false},
        ],
        colors:[
          {code:'#71d0ae', name:'tiffanyGreen'}
        ],
        totalReviews: 16,
        all:'all'
      },
      {
        id: 32,
        name: '透明鞋跟真皮短靴',
        price: 3199,
        type: 'accessories',
        category: 'shoes',
        imageKy: 'shoes2',
        images: [
          {img:'shoes2'},
          {img:'shoes2-1'},
          {img:'shoes2-2'},
          {img:'shoes2-3'},
          {img:'shoes2-4'},
          {img:'shoes2'},
          {img:'shoes2-1'},
        ],
        sizes:[
          {id:1 ,name:'35',stock:11, size_select: false},
          {id:2 ,name:'36',stock:1, size_select: false},
          {id:3 ,name:'37',stock:10, size_select: false},
          {id:4 ,name:'38',stock:1, size_select: false},
          {id:5 ,name:'39',stock:5, size_select: false},
          {id:6 ,name:'40',stock:10, size_select: false},
          {id:7 ,name:'41',stock:0, size_select: false},
          {id:8 ,name:'42',stock:11, size_select: false},
        ],
        colors:[
          {code:'#000', name:'black'}
        ],
        totalReviews: 16,
        all:'all'
      },
      {
        id: 33,
        name: '金屬裝飾真皮短靴',
        price: 3399,
        type: 'accessories',
        category: 'shoes',
        imageKy: 'shoes3',
        images: [
          {img:'shoes3'},
          {img:'shoes3-1'},
          {img:'shoes3-2'},
          {img:'shoes3-3'},
          {img:'shoes3-4'},
          {img:'shoes3'},
          {img:'shoes3-1'},
        ],
        sizes:[
          {id:1 ,name:'35',stock:11, size_select: false},
          {id:2 ,name:'36',stock:1, size_select: false},
          {id:3 ,name:'37',stock:10, size_select: false},
          {id:4 ,name:'38',stock:1, size_select: false},
          {id:5 ,name:'39',stock:5, size_select: false},
          {id:6 ,name:'40',stock:7, size_select: false},
          {id:7 ,name:'41',stock:11, size_select: false},
          {id:8 ,name:'42',stock:8, size_select: false},
        ],
        colors:[
          {code:'#b58a67', name:'brown'}
        ],
        totalReviews: 6,
        all:'all'
      },
      {
        id: 34,
        name: '雙色芭蕾平底鞋',
        price: 1299,
        type: 'accessories',
        category: 'shoes',
        imageKy: 'shoes4',
        images: [
          {img:'shoes4'},
          {img:'shoes4-1'},
          {img:'shoes4-2'},
          {img:'shoes4-3'},
          {img:'shoes4-4'},
          {img:'shoes4'},
          {img:'shoes4-1'},
        ],
        sizes:[
          {id:1 ,name:'35',stock:11, size_select: false},
          {id:2 ,name:'36',stock:1, size_select: false},
          {id:3 ,name:'37',stock:10, size_select: false},
          {id:4 ,name:'38',stock:1, size_select: false},
          {id:5 ,name:'39',stock:5, size_select: false},
          {id:6 ,name:'40',stock:7, size_select: false},
          {id:7 ,name:'41',stock:11, size_select: false},
          {id:8 ,name:'42',stock:8, size_select: false},
        ],
        colors:[
          {code:'#d5b498', name:'brown'}
        ],
        totalReviews: 6,
        all:'all'
      },
      {
        id: 35,
        name: '細節裝飾真皮莫卡辛鞋',
        price: 1599,
        type: 'accessories',
        category: 'shoes',
        imageKy: 'shoes5',
        images: [
          {img:'shoes5'},
          {img:'shoes5-1'},
          {img:'shoes5-2'},
          {img:'shoes5-3'},
          {img:'shoes5-4'},
          {img:'shoes5-5'},
          {img:'shoes5-5'},
          {img:'shoes5'},
          {img:'shoes5-1'},
        ],
        sizes:[
          {id:1 ,name:'35',stock:11, size_select: false},
          {id:2 ,name:'36',stock:1, size_select: false},
          {id:3 ,name:'37',stock:0, size_select: false},
          {id:4 ,name:'38',stock:1, size_select: false},
          {id:5 ,name:'39',stock:5, size_select: false},
          {id:6 ,name:'40',stock:0, size_select: false},
          {id:7 ,name:'41',stock:11, size_select: false},
          {id:8 ,name:'42',stock:0, size_select: false},
        ],
        colors:[
          {code:'#d5b498', name:'brown'}
        ],
        totalReviews: 6,
        all:'all'
      },
      {
        id: 36,
        name: '厚底襪型運動鞋',
        price: 2990,
        type: 'accessories',
        category: 'shoes',
        imageKy: 'shoes6',
        images: [
          {img:'shoes6'},
          {img:'shoes6-1'},
          {img:'shoes6-2'},
          {img:'shoes6-3'},
          {img:'shoes6-4'},
          {img:'shoes6'},
          {img:'shoes6-1'},
        ],
        sizes:[
          {id:1 ,name:'35',stock:11, size_select: false},
          {id:2 ,name:'36',stock:1, size_select: false},
          {id:3 ,name:'37',stock:10, size_select: false},
          {id:4 ,name:'38',stock:1, size_select: false},
          {id:5 ,name:'39',stock:5, size_select: false},
          {id:6 ,name:'40',stock:7, size_select: false},
          {id:7 ,name:'41',stock:11, size_select: false},
          {id:8 ,name:'42',stock:8, size_select: false},
        ],
        colors:[
          {code:'#111', name:'brown'}
        ],
        totalReviews: 6,
        all:'all'
      },
    ],
    cartProducts: [],
    currentProduct: {},
    userSelected:'',
    cartIndex:'',
    isShowSide: false,
    pageType: 'all',
    alertText:''
  },
  
  getters: {
    getProducts: state => state.products.filter(product => {
        return (product.category.match(state.pageType) || product.type.match(state.pageType) || product.all.match(state.pageType))       
      })
  },
  
  mutations: {
    ADD_PRODUCT(state, product){
      state.cartProducts.unshift(product)
    },
    REMOVE_PRODUCT(state, index){
      state.cartProducts.splice(index, 1)
    },
    CURRENT_PRODUCT(state, product){
      state.currentProduct = product
    },
    CHANGE_STOCK(state, payload){
      state.currentProduct.size.stock -= payload
    },
    CHANGE_STOCK_NO_SIZE(state, payload){
      state.currentProduct.sizes.stock -= payload
    },
    CHANGE_STOCK_IF_EXIST(state,payload){
      state.cartProducts[state.userSelected].num += payload
    },
    priceL(state){
      state.products.sort((a,b) => a.price - b.price)
    },
    priceH(state){
      state.products.sort((a,b) => b.price - a.price)
    },
    popular(state){
      state.products.sort((a,b) => b.totalReviews - a.totalReviews)
    },
    changeUserSelected(state,index){
      state.userSelected = index
    },
    changeCartIndex(state,index){
      state.cartIndex = index
    },
    changeShowSide(state,status){
      state.isShowSide = status
    },
    changepageType(state,type){
      state.pageType = type
    },
    showAlert(state,text){
      state.alertText = text
    },
    closeAlert(state){
      state.alertText = ''
    },
    PURCHASE_NUM(state, num){
      if(state.cartProducts[state.cartIndex].num + num >= 1){
        if( state.cartProducts[state.cartIndex].size.stock - num < 0){
            state.alertText= `庫存只剩${state.cartProducts[state.cartIndex].num}件!!`
        }else{
            state.cartProducts[state.cartIndex].size.stock -= num
            state.cartProducts[state.cartIndex].num += num
        }            
      } 
    },
  
  },
  
  actions: {
    addProduct({commit}, product){
      commit('ADD_PRODUCT', product)
    },
    removeProduct({commit}, index){
      commit('REMOVE_PRODUCT', index)
    },
    changeCurrentProduct({commit}, product){
      commit('CURRENT_PRODUCT', product)
    },
    changeStock({commit},payload){
      commit('CHANGE_STOCK',payload)
    },
    changeStockNoSize({commit},payload){
      commit('CHANGE_STOCK_NO_SIZE',payload)
    },
    changeStockIfExist({commit},payload){
      commit('CHANGE_STOCK_IF_EXIST',payload)
    },
    purchaseNum({commit},num){
      commit('PURCHASE_NUM', num)
    },
  },
})

