<template>
    <div v-if="post" class="post">
     <h2>{{ post.title }}</h2>
     <p>{{ post.titleBody }}</p>
     <div class="pill" v-for="tag in post.tags" :key="tag">
      {{ tag }}
    </div>
    <br>
    <button class="delete" @click="deletePost">Delete</button>
    </div>
    <div class="" v-else>
        <LoadingSpinner></LoadingSpinner>
    </div>
</template>

<script>
import LoadingSpinner from '../components/LoadingSpinner'
import getPost from '../../src/composable/GetPost'
import {db} from '../firebase/index'
import { doc, deleteDoc } from "firebase/firestore";
import { useRouter } from 'vue-router'
export default {
  components: { LoadingSpinner },
    name : 'DetailView',
    props: ['id'],
    setup (props) {
        let router = useRouter();
        //load the data
        let {post,error,load} = getPost(props.id);
         load();
        
         //delete the data
         let deletePost = async () => {
          let id = props.id ;
          await deleteDoc(doc(db, "posts", id));     
          router.push('/');     
         }


        return {post,error,load, deletePost};
    }
}
</script>

<style lang="scss">
    .post {
        margin: 0 40px 30px;
        padding-bottom: 30px;
        border-bottom: 1px dashed #e7e7e7;
      }
      .post h2 {
        display: inline-block;
        position: relative;
        font-size: 26px;
        color: white;
        margin-bottom: 10px;
        max-width: 400px;
      }
      .post h2::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: #ff8800;
        position: absolute;
        z-index: -1;
        padding-right: 40px;
        left: -30px;
        transform: rotateZ(-1deg);
      }
      .pill {
        display: inline-block;
        margin: 10px 10px 0 0;
        color: #444;
        background: #ddd;
        padding: 8px;
        border-radius: 20px;
        font-size: 14px;
      }
      button.delete{
        display: block;
        margin-top: 30px;
        background: #ff8800;
        color: white;
        border: none;
        padding: 8px 16px;
        font-size: 18px;
        margin: 20px auto;
      }
</style>