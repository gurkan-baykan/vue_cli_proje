<template>
 
 <v-flex xs12>
    <v-layout row wrap>
        <v-flex xs12 class="amber darken-2 text-center white--text font-weight-light text-h5">
                Kiralama Kayıt Formu

        </v-flex>
        <v-flex xs12>
                <v-divider></v-divider>
        </v-flex>
        <v-flex xs12  >
              <v-text-field
            v-model="yeni_kira.name"
            filled
            :counter="10"
            label="Müşteri Adı"
            required
          
            ></v-text-field>            
        </v-flex>
        <v-flex xs12>
            <v-text-field
            v-model="yeni_kira.surname"
            filled
            label="Soyad"
            required
           
            ></v-text-field>
        </v-flex>
        <v-flex xs12>
            <v-text-field
            v-model="yeni_kira.kimlik_no"
            filled
            label="Kimlik no"
            required
           
            ></v-text-field>
        </v-flex>
        <v-flex xs12>
            <v-text-field
            v-model="yeni_kira.email"
            filled
            label="E-mail"
            required
           
            ></v-text-field>
        </v-flex>
        <v-flex xs12>
            <v-select
                v-model="yeni_kira.select"
                :items="items"
                label="Araç yılı"
                required
                 filled
            ></v-select>
        </v-flex>
          
           <v-flex xs12 class="pt-3 text-right">
            <span>
                <v-btn
                class="mr-4"
                @click="submit()"
                color="success"
                >
                Kayıt
                </v-btn>
            </span>
            <span>
                <v-btn @click="clear()" color="error">
                Temizle
                </v-btn>
            </span>
            <span class="pl-2"> 
                <v-btn to="/" color="primary">
                Kapat
                <v-icon> close </v-icon>
                </v-btn>
            </span>
           </v-flex>
    </v-layout>
 </v-flex>
 

</template>
<script>
import { mapState } from 'vuex';




export default{


    name:"Kiralama",
   
     data()
     {
         return {
            yeni_kira :{},
            satir_index:null,
            items : [
                    "2001",
                    "2002",
                    "2003",
                    "2004",
                    "2005"
            ]
         }
     },
     computed:{
            ...mapState(["kayitlar"])
     },
     mounted(){

        this.satir_index = this.$route.params.item_index;
        
     },
     methods:{
        submit () {
        console.log(this.kayitlar);
         this.kayitlar[this.satir_index].kira_bilgileri = {...this.yeni_kira};
         this.$router.back();

        },
        clear () {
            this.name = ''
            this.phoneNumber = ''
            this.email = ''
            this.select = null
            this.checkbox = null
            this.$refs.observer.reset()
      },
     }
     
}
</script>
