<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
     

       <v-flex xs12 class="title text-center">
         VUE-2 - ÖRNEK PROJE
       </v-flex>


    </v-app-bar>

    <v-main>
      <v-container grid-list-md>
         <v-layout row wrap>
           <router-view/>
      </v-layout>
      </v-container>
     
      
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    
  })
}
</script>
