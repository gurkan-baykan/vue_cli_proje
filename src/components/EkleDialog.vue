<template>
    <v-dialog v-model="yeni_dialog" persistent width="700">
            <v-card>
                <v-container grid-list-lg>
                    <v-layout row wrap>
                        <v-flex xs12 sm6>
                            <v-text-field v-model="yeni_kayit.ad" label="Araç Adı">
                            </v-text-field>
                        </v-flex>
                         <v-flex xs12 sm6>
                            <v-text-field v-model="yeni_kayit.model" label="Araç Model">
                            </v-text-field>
                        </v-flex>
                         <v-flex xs12 sm6>
                               <v-text-field v-model="yeni_kayit.tarih" label="Giriş saati"></v-text-field>
                        </v-flex>
                         <v-flex xs12 sm6>
                            <v-text-field v-model="yeni_kayit.sure" label="Araç Kalma Süresi">
                            </v-text-field>
                        </v-flex>
                        <v-flex xs12>
                          
                       </v-flex>
                    </v-layout>
                    <v-layout row justify-end>
                        <v-flex xs12 class="text-right">
                    
                      
                            <span v-if="yeni_kayit && yeni_kayit.satir_index>-1"> 
                                <v-btn @click="guncelle()" color="success"> Güncelle </v-btn>
                            </span>    
                            <span v-else>
                                <v-btn @click="kaydet()" color="success"> Kayıt </v-btn>
                            </span>
                       
                      
                          <span class="ml-2">   <v-btn color="primary" @click="$emit('dialog_kapat')"> İptal</v-btn></span>
                           
                        </v-flex>

                    </v-layout>
                </v-container>
            </v-card>
    </v-dialog>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
    name :'EkleDialog',
    props:['yeni_dialog'],
   data(){
    return {
    
        
    }
  },
    computed:{
         ...mapState(["yeni_kayit"]),
       
    },
  methods:{
      kaydet()
      {
          
        this.$store.dispatch('addData',this.yeni_kayit);
          
        this.$emit('dialog_kapat');
      },
      guncelle()
      {
            this.$store.dispatch('updateData',this.yeni_kayit);
            this.$emit('dialog_kapat');
      }
  },
  
}
</script>