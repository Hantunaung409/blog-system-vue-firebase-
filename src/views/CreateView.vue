<template>
    <div>
      <form action="" @submit.prevent="addPost">
        <label for="title">Title</label>
        <input type="text" name="" id="title" required v-model="title"> <br>
        <label for="body">Body</label>
        <textarea name="" id="body" cols="30" rows="10" required v-model="body"></textarea><br>
        <label for="tags">Tags</label>
        <input type="text" id="tags" v-model="tag" @keydown.enter.prevent="handleKeydown()">  <!--Key up is a bit bug here-->
        <div class="pill" v-for="tag in tags" :key="tag">
            {{ tag }}
        </div>

        <button>Add</button>
      </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import {db} from '../firebase/index'
import { collection, addDoc } from "firebase/firestore"; 
import { serverTimestamp } from 'firebase/firestore';
export default {
    name: "CreateView",
    setup () {
        let router = useRouter();
        let title = ref("");
        let body = ref("");
        let tag = ref("");
        let tags = ref([]);

        let handleKeydown = () => {
           if(!tags.value.includes(tag.value)){
            tags.value.push(tag.value);
           }
           tag.value = ""; 
        };

        let addPost = async() => {
          let newPost = { 
                title : title.value ,
                titleBody : body.value,
                tags : tags.value,
                created_at: serverTimestamp()
              };

              try {
                //const docRef =
                await addDoc(collection(db, "posts"), newPost);
                // console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
          router.push("/");
        }


        return {title, body, tag, handleKeydown, tags, addPost, router}
    }
}
</script>

<style lang="scss">
  form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
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
</style>