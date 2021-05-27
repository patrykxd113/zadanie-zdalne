<template>
  <div>

        <div class="form-container">
      <div class="form-heder"><h3>Różne kontrolki HTML</h3></div>
      <form action="" @submit.prevent="preDef($event)">

        <div class="input-with-icon">
          <i class="fas fa-home"></i>
          <input type="text" name="NIP" placeholder="NIP">
        </div>

        <div class="input-with-icon">
          <i class="fas fa-home"></i>
          <input type="number" name="REGON" placeholder="REGON"> 
        </div>

        <div class="input-with-icon">
          <i class="fas fa-home"></i>
          <input type="text" name="NAZWA" placeholder="NAZWA">
        </div>

        <div class="input-with-icon">
          <i class="fas fa-home"></i>
          <input type="date" name="DATA_POWSTANIA" placeholder="DATA POWSTANIA">
        </div>

        <div class="input-with-icon">
          <i class="fas fa-home"></i>
          <input type="text" name="ULICA" placeholder="ULICA">
        </div>
         
        <div class="input-with-icon">
          <i class="fas fa-home"></i>
          <input type="text" name="NUMER_DOMU" placeholder="NUMER DOMU">
        </div>
         
        <div class="input-with-icon">
          <i class="fas fa-home"></i>
          <input type="text" name="NUMER_MIESZKANIA" placeholder="NUMER MIESZKANIA">
        </div>
         
        <div class="input-with-icon">
          <i class="fas fa-home"></i>
          <input type="textarea" name="UWAGI" placeholder="UWAGI">
        </div>

        <select name="Kolory" class="inline-input">
          <option value="" selected disabled>Kolory</option>
          <option v-for="kolor in getKolory" :key="kolor" :value="kolor">{{ kolor }}</option>
        </select>

        <select name="VAT" class="inline-input-2">
          <option value="" selected disabled>Vat</option>
          <option v-for="vat in getVat" :key="vat" :value="vat">{{ vat }}</option>
        </select>

        

      </form>

      <ol>
        <li>Element</li>
        <li>Element</li>
        <li>Element</li>
      </ol>
  </div>



  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed:mapGetters(['getKolory','getVat']),
  
}
</script>

<style scoped>
.form-container{
  margin-top: 80px;
  border: 1px solid rgba(255,255,255,0.3);
}
.form-heder{
  background-color: rgba(255,255,255,0.3);
  padding: 20px 15px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
}
form{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(4,100px);
  align-items: center;
  justify-items: center;
}

.input-with-icon{
  width: 60%;
  background-color: white;
  padding: 20px 40px;
  border-radius: 35px;
  color: #366E56;
}

input{
  width: 60%;
  color: #444;
}

/* ---- List ----- */
ol{
  margin: 0px  auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
li {
  counter-increment: index; 
  align-items: center;
  padding: 12px 0;
  box-sizing: border-box;
  color: white;
}

/* ---- List ----- */

@media screen and (max-width: 600px) {
  form{
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: repeat(1,100px);
    position: relative;
  }
  .form-heder{
    width: 100%;
  }
  .input-with-icon{
    margin-top: 20px;
  }
  .inline-input{
    display: inline-block;
    position: absolute;
    top: 102%;
    left: 25%;
  }
  .inline-input-2{
    display: inline-block;
    position: absolute;
    top: 102%;
    right: 25%;
  }
  ol{
    margin-top: 35px;
  }
}
</style>