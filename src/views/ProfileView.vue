<script>

import { RouterLink, RouterView } from 'vue-router';
import PostService from '../services/postService';
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['user'])
  },
  data() {
    return {
      post: {
        posttitle: '',
        image: '',
        content: '',
        userid: ''
      },
    };
  },
  methods: {
    save() {
      this.post.userid = this.user.employeeid;  // Ensure the userid is set from the Vuex store
      PostService.savePost(this.post)
        .then(response => {
          alert('Bạn đã đăng bài thành công!');
          this.$emit('postCreated', response.data);
          window.location.reload();
        })
        .catch(error => {
          alert('Đăng bài thất bại: ' + error.message);
        });
    },
  }
};
</script>

<template>
  <section class="container gap-5 d-flex justify-content-center">
  <div style="width: 150px;">
      <div class="d-flex gap-3 align-items-center">
         
          <div>
            <span class="fw-bold">{{user.employeename}}</span>
            <button type="button" class="bg-black text-white px-4 rounded-2 border-0"  data-toggle="modal" data-target="#exampleModalCenter1">
              Đăng bài 
              </button>
              <div class="modal fade " id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered "  role="document">
                  <div class="modal-content w-100 mx-auto p-3" >
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">Đăng bài viết</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form @submit.prevent="save">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Tiêu đề</label>
                          <input type="text" class="form-control" v-model="post.posttitle" >
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Nội dung</label>
                          <textarea type="text" class="form-control" v-model="post.content" rows="5"></textarea>
                        </div>
                        <label for="exampleInputPassword1">Thể loại</label>
                        <select class="form-select"  v-model="post.category">
                          
                          <option value="game">Game</option>
                          <option value="giaitri">Giải Trí</option>
                          <option value="sport">Thể Thao</option>
                        </select>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Ảnh (địa chỉ hình ảnh)</label>
                          <input type="text" class="form-control" v-model="post.image" >
                        </div>
                        <input type="hidden" v-model="post.userid">
                        <button type="submit" class="btn btn-danger w-100">Đăng bài</button>
                      </form>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
      <hr>
      <div class="mt-5 ">
      <RouterLink class="text-black text-decoration-none" to="/profile/account/info"><font-awesome-icon class="text-primary" icon="fa-solid fa-user" />  Tài khoản của tôi</RouterLink>
      <br><br>
      <RouterLink class="text-black text-decoration-none" to="/profile/account/post"><font-awesome-icon class="text-success" icon="fa-solid fa-upload" />  Bài đăng của tôi</RouterLink>
      <br><br>
      <RouterLink class="text-black text-decoration-none" to="/profile/account/changePassword"><font-awesome-icon class="text-danger" icon="fa-solid fa-key" />  Đổi mật khẩu</RouterLink>
      </div>
  </div>
  <div class=" bg-white p-5 container">
    <RouterView/>
  </div>

</section>

</template>

<style scoped>
label{
  width: 100%;
}
input{
 
 border: 1px solid rgb(233, 233, 233);
 border-radius: 5px;

}

</style>