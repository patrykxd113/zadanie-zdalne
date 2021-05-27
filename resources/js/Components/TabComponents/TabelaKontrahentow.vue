<template>
  <div>
      <h1>Dane Kontrahentów</h1>
        <section>
          <div class="tbl-header">
            <table cellpadding="0" cellspacing="0" border="0">
              <thead>
                <tr>
                  <th>NIP</th>
                  <th>REGON</th>
                  <th>NAZWA</th>
                  <th>CZY PŁATNIK VAT?</th>
                  <th>ULICA</th>
                  <th>NUMER DOMU</th>
                  <th>NUMER MIESZKANIA</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="tbl-content">
            <table cellpadding="0" cellspacing="0" border="0">
              <tbody>
                <loader v-if="!companies" class="loader"/>
                <tr v-else v-for="companie in companies" :key="companie.id">
                  <td>{{ companie.NIP }}</td>
                  <td>{{ companie.REGON }}</td>
                  <td>{{ companie.NAZWA }}</td>
                  <td>{{ companie.VAT ? 'tak' : 'nie' }}</td>
                  <td>{{ companie.ULICA }}</td>
                  <td>{{ companie.NUMER_DOMU }}</td>
                  <td>{{ companie.NUMER_MIESZKANIA }}</td>
                  <td><router-link @click.native="changeShow(false)" :to="{name:'edit',params:{id:companie.id}}"><i class="fas fa-edit"></i></router-link></td>
                  <td><i class="fas fa-trash-alt" @click="delateUser(companie.id)"></i></td>
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
import { mapMutations  } from 'vuex';

export default {
    data(){
    return{
      companies:null
    }
  },
  components:{
    Loader
  },
  methods:{
    ...mapMutations(["changeShow"]),
    delateUser(id){
      axios.delete(`https://warm-ocean-82842.herokuapp.com/api/companies/${id}`)
      .then(res => {
        console.log(res)
        axios.get('https://warm-ocean-82842.herokuapp.com/api/companies')
        .then(res => this.companies = res.data)
        .catch(err => console.error(err))
      })
      .catch(err => console.error(err))
    }
  },
  mounted(){
    axios.get('https://warm-ocean-82842.herokuapp.com/api/companies')
    .then(res => this.companies = res.data)
    .catch(err => console.error(err))
  },
}
</script>

<style scoped>
.fa-edit{
  color: white;
}
.fa-trash-alt:hover{
  cursor: pointer;
}
  @media screen and (max-width: 600px){
    td:nth-of-type(1):before { content: "NIP"; }
    td:nth-of-type(2):before { content: "REGON"; }
    td:nth-of-type(3):before { content: "NAZWA"; }
    td:nth-of-type(4):before { content: "CZY PŁATNIK VAT?"; }
    td:nth-of-type(5):before { content: "ULICA"; }
    td:nth-of-type(6):before { content: "NUMER DOMU"; }
    td:nth-of-type(7):before { content: "NUMER MIESZKANIA"; }
    td:nth-of-type(8):before { content: "Edit"; }
    td:nth-of-type(9):before { content: "Delete"; }

  }
</style>