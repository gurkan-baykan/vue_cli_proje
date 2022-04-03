 
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kayitlar: [],
    yeni_kayit:{},
  },
  getters: {
    kayitGetir(state) {
      return state.kayitlar;
      }
  },
  mutations: {
    addData(state,data)
    {
      console.log(45645);
      state.kayitlar.push(data );
      state.yeni_kayit = {};
    },
    editData(state,obj)
    {
     
      state.yeni_kayit = { ...obj };
    },
    updateData(state,obje)
    {
       console.log(obje);
      if (obje.satir_index > -1 && state.kayitlar[obje.satir_index]) {
        
        state.yeni_kayit = Object.assign({}, obje);

        Vue.set(state.kayitlar, obje.satir_index, obje);
       
        
        state.yeni_kayit = {};
       
          state.kayitlar;
      }
     
   
    },
    deleteItem(state,index)
    {
      console.log("girdi");
      state.kayitlar.splice(index, 1);
    }

  },
  actions: {

    addData(context,obje)
    {
      context.commit('addData', obje);
    },
    editItem(context,obje)
    {
      context.commit('editData', obje);

    },
     updateData(context,obje)
    {
      return context.commit('updateData',obje);

    }

  },
  modules: {
  }
})
