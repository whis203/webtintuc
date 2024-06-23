<template>
    <div v-if="post" class="container my-5 gap-5">
      <h2 class="title-h2 fw-bold fs-1">{{ post.posttitle }}</h2>
      <hr>
      <div class="d-flex fs-5">
        <div class="content-left">
          <p>{{ post.content }}</p>
          <img width="800px" :src="post.image" alt="Post Image">
        </div>
        
      </div>
    </div>
    <p v-else class="text-center my-5">Loading post...</p>
  </template>
  
  <script>
  import PostService from '@/services/postService'; // Adjust the path as per your project structure
  
  export default {
    name: 'PostDetail',
    data() {
      return {
        post: null
      };
    },
    created() {
      const postid = this.$route.params.postid; // Get postid from URL
      this.getPostById(postid);
    },
    methods: {
      getPostById(postid) {
        PostService.getPostDetail(postid)
          .then(response => {
            this.post = response.data;
          })
          .catch(error => {
            console.error('Error fetching post:', error);
            // Optionally handle errors, e.g., redirect or display error message
          });
      }
    }
    
  };
  </script>
  
  <style scoped>
  .content-left p {
    margin: 40px 0;
    line-height: 2;
  }
  </style>
  