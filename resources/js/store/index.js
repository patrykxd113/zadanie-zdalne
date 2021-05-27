import Vuex from 'vuex';
import Vue from 'vue';

import notes from './modules/todos';
import workers from './modules/workers';
import vat from './modules/vat'
import kontroliki from './modules/kontroliki'


Vue.use(Vuex)


export default new Vuex.Store({
   modules: {
       notes,
       workers,
       vat,
       kontroliki
   }
});