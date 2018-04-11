<template>
  <div class="main">
   
    <!-- <div style="color:red">{{counter}}</div> -->
    <br/>
    <div v-for="n in 4" :key="n.id">
    <label style="color:pink">{{counter++}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {     
        counter: 0      
    }
  },
  watch:{
    counter() {
      console.log(this.counter);      
      this.counter=0;
    }
  }
}
</script>
<style scoped>

</style>
