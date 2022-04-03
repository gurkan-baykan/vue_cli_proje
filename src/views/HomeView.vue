<template>
   <v-layout row wrap>
     <v-flex xs12>
       <span> <v-btn color="primary" @click='yeni_dialog = true'> Yeni Kayıt </v-btn> </span>
       <span class="pl-2"> <v-btn color="success"  to="/arac_galeri"> Araç Galeri </v-btn> </span>

        
      </v-flex>
      <v-flex xs12>
        <ekle-dialog @dialog_kapat="yeni_dialog = false" :yeni_dialog="yeni_dialog"    />
      </v-flex>

        <v-flex xs12>
          <simple-datatable @dialog_ac ="yeni_dialog = true"  :yeni_dialog="yeni_dialog"  />
        </v-flex>
    </v-layout>
</template>


<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import SimpleDatatable from '@/components/SimpleDatatable.vue'
import EkleDialog from '../components/EkleDialog.vue'


export default {
  name: 'HomeView',
 
  components: {
    EkleDialog,
    SimpleDatatable
  },
  data(){
    return {
      yeni_dialog:false,
      
    }
  },
  methods:{
  
  }
}
</script>
