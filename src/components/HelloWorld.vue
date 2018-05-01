<template>
  <div>

    <div id="todo-list-example" v-for="(todo, index) in todos" :key="todo.id">
      <br/>
      <input placeholder="Add a todo">
      <demo></demo>
      <br/>
      
      <button1 :index="index" @remove="remove(index)" @addNewTodo="addNewTodo(index)"></button1>


    </div>
  </div>
</template>

<script>
  import Demo from './Demo.vue'
  import Button1 from './Button1.vue'
  export default {
    name: 'HelloWorld',
    components: {
      demo: Demo,
      button1: Button1
    },
    data() {
      return { 
        todos: [{
          id: 0,
          title: ''
        }],
        nextId:1
      }
    },

    methods: {
      addNewTodo: function () {
        this.todos.push({
          id: this.nextId++,
          title: ''
        })
      },
      remove(index) {
        this.todos.splice(index, 1)
      }
    },

    created() {

    }
  }

</script>
<style scoped>


</style>
