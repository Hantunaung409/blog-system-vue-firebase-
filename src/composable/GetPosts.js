import { ref } from 'vue'
import {db} from '../firebase/index'
import { collection, getDocs} from "firebase/firestore"; 

let getPost = () => {
    let posts=ref([]);
    let error = ref("");
    let load = async () => {
      try {
        const response = await getDocs(collection(db, "posts"));
        posts.value = response.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
        })
      }catch(err){
        error.value = err;
      }
    }

    return {posts, error, load}
}

export default getPost;  // not with object form