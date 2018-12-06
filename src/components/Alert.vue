<template>
  <div class="fixed-alert">
    <div class="box">
      <h3>{{alertText}}</h3>
      <button class="btn" @click="closeAlert">OK</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed:{
    ...mapState(['alertText'])
  },
  methods:{
    ...mapMutations(['closeAlert'])
  }
}
</script>

<style scoped>
.fixed-alert{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  top: 0;
  z-index: 50;
  left: 0;
}
.box{
  width: 300px;
  height: 150px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  padding: 16px;
  border-radius: 10px
}
.btn{
  background-color: #000;
  color: #fff;
  padding: 8px 16px
}
</style>
