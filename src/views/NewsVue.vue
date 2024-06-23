<script >
import { RouterLink, RouterView } from 'vue-router'
import PostService from '../services/postService';

export default {
  name: 'HomeView',
 
  data() {
    return {
      posts: [],
      selectedCategory: '',
      visiblePosts: [],
      postsPerPage: 3,
      currentPage: 1
    };
  },
  
  created() {
    this.fetchPosts();
    this.fetchPostsByCategory();
  },
  methods: {
    fetchPosts() {
      PostService.getAllPost()
        .then(response => {
          this.posts = response.data;
          this.visiblePosts = this.posts.slice(0, this.postsPerPage * this.currentPage);
        })
        .catch(error => {
          console.error("There was an error fetching the posts!", error);
        });
    },
    loadMore() {
      this.currentPage++;
      this.visiblePosts = this.posts.slice(0, this.postsPerPage * this.currentPage);
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    fetchPostsByCategory() {
      if (this.selectedCategory) {
        PostService.getPostsByCategory(this.selectedCategory)
          .then(response => {
            this.posts = response.data;
          })
          .catch(error => {
            console.error('Error fetching posts:', error);
          });
      }
    },
    filteredPostsByCategory(category) {
      return this.posts.filter(post => post.category === category);
    }
  },
  watch: {
    // Gọi fetchPostsByCategory mỗi khi selectedCategory thay đổi
    selectedCategory(newCategory) {
      this.fetchPostsByCategory();
    }
  },
  
};
</script>
  
  <template>
  <div class="news container my-5">
    <h2 class="fw-bold">
      TIN MỚI NHẤT
    </h2>
    <hr>
    <div class="d-flex gap-5">
      <div class="tags">
          <ul style="list-style: none;" class=" justify-content-center align-items-center gap-1 flex-wrap text-black-50 ">
            <li class="actives"><font-awesome-icon icon="fa-solid fa-circle-down" /> Mới nhất</li>
           
          </ul>
      </div>
      <div class="content d-flex flex-wrap justify-content-between">
        <div class="container d-flex flex-wrap gap-5 justify-content-center" >
    <div>
          <div v-if="visiblePosts.length > 0" class="d-flex flex-wrap gap-5 justify-content-center">
            <RouterLink v-for="post in visiblePosts" :key="post.postid" :to="{ path: '/posts/' + post.postid }" class="card border-0 text-decoration-none" style="width: 15rem;">
              <img height="150px" class="card-img-top" :src="post.image" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">{{ post.content }}</h5>
                <p class="card-text">{{ post.posttitle }}</p>
                <!-- Các phần tử khác trong card -->
              </div>
            </RouterLink>
          </div>
            <p v-else>No posts available.</p>
          </div>
      </div>
      <button v-if="posts.length > visiblePosts.length" @click="loadMore" class="btn btn-danger mx-auto mt-3">Tải thêm</button>
      </div>
    </div>
    
  </div>
</template>

<style>
.tags li{
  width: 200px;
  font-size: 18px;
}
</style>
