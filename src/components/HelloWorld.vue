<template>
  <div class="main">
    <ul v-if="posts && posts.length">
      <li v-for="post of posts">
        <p>
          <strong>{{post.title}}</strong>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'HelloWorld',
    data() {
      return {
        posts: [],
        errors: []
      }
    },
    methods: {
      async getData() {
        try {
          const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
          this.posts = response.data
        } catch (e) {
          this.errors.push(e)
        }
      }
    },
    created() {
      // axios.get(`http://jsonplaceholder.typicode.com/posts`)
      //   .then(response => {
      //     this.posts = response.data
      //   })
      //   .catch(error =>{
      //     this.errors.push(error)
      //   })
      this.getData()

    }
  }

</script>
<style scoped>


</style>
