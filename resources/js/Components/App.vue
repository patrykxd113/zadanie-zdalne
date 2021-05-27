<template>
  <div class="container">
    <div id="Lewy">
      
      <div class="close small-x" @click="displayNav('none')"></div>

      <router-link @click.native="displayNav('none')" class="btn" :to="{name:'RozneKontrolkiHTML'}">RóżneKontrolkiHTML</router-link>
      <router-link @click.native="displayNav('none')" class="btn" :to="{name:'TabelaPracownikow'}">TabelaPracowników</router-link>
      <router-link @click.native="displayNav('none')" class="btn" :to="{name:'TabelaFakturVAT'}">TabelaFakturVAT</router-link>
      <router-link @click.native="displayNav('none')" class="btn" :to="{name:'TabelaDelegacjiBD'}">TabelaDelegacjiBD</router-link>
      <router-link @click.native="asyncchangeShow(true) , displayNav('none')"  class="btn" :to="{name:'DaneKontrahentow'}">DaneKontrahentów</router-link>
      
    </div>  
    <div id="Prawy">

        <div @click="displayNav('flex')" class="hamburger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>

        <transition name='slide' mode="out-in">
          <keep-alive>
           <router-view :key='$route.fullPath'></router-view>
          </keep-alive>
        </transition>
      
    </div>
  </div>
</template>

<script>
import { mapMutations , mapActions , mapGetters} from 'vuex';

export default {
  data(){
    return{
      currentTabComponent:RóżneKontrolkiHTML,
    }
  },
  methods:{
    changeTab(tabName){
      this.currentTabComponent = tabName ;
    },
    displayNav(display){
      if(document.documentElement.clientWidth <=600){
        let lewy = document.querySelector('#Lewy');
       lewy.style.display = display;
      }
    },
    ...mapActions(['asyncchangeShow']),
    ...mapMutations(["changeShow"])
  },
  computed:mapGetters(['allShow'])
  
};
</script>

<style >
 
  body{
    margin: 0;
    box-sizing: border-box;
  }

  .slide-enter-active,
  .slide-leave-active{
    transition: opacity .3s , transform .3s;
  }

  .slide-enter,
  .slide-leave-to{
    opacity: 0;
    transform: translateY(-30%);
  }
  .container{
    display: grid;
    grid-template-columns: 25% 75%;
  }
  section{
    position: relative;
  }
  #Lewy{
    background-color: transparent;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content:  center;
    align-items: center;
  }
  #Prawy{
    padding: 20px;
  }
  .btn{
    background: none;
    color: inherit;
    border: none;
    padding: 20px;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    color: white;
    margin-top: 40px;
    border: 2px solid white;
    border-radius: 32px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content:  center;
    text-decoration: none;

  }
  .btn:hover{
    color:#1DE9B6;
    background-color: white;
  }

  @import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);
body{
  background: -webkit-linear-gradient(left, #25c481, #25b7c4);
  background: linear-gradient(to right, #25c481, #25b7c4);
  font-family: 'Roboto', sans-serif;
}
input , select , .over-1000-btn{
  border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    width: 60px;
    color: white;
    border-bottom: 1px solid white;
    outline: none;
}
option{
  color: black;
}
h1{
  font-size: 30px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
}
table{
  width:100%;
  table-layout: fixed;
}
.tbl-header{
  background-color: rgba(255,255,255,0.3);
 }
.tbl-content{
  height:450px;
  overflow-x:auto;
  margin-top: 0px;
  border: 1px solid rgba(255,255,255,0.3);
}
th{
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
}
td{
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  border-bottom: solid 1px rgba(255,255,255,0.1);
}

  .loader{
     position: absolute;
     top: 50%;  
     left: 50%; 

     transform: translate(-50%, -50%);
  }

::-webkit-scrollbar {
    width: 6px;
} 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
} 
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
}
.hamburger{
  display: none;
}
@media screen and (max-width: 600px) {
  *{
   overflow-x: hidden
 }
  .hamburger{
    display:block;
  }
  .line{
    width: 30px;
    height: 4px;
    background-color: white;
    margin-top: 4px;
  }
  .line{
    width: 30px;
    height: 4px;
    background-color: white;
  }
   #Lewy{
     display: none;
     /* display: flex; */
     justify-content: flex-start;
     align-items: center;
     width: 100%;
     height: 100vh;
     position: absolute;
     background-color: rgba(0,0,0,.8);
     z-index: 10;
   }
   .container{
     display: block;
     position: relative;
   }
   #Prawy{
     width: 90%;
   }
  table,  thead, tbody, th, td, tr{
    display: block;
  }
  thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}

  tr { border-bottom: 4px solid #ccc; }
  
  td { 
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%; 
	}
	
	td:before { 
		position: absolute;
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}
	
  .close {
  height: 100px;
  width: 100px;
  background: transparent;
  border-radius: 5px;
  position: absolute;
  top: 0;
  right: 0;
}
.close:after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "\274c";
    font-size: 50px;
    color: #fff;
    line-height: 100px;
    text-align: center;
  }
.small-x:after {
  content: "\d7";
}



}

</style>

