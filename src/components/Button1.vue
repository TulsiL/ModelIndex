<template>
  <div>
    <button @click="addNewTodo(index)">ADD</button>
    <button @click="remove(index)">remove</button>
  </div>
</template>
<script>
  export default {
    name: 'Button',
    props: ['index'],
    data() {
      return {

      }
    },
    methods: {
      remove(index) {
        this.$emit('remove', index)
      },
      addNewTodo(index) {
        this.$emit('addNewTodo', index)
      }
    }
  }

</script>
<style>


</style>
