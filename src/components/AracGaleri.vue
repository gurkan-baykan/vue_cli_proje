
<template>
    <v-flex xs12>
        <v-card>
            <v-container grid-list-md>
                    <v-layout row wrap>
                       <v-flex xs12 sm3 v-for="(val,key) in images" :key="key">
                            <v-img width="400" height="400"  :src="require('@/assets/images/'+val.pathShort)" /> 
                       </v-flex>
                       <v-flex  xs12 class="text-right">
                           <v-btn  class="primary" to="/"> İptal </v-btn>
                       </v-flex>
                    </v-layout>
            </v-container>
        </v-card>
    </v-flex>
</template>



<script>


export default  {
  name : "AracGaleri",
  data(){
      return {
          images:[],
      }
  },
    mounted() {
        console.log(3453);
        this.importAll(require.context('../assets/images/', true, /\.png$/));
    },
    methods:{
        importAll(r)
        {
            
            r.keys().forEach((val) => { 
                    var karakter =  val.substring( 2 );
                  
                      this.images.push({ pathLong: r(val), pathShort: karakter })

              });
                    
                
            console.log(this.images);
        }
    }
}
</script>

