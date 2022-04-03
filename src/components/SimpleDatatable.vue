

<template>
  <v-data-table
    :headers="headers"
    :items="kayitlar"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    show-expand
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
       
        <v-dialog v-model="dialogDeleteDialog" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item ,index}">
      <v-icon
        small
        class="mr-2 primary--text"
        @click="editItem(item,index)"
      >
        mdi-pencil
      </v-icon>
      <router-link tag="button"    :to="{name:'Kiralama',params:{item_index:index}}">
        <v-icon
        small
      
        class="mr-2 success--text"
        
      >
       mdi-bed-king
      </v-icon>
     </router-link>
      <v-icon
      class="error--text"
        small
        @click="deleteItem(index)"
      >
        mdi-delete
      </v-icon>
    </template>
      <template v-slot:expanded-item="{ headers, item }">
        
       
          <td  >
            {{ item.kira_bilgileri.name }}
        </td>
        <td>
           {{ item.kira_bilgileri.surname }}
        </td>
        <td>
           {{ item.kira_bilgileri.kimlik_no }}
        </td>
        <td>
           {{ item.kira_bilgileri.email }}
        </td>
        <td>
           {{ item.kira_bilgileri.select }}
        </td>
       
     
    </template>
  </v-data-table>
</template>


<script>

import { mapActions, mapState } from "vuex";
import EkleDialog from './EkleDialog.vue';

export default {
  components: { EkleDialog },
  name :"SimpleDatatable",
  
  props : ["yeni_dialog"],
  data(){

    return {
      expanded: [],
      singleExpand: false,
    otopark:{},
    listelenen_kayitlar : [],
    dialogDeleteDialog:false,
    edit:{},
     headers: [
        {
          text: 'Araç Adı',
          align: 'start',
          sortable: false,
          value: 'ad',
        },
        { text: 'Model', value: 'model' },
        { text: 'Giriş Tarihi', value: 'tarih' },
        { text: 'Bekleme Süresi', value: 'sure' },
         { text: 'İşlemler', value: 'actions', sortable: false },
          { text: '', value: 'data-table-expand' },
      ],
    }
    
  },
  computed:
  {
  ...mapState(['kayitlar' 
     // this.listelenen_kayitlar = this.$store.state.kayitlar;
    ]),
    
  },
  methods:{
    editItem(item,index)
    {
      item.satir_index = index;
     
      this.$store.dispatch("editItem",item);
       this.$emit("dialog_ac");
    },
    deleteItem(index)
    {
       this.$store.commit("deleteItem",index); 
    },
    dialogDelete()
    {

    },
    closeDelete()
    {

    },
    deleteItemConfirm()
    {

    }
  }
  
}
</script>

 