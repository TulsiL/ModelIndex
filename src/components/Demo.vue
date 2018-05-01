<template>
  
    <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="290">
      <button color="primary" dark slot="activator" >Open Dialog</button>
      <v-card>
        <v-card-title class="headline">Enter value</v-card-title>
         <v-text-field label="Enter here" hint="example of helper text only on focus"></v-text-field>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click.native="dialog = false">save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>

</template>
<script>
  export default {
    name: 'Demo',
    props: ['title'],
    data() {
      return {
          dialog:'',
          qarticaltext:''
      }
    },

  }

</script>
<style>


</style>
