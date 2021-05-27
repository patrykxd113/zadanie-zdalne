<template>
  <div>
    <transition name='slide-fade-table' mode="out-in">
      <TabelaKontrahentow  v-if="allShow  || $route.fullPath === '/DaneKontrahentow' "/>
    </transition>
    

      <router-view :key='$route.fullPath'></router-view>
    
    <transition name='slide-fade' mode="out-in">
      <router-link @click.native="changeShow(false)" v-if="allShow  || $route.fullPath === '/DaneKontrahentow' " class="add-user-btn" :to="{name:'add'}">add</router-link>
    </transition>
    
  </div>
</template>

<script>
import TabelaKontrahentow from './TabelaKontrahentow';
import { mapGetters , mapMutations } from 'vuex';

export default {
  data(){
    return{
    }
  },
  methods:{
    ...mapMutations(["changeShow"]),
  },
   components:{
     TabelaKontrahentow
   },
   computed: mapGetters(["allShow"]),
};
</script>

<style scoped>
  .add-user-btn:hover{
    border: 2px solid white;
    cursor: pointer;
  }

  .add-user-btn{
     border: 1px solid rgba(255,255,255,0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      padding: 20px 60px;
      color: white;
      margin: 40px auto;
      text-decoration: none;
  }

  .slide-fade-enter-active,
  .slide-fade-leave-active{
    transition: opacity .3s , transform .3s;
  }

  .slide-fade-enter,
  .slide-fade-leave-to{
    opacity: 0;
    transform: translateY(-30%);
  }
  


  .slide-fade-table-enter-active,
  .slide-fade-table-leave-active{
    transition: opacity .2s , transform .2s;
  }

  .slide-fade-table-enter,
  .slide-fade-table-leave-to{
    opacity: 0;
    transform: translateY(-30%);
  }

</style>