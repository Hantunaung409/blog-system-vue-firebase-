<template>
    <div class="tagCloud">
    `    <div v-for="tag in uniqueTags" :key="tag">
            <router-link :to="{name : 'tags', params:{tag: tag}}">{{ tag }}</router-link>
         </div>`        
    </div>

</template>

<script>
import { ref } from 'vue';

    export default {
        name: "TagCloud",
        props: ["posts"],
        setup(props) {
            let tags = ref([]);

            //getting all tags from db
            props.posts.forEach(post => {
                post.tags.forEach(tag => {
                   tags.value.push(tag);
                })
            });
            let uniqueTags = tags.value.filter((tag, index, arr) => {
                return arr.indexOf(tag) === index;
            })


            return {uniqueTags}
        }
    }
</script>

<style lang="scss">
 .tagCloud {
    padding: 10px;
 }
 .tagCloud div {
    // display: inline-block;
    padding: 10px;

 }
 .tagCloud a {
    color: #ccc;
    text-decoration: none;
 }
 .tagCloud a.router-link-active{
    color: #ff8800;
    font-weight: bold;
 }
</style>