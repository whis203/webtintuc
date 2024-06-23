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
      postsPerPage: 4,
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

<RouterLink to="/detail" class="text-black text-decoration-none">
  <div class="banner container" >
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" style="height: 600px;" src="../assets/img/pubg-ps5-1.jpg" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" style="height: 600px;" src="../assets/img/baner.jpg" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" style="height: 600px;" src="../assets/img/Beyond_itunes_profile2-737x414.jpg" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <h1 class="text-center">PUBG sắp phát hành phiên bản CẢI TIẾN chất lượng 4K trên nền tảng PS5?</h1>
  </div>
</RouterLink>
  <div class="container my-5 d-flex gap-3">
    <div>
      <div class="tinhot">
        <div class="title">
          <h2 class="title-h2 fw-bold">GAME</h2>
          <div v-if="filteredPostsByCategory('game').length > 0">
            <RouterLink :key="filteredPostsByCategory('game')[filteredPostsByCategory('game').length - 1].postid" 
                        :to="{ path: '/posts/' + filteredPostsByCategory('game')[filteredPostsByCategory('game').length - 1].postid }" 
                        class="text-black text-decoration-none" 
                        style="width: 18rem;">
              <div class="content-top d-flex">
                <img height="150px" class="w-25" :src="filteredPostsByCategory('game')[filteredPostsByCategory('game').length - 1].image" alt="">
                <div class="mx-3">
                  <h3>{{ filteredPostsByCategory('game')[filteredPostsByCategory('game').length - 1].content }}</h3>
                  <p>{{ filteredPostsByCategory('game')[filteredPostsByCategory('game').length - 1].posttitle }}</p>
                </div>
              </div>
            </RouterLink>
            <div v-if="filteredPostsByCategory('game').length > 0" class="content-bottom d-flex flex-wrap gap-3 my-5">
              
                <RouterLink v-for="(post, index) in filteredPostsByCategory('game').slice(0, 3)" 
                            :key="post.postid" 
                            :to="{ path: '/posts/' + post.postid }" 
                            class="card text-decoration-none" 
                            style="width: 18rem;">
                  <img height="180px" class="card-img-top" :src="post.image" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">{{ post.content }}</h5>
                    <p class="card-text">{{ post.posttitle }}</p>
                  </div>
                </RouterLink>
              </div>
              <p v-else>No posts available.</p>
          </div>
          <p v-else>No posts available.</p>
        </div>
      </div>
      <div class="tinhot">
        <div class="title">
          <h2 class="title-h2 fw-bold">GIẢI TRÍ</h2>
          <div v-if="filteredPostsByCategory('giaitri').length > 0">
            <RouterLink :key="filteredPostsByCategory('giaitri')[filteredPostsByCategory('giaitri').length - 1].postid" 
                        :to="{ path: '/posts/' + filteredPostsByCategory('giaitri')[filteredPostsByCategory('giaitri').length - 1].postid }" 
                        class="text-black text-decoration-none" 
                        style="width: 18rem;">
              <div class="content-top d-flex">
                <img height="150px" class="w-25" :src="filteredPostsByCategory('giaitri')[filteredPostsByCategory('giaitri').length - 1].image" alt="">
                <div class="mx-3">
                  <h3>{{ filteredPostsByCategory('giaitri')[filteredPostsByCategory('giaitri').length - 1].content }}</h3>
                  <p>{{ filteredPostsByCategory('giaitri')[filteredPostsByCategory('giaitri').length - 1].posttitle }}</p>
                </div>
              </div>
            </RouterLink>
            <div v-if="filteredPostsByCategory('giaitri').length > 0" class="content-bottom d-flex flex-wrap gap-3 my-5">
              
                <RouterLink v-for="(post, index) in filteredPostsByCategory('giaitri').slice(0, 3)" 
                            :key="post.postid" 
                            :to="{ path: '/posts/' + post.postid }" 
                            class="card text-decoration-none" 
                            style="width: 18rem;">
                  <img height="180px" class="card-img-top" :src="post.image" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">{{ post.content }}</h5>
                    <p class="card-text">{{ post.posttitle }}</p>
                  </div>
                </RouterLink>
              </div>
              <p v-else>No posts available.</p>
          </div>
          <p v-else>No posts available.</p>
        </div>
      </div>
      <div class="tinhot">
        <div class="title">
          <h2 class="title-h2 fw-bold">SPORT</h2>
          <div v-if="filteredPostsByCategory('sport').length > 0">
            <RouterLink :key="filteredPostsByCategory('sport')[filteredPostsByCategory('sport').length - 1].postid" 
                        :to="{ path: '/posts/' + filteredPostsByCategory('sport')[filteredPostsByCategory('sport').length - 1].postid }" 
                        class="text-black text-decoration-none" 
                        style="width: 18rem;">
              <div class="content-top d-flex">
                <img height="150px" class="w-25" :src="filteredPostsByCategory('sport')[filteredPostsByCategory('sport').length - 1].image" alt="">
                <div class="mx-3">
                  <h3>{{ filteredPostsByCategory('sport')[filteredPostsByCategory('sport').length - 1].content }}</h3>
                  <p>{{ filteredPostsByCategory('sport')[filteredPostsByCategory('sport').length - 1].posttitle }}</p>
                </div>
              </div>
            </RouterLink>
            <div v-if="filteredPostsByCategory('sport').length > 0" class="content-bottom d-flex flex-wrap gap-3 my-5">
              
                <RouterLink v-for="(post, index) in filteredPostsByCategory('sport').slice(0, 3)" 
                            :key="post.postid" 
                            :to="{ path: '/posts/' + post.postid }" 
                            class="card text-decoration-none" 
                            style="width: 18rem;">
                  <img height="180px" class="card-img-top" :src="post.image" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">{{ post.content }}</h5>
                    <p class="card-text">{{ post.posttitle }}</p>
                  </div>
                </RouterLink>
              </div>
              <p v-else>No posts available.</p>
          </div>
          <p v-else>No posts available.</p>
        </div>
      </div>
    </div>
    <div class="p-2 rounded-4">
      <p class="box-1 position-sticky top-0">
      <h2 >XEM NHIỀU</h2>
      <RouterLink v-for="post in visiblePosts" :key="post.postid" :to="{ path: '/posts/' + post.postid }" class="text-black text-decoration-none" >
          <p class="card-text">{{ post.posttitle }}</p>
          <hr>
      </RouterLink>
      <div>
        <iframe class="rounded-4"  width="366" height="300" src="https://www.youtube.com/embed/C3GouGa0noM" title="GODS ft. NewJeans (뉴진스)(Video Âm Nhạc Chính Thức) | Bài Hát Chủ Đề CKTG 2023 - Liên Minh Huyền Thoại" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </p>
    </div>
  </div>
  <div class="banner2 d-flex flex-column justify-content-between align-items-center " >
    <h2 class="text-white mt-5">BAN BIÊN TẬP CHỌN</h2>
    <div class=" d-flex container flex-wrap ">
      <div class="col">
        <img style="width: 250px;" src="../assets/img/Game-Scoop_iTunes-profile-picture-737x414.jpg" alt="">
        <p>PHÁ ĐẢO</p>
        </div>
        <div class="col">
        <img style="width: 250px;" src="../assets/img/NVC-737x414.jpg" alt="">
        <p>MỞ KHOÁ</p>
        </div>
        <div class="col">
        <img style="width: 250px;" src="../assets/img/Beyond_itunes_profile2-737x414.jpg" alt="">
        <p>ĐOẠT CUP</p>
        </div>
        <div class="col">
        <img style="width: 250px;" src="../assets/img/Unlocked_itunes-737x414.jpg" alt="">
        <p>NINTERDER</p>
        </div>
    </div>
  </div>
  <div class="newtin container my-5 ">
    <h1 class="fw-bold fs-2">
      TIN MỚI NHẤT
    </h1>
  </div>
  <div class="container d-flex flex-wrap gap-5 justify-content-center" >
    <div>
          <div v-if="visiblePosts.length > 0" class="d-flex flex-wrap gap-5 justify-content-center">
            <RouterLink v-for="post in visiblePosts" :key="post.postid" :to="{ path: '/posts/' + post.postid }" class="card text-decoration-none" style="width: 18rem;">
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
          <button v-if="posts.length > visiblePosts.length" @click="loadMore" class="btn btn-danger mt-3">Tải thêm</button>
  </div>
 

</template>

<style scoped>

.banner:hover img{
  transform: scale(1.1);
  transition: all 0.8s ease

}
.banner:hover h1{
 color: red;
 transition: all 0.3s linear
}

</style>

