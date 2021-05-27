<template>
  <div>
      <h1>Tabela Pracowników</h1>
      
      <section>
        <div class="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>Lp</th>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Stanowisko</th>
                <th>Data zatrudnienia</th>
                <th>Ilość dni urlopowych</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr v-for="worker in allWorkers" :key="worker.Lp" class="worker">
                <td>{{ worker.Lp}}</td>
                <td>{{ worker.Imię}}</td>
                <td>{{ worker.Nazwisko}}</td>
                <td>{{ worker.Stanowisko}}</td>
                <td>{{ worker.Data_Zatrudnienia}}</td>
                <td>{{ worker.Ilość_Dni_Urlopowych }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

       <div class="pickr">
         <Pickr @colorChange='changeColor($event,"even")' />
         <Pickr @colorChange='changeColor($event,"odd")' />
       </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Pickr from './ColorPickr.vue';

export default {
  computed: mapGetters(["allWorkers"]),
  data(){
    return{
      td:null,
    }
  },
  mounted(){
    this.td = document.querySelectorAll('.worker');
  },
  components:{
    Pickr
  },
  methods:{
      changeColor(color,oddEven){
     
        if(oddEven == 'even'){
          for(let i = 0 ; i < this.td.length ; i++){
            if(i % 2 == 0)
              this.td[i].style.backgroundColor = `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`;
          }
        }else if(oddEven == 'odd'){
          for(let i = 0 ; i < this.td.length ; i++){
            if(i % 2 != 0)
              this.td[i].style.backgroundColor = `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`;
          }
        }

      }
  }
}
</script>

<style scoped>
  .tbl-content{
    height: auto;
  }
  .pickr{
    width: 100px;
    margin: 20px auto;
    display: flex;
    justify-content:space-around;
  }
  .pickr-elemnt{
    margin-left: 20px;
  }

  @media screen and (max-width: 600px){
    td:nth-of-type(1):before { content: "Lp"; }
    td:nth-of-type(2):before { content: "Imię"; }
    td:nth-of-type(3):before { content: "Nazwisko"; }
    td:nth-of-type(4):before { content: "Stanowisko"; }
    td:nth-of-type(5):before { content: "Data zatrudnienia"; }
    td:nth-of-type(6):before { content: "Ilość dni urlopowych"; }

  }
</style>