<script>
import PostService from '@/services/postService';

export default {
  name: 'PostUser',
  data() {
    return {
      posts: [],
      editedPost: {
        postid: null,
        posttitle: '',
        content: '',
        category: '',
        image: ''
      }
    };
  },
  created() {
    // Example: fetching posts for user with id 1
    this.getPostsByUserId(this.$store.state.user.employeeid); // Replace with actual user id you want to fetch posts for
  },
  methods: {
    getPostsByUserId(userid) {
      PostService.getPostsByUserId(userid)
        .then(response => {
          this.posts.push(...response.data);
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    },
    editPost(post) {
      // Copy the post data to editedPost for editing
      this.editedPost = { ...post };
    },
    saveEditedPost() {
      PostService.updatePost(this.editedPost)
        .then(response => {
          alert('Cập nhật thành công:', response.data);
          
          const index = this.posts.findIndex(p => p.postid === this.editedPost.postid);
          if (index !== -1) {
            // Update only the properties that have changed
            this.posts[index].posttitle = this.editedPost.posttitle;
            this.posts[index].content = this.editedPost.content;
            this.posts[index].image = this.editedPost.image;
          }
          // Reset editedPost for next use
          this.editedPost = {
            postid: null,
            posttitle: '',
            content: '',
            category: '',
            image: ''
          };
          window.location.reload();
        })
        .catch(error => {
          console.error('Không thành công:', error);
        });
    },
    deletePost(postId) {
      PostService.deletePost(postId)
        .then(response => {
          alert('Xoá bài thành công:', response.data);
          // Remove the deleted post from this.posts
          this.posts = this.posts.filter(post => post.postid !== postId);
        })
        .catch(error => {
          console.error('Thất bại:', error);
        });
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  }
};
</script>

<template>
  <div class="container d-flex flex-wrap gap-5 justify-content-center">
    <div v-if="posts.length > 0" class="d-flex flex-wrap gap-5 justify-content-center">
      <div v-for="post in posts" :key="post.postid" class="card position-relative" style="width: 15rem;">
        <!-- Modal for delete -->
        <button style="top: -10px; right: -10px;" type="button" class="bg-danger text-white px-2 rounded-circle border-0 position-absolute" data-toggle="modal" :data-target="'#exampleModal' + post.postid">
          x
        </button>
        <div class="modal fade" :id="'exampleModal' + post.postid" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Xoá bài viết</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Bạn có chắc chắn xoá?
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger" @click="deletePost(post.postid)">Vâng</button>
              </div>
            </div>
          </div>
        </div>
        
        <img height="150px" class="card-img-top" :src="post.image" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ post.content }}</h5>
          <p class="card-text">{{ post.posttitle }}</p>
        </div>
        <!-- Modal for edit -->
        <button style="top: -10px; right: -10px;" type="button" class="bg-transparent border-0 text-success fst-italic" data-toggle="modal" :data-target="'#exampleModal1' + post.postid" @click="editPost(post)">
          chỉnh sửa
        </button>
        <div class="modal fade" :id="'exampleModal1' + post.postid" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Sửa bài viết</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="saveEditedPost()">
                  <div class="form-group">
                    <label for="editPostTitle">Tiêu đề</label>
                    <input type="text" class="form-control" id="editPostTitle" v-model="editedPost.posttitle">
                  </div>
                  <div class="form-group">
                    <label for="editPostContent">Nội dung</label>
                    <textarea class="form-control" id="editPostContent" rows="5" v-model="editedPost.content"></textarea>
                  </div>
                  <select class="form-select" aria-label="Default select example" v-model="editedPost.category">
                          <option selected>{{editedPost.category}}</option>
                          <option value="game">Game</option>
                          <option value="giaitri">Giải trí</option>
                          <option value="sport">Thể Thao</option>
                        </select>
                  <div class="form-group">
                    <label for="editPostImage">Ảnh (địa chỉ hình ảnh)</label>
                    <input type="text" class="form-control" id="editPostImage" v-model="editedPost.image">
                  </div>
                  <button type="submit" class="btn btn-danger w-100">Lưu thay đổi</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div  v-else class="container d-flex flex-wrap gap-5 justify-content-center" style="height: 40vh;">
      <p>No posts available for this user.</p>
    </div>
   
  </div>
</template>



<style scoped>
.label {
  width: 100%;
}
input {
  margin: 25px 0px;
  border: 1px solid rgb(233, 233, 233);
  border-radius: 2px;
}
</style>
