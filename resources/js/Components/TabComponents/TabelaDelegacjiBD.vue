<template>
  <div>
    <h1>Tabela Delegacji BD</h1>
    <section>
      <div class="tbl-header">
        <table cellpadding="0" cellspacing="0" border="0">
          <thead>
            <tr>
              <th>Lp.</th>
              <th>Imię i Nazwisko</th>
              <th>Data od:</th>
              <th>Data do:</th>
              <th>Miejsce wyjazdu:</th>
              <th>Miejsce przyjazdu</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="tbl-content">
        <table cellpadding="0" cellspacing="0" border="0">
          <tbody>
            <loader v-if="!travels" class="loader"/>
            <tr v-else v-for="travel in travels" :key="travel.id">
              <td>{{ travel.id }}</td>
              <td>{{ travel.name + travel.lastName }}</td>
              <td>{{ travel.dateOfDeparture }}</td>
              <td>{{ travel.arrivalDate }}</td>
              <td>{{ travel.placeOfDeparture }}</td>
              <td>{{ travel.placeOfArrival }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import Loader from './Loader.vue';

export default {
  data(){
    return{
      travels:null
    }
  },
  mounted(){
    axios.get('https://warm-ocean-82842.herokuapp.com/api/travel')
    .then(res => {
      this.travels = res.data
      console.log(res);
    })
    .catch(err => console.error(err))
  },
  components:{
    Loader
  }
}
</script>

<style scoped>
  @media screen and (max-width: 600px){
    td:nth-of-type(1):before { content: "Lp"; }
    td:nth-of-type(2):before { content: "Imię i Nazwisko"; }
    td:nth-of-type(3):before { content: "Data od"; }
    td:nth-of-type(4):before { content: "Data do"; }
    td:nth-of-type(5):before { content: "Miejsce wyjazdu"; }
    td:nth-of-type(6):before { content: "Miejsce przyjazdu"; }

  }
</style>