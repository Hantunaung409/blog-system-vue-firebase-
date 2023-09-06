<template>
    <div class="tagView">
            <div v-if="error">
        {{ error }}
        </div>
        <div class="layout" v-if="filterByTag.length>0">
        <div class="">
            <PostList :posts="filterByTag"></PostList>        
        </div>
        <div class="">
            <TagCloud :posts="posts"></TagCloud>
        </div>

        </div>
        <div class="" v-else>
            <LoadingSpinner></LoadingSpinner>
        </div>
    </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import PostList from '../components/PostList'
import { computed } from 'vue';
import LoadingSpinner from '../components/LoadingSpinner'
import getPost from '../composable/GetPosts'
export default {
  components: {
    TagCloud,
    PostList, LoadingSpinner },
    name : 'TagsView',
    props: ["tag"],
    setup (props) {
        
        let {posts, error, load} = getPost();
        load();
        let filterByTag = computed(() => {
            return posts.value.filter((post) => {
                return post.tags.includes(props.tag);
            })
        })

        return {posts, error, load, props, filterByTag}
    }
}
</script>

<style lang="scss">
.tagView {
    max-width: 1200px;
    margin: 0 auto;
}
</style>