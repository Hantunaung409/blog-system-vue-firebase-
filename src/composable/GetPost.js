import { ref } from "vue";
import {db} from "../firebase/index"
import { getDoc, doc } from "firebase/firestore"; 
let getPost = (id) => {
    let post =ref(null);
    let error = ref("");
    let load = async () => {
        try{
            // await new Promise((reject) => {
            //     setTimeout(reject,3000);
            //   }) just to make some time for loading spinner

            const querySnapshot = await getDoc(doc(db, "posts", id));

            // if (querySnapshot.exists()) {
            //     console.log("Document data:", querySnapshot.data());
            //   } else {
            //     // doc.data() will be undefined in this case
            //     console.log("No such document!");
            //   }
            post.value = {id: querySnapshot.id, ...querySnapshot.data()};
        }catch(err){
            error.value = err;
        }

    }
    return {post,error,load};
}

export default getPost;