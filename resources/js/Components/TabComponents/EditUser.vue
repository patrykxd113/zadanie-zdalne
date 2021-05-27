<template>
  <div>
    <div class="form-container">
      <div class="form-heder">Edit User</div>
      <form action="" @submit.prevent="preDef($event)">
        <div class="input-with-icon">
          <i class="fas fa-home"></i>
          <input type="text" name="NIP" placeholder="NIP" v-model="NIP" />
        </div>

        <div class="input-with-icon">
          <i class="fas fa-home"></i>
          <input type="text" name="REGON" placeholder="REGON" v-model="REGON" />
        </div>

        <div class="input-with-icon">
          <i class="fas fa-home"></i>
          <input type="text" name="NAZWA" placeholder="NAZWA" v-model="NAZWA" />
        </div>

        <div class="input-with-icon">
          <i class="fas fa-home"></i>
          <input type="text" name="ULICA" placeholder="ULICA" v-model="ULICA" />
        </div>

        <div class="input-with-icon">
          <i class="fas fa-home"></i>
          <input
            type="text"
            name="NUMER_DOMU"
            placeholder="NUMER DOMU"
            v-model="NUMER_DOMU"
          />
        </div>

        <div class="input-with-icon">
          <i class="fas fa-home"></i>
          <input
            type="text"
            name="NUMER_MIESZKANIA"
            placeholder="NUMER MIESZKANIA"
            v-model="NUMER_MIESZKANIA"
          />
        </div>

        <div class="input-with-icon radio">
          <div class="wrapper">
            <input
              type="radio"
              name="VAT"
              value="1"
              v-model.number="VAT"
              id="option-1"
            />
            <input
              type="radio"
              name="VAT"
              value="0"
              v-model.number="VAT"
              id="option-2"
            />
            <label for="option-1" class="option option-1">
              <div class="dot"></div>
              <span>Płacę</span>
            </label>
            <label for="option-2" class="option option-2">
              <div class="dot"></div>
              <span>Nie</span>
            </label>
          </div>
        </div>

        <button
          class="edit-user-btn"
          type="submit"
          @submit.prevent="preDef($event)"
          @click="editUser()"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      NIP: null,
      REGON: null,
      NAZWA: null,
      VAT: null,
      ULICA: null,
      NUMER_DOMU: null,
      NUMER_MIESZKANIA: null,
    };
  },
  methods: {
    preDef(e) {
      e.preventDefault();
    },
    checked(vat) {
      if (vat) {
        return "checked";
      }
    },
    editUser() {
      axios
        .patch(
          `https://warm-ocean-82842.herokuapp.com/api/companies/${this.$route.params.id}`,
          {
            NIP: this.NIP,
            REGON: this.REGON,
            NAZWA: this.REGON,
            VAT: this.VAT,
            ULICA: this.ULICA,
            NUMER_DOMU: this.NUMER_DOMU,
            NUMER_MIESZKANIA: this.NUMER_MIESZKANIA,
          }
        )
        .then((res) => {
          console.log(res);
          this.$router.push({ path: "/DaneKontrahentow" });
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    axios
      .get(
        `https://warm-ocean-82842.herokuapp.com/api/companies/${this.$route.params.id}`
      )
      .then((res) => {
        (this.NIP = res.data.NIP), (this.REGON = res.data.REGON);
        (this.NAZWA = res.data.NAZWA),
          (this.VAT = res.data.VAT ? 1 : 0),
          (this.ULICA = res.data.ULICA),
          (this.NUMER_DOMU = res.data.NUMER_DOMU),
          (this.NUMER_MIESZKANIA = res.data.NUMER_MIESZKANIA);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.form-container {
  margin-top: 80px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.form-heder {
  background-color: rgba(255, 255, 255, 0.3);
  padding: 20px 15px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
}
form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 100px);
  align-items: center;
  justify-items: center;
}

.input-with-icon {
  width: 60%;
  background-color: white;
  padding: 20px 40px;
  border-radius: 35px;
  color: #366e56;
}

input {
  width: 60%;
  color: #444;
}

/* ===================================== */

@import url("https://fonts.googleapis.com/css?family=Lato:400,500,600,700&display=swap");

.wrapper {
  display: inline-flex;
  height: 40px;
  width: 60%;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
}
.wrapper .option {
  background: transparent;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  padding: 0 10px;
  border: 1px solid white;
  transition: all 0.3s ease;
}
.wrapper .option .dot {
  height: 20px;
  width: 20px;
  background: #d9d9d9;
  border-radius: 50%;
  position: relative;
}
.wrapper .option .dot::before {
  position: absolute;
  content: "";
  top: 4px;
  left: 4px;
  width: 12px;
  height: 12px;
  background: #16ba91;
  border-radius: 50%;
  opacity: 0;
  transform: scale(1.5);
  transition: all 0.3s ease;
}

.radio {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: transparent;
}

input[type="radio"] {
  display: none;
}
#option-1:checked:checked ~ .option-1,
#option-2:checked:checked ~ .option-2 {
  border: 2px solid white;
  background: transparent;
}
#option-1:checked:checked ~ .option-1 .dot,
#option-2:checked:checked ~ .option-2 .dot {
  background: #fff;
}
#option-1:checked:checked ~ .option-1 .dot::before,
#option-2:checked:checked ~ .option-2 .dot::before {
  opacity: 1;
  transform: scale(1);
}
.wrapper .option span {
  font-size: 20px;
  color: #808080;
}
#option-1:checked:checked ~ .option-1 span,
#option-2:checked:checked ~ .option-2 span {
  color: #fff;
}

.edit-user-btn {
  border: 1px solid rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 20px 60px;
  color: white;
  margin: 40px auto;
  background-color: transparent;
  text-decoration: none;
}

.edit-user-btn:hover {
  border: 2px solid white;
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .wrapper {
    width: 100%;
    height: fit-content;
  }
  form {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 100px);
    position: relative;
  }
  .form-heder {
    width: 100%;
  }
  .input-with-icon {
    margin-top: 20px;
  }
}
</style>