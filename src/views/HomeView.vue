<template>
  <div class="home">
    <!-- if there is an error -->
    <h1 v-if="error">
     {{ error }}
    </h1>
    <!-- if no error after loading -->
    <div class="layout" v-if="posts.length>0">
      <div class="">
        <PostsList :posts="posts"></PostsList>  
      </div>

      <div class="">
        <TagCloud :posts="posts"></TagCloud>
      </div>
    </div>

    <!-- while the data is loading -->
    <div class="" v-else>
      <LoadingSpinner></LoadingSpinner>
    </div>
  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import LoadingSpinner from '../components/LoadingSpinner'
// @ is an alias to /src
import getPost from '../../src/composable/GetPosts' //.js file are not needed after file name like GetPost.js
import PostsList from '../components/PostList.vue'
export default {
  name: 'HomeView',

  components: {
    TagCloud,
    LoadingSpinner, PostsList },
    setup(){
    
     let {posts, error, load} = getPost();
      load();
      return {posts,error,load};
      
    }
}
</script>
<style lang="scss">
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.layout {
   display: grid;
   grid-template-columns: 3fr 1fr;
   gap: 20px;
}
</style>
