<template>
  <div>
    <section>
      <h1>vat</h1>
      <div class="tbl-header">
        <table cellpadding="0" cellspacing="0" border="0">
          <thead>
            <tr>
              <th>Lp</th>
              <th>Opis</th>
              <th>MPK</th>
              <th>Kwota Netto</th>
              <th>Ilość</th>
              <th>VAT</th>
              <th>Kwota_Brutto</th>
              <th>Wartość_Netto</th>
              <th>Wartość_Brutto</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="tbl-content">
        <table cellpadding="0" cellspacing="0" border="0">
          <tbody>
            <tr v-for="v in vat" :key="v.LP">
              <td>{{ v.Lp }}</td>
              <td>{{ v.Opis }}</td>
              <td>{{ v.MPK }}</td>
              <td class="netto">{{ netto(v.Ilość,v.Kwota_Netto) }}</td>
              <td><input type="number" v-model="v.Ilość"></td>
              <td>
                <select name="" v-model="v.VAT">
                  <option value="" selected disabled>Vat</option>
                  <option value="0">0%</option>
                  <option value="5">5%</option>
                  <option value="8">8%</option>
                  <option value="23">23%</option>
                </select>
              </td>
              <td>{{ brutto(v.Ilość,v.Kwota_Netto,v.VAT) }}</td>
              <td>{{ v.Kwota_Netto   }}</td>
              <td>{{ wartoscBrutto(v.Ilość,v.Kwota_Netto,v.VAT) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    
    <button class="over-1000-btn" @click="markGreen()">Click</button>
  </div>
</template>


<script>

export default {
  methods:{
    netto(ilosc,kowta_netto){
      return ilosc * kowta_netto;
    },
    wartoscBrutto(ilosc,kowta_netto,vat){
      return this.netto(ilosc,kowta_netto) * (vat / 100);
    },
    brutto(ilosc,kowta_netto , vat){
      return this.netto(ilosc,kowta_netto) + this.wartoscBrutto(ilosc,kowta_netto,vat);
    },
    markGreen(){
      let tr = document.querySelectorAll('.netto');
      tr.forEach(ell => {
        if(ell.innerHTML > 1000){
          ell.parentElement.style.backgroundColor = 'rgba(0,0,0,0.2)'
        }else if(ell.innerHTML < 1000){
          ell.parentElement.style.backgroundColor = 'transparent'
        }
      })
      
    }
  },
  data(){
    return{
      vat:[
        {
            Lp:1,           
            Opis:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',          
            MPK:4342,           
            Kwota_Netto:200,   
            Ilość:12,        
            VAT:0,           
        },
        {
            Lp:2,           
            Opis:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',          
            MPK:6655,           
            Kwota_Netto:300,   
            Ilość:5,        
            VAT:5,           
        },
        {
            Lp:3,           
            Opis:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',          
            MPK:3212,           
            Kwota_Netto:400,   
            Ilość:4,        
            VAT:8,           
        },
        {
            Lp:4,           
            Opis:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',          
            MPK:9867,           
            Kwota_Netto:200,   
            Ilość:4,        
            VAT:5,           
        },
        {
            Lp:5,           
            Opis:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',          
            MPK:5429,           
            Kwota_Netto:100,   
            Ilość:8,        
            VAT:23,           
        },
    ]
    }
  }
};
</script>

<style scoped>
  .over-1000-btn:hover{
  border: 2px solid white;
  cursor: pointer;
}

.over-1000-btn{
  border: 1px solid rgba(255,255,255,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 20px 60px;
  color: white;
  margin: 40px auto;
}

  @media screen and (max-width: 600px){
    td:nth-of-type(1):before { content: "Lp"; }
    td:nth-of-type(2):before { content: "Opis"; }
    td:nth-of-type(3):before { content: "MPK"; }
    td:nth-of-type(4):before { content: "Kwota Netto"; }
    td:nth-of-type(5):before { content: "Ilość"; }
    td:nth-of-type(6):before { content: "VAT"; }
    td:nth-of-type(7):before { content: "Kwota_Brutto"; }
    td:nth-of-type(8):before { content: "Wartość_Netto"; }
    td:nth-of-type(9):before { content: "Wartość_Brutto"; }

  }
</style>