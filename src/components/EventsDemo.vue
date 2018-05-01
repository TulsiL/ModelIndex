<template>
  <button @keyup.alt.67="getAlert">Alert</button>
</template>
<script>
export default {
    name:'EventsDemo',
    data(){
        return{

        }
    },
    methods:{
        getAlert(){
            alert("You Clicked")
        }
    }
}
</script>
<style>

</style>
