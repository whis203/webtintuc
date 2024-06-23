<script>

import { RouterLink, RouterView } from 'vue-router';
import EmployeeService from './services/employeeService';
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      isSignIn: true,
      result: {},
      employee: {
        email: '',
        password: ''
      },
    };
  },
  computed: {
    ...mapGetters(['isLoggedIn','user']),
  },
  methods: {
    ...mapActions(['login', 'logout']),
    async loginUser() {
      try {
        // Thực hiện xác thực, ví dụ gọi API để đăng nhập
        const response = await authenticateUser(); // Hàm authenticateUser() là ví dụ, bạn cần thay thế bằng logic của bạn
        const user = response.data.user; // Lấy thông tin người dùng từ response
        await this.login(user); // Dispatch action login với user đã xác thực
      
      } catch (error) {
        console.error('Login failed:', error);
        // Xử lý thông báo lỗi đăng nhập không thành công
      }
    },
    showForm(type) {
      this.isSignIn = type === 'signin';
    },
    save() {
      EmployeeService.saveEmployee(this.employee)
        .then(response => {
          alert('Bạn đã đăng ký thành công, đăng nhập ngay!');
          this.isSignIn = true;
          this.clearForm();
        })
        .catch(error => {
          alert('Email đã được sử dụng');
        });
    },
    LoginData() {
  EmployeeService.login(this.employee)
    .then(({ data }) => {
      if (data.status) { // Kiểm tra status từ phản hồi
        this.login(data.user);
      
        
        window.location.reload();
      } else {
        alert(data.message); // Hiển thị thông báo lỗi
      }
    })
    .catch(err => {
      console.error('Lỗi:', err); // In ra lỗi chi tiết nếu có lỗi xảy ra
      alert("Đã xảy ra lỗi, vui lòng thử lại");
    });
},

    created() {
    // Kiểm tra nếu thông tin người dùng đã lưu trong localStorage
    const user = localStorage.getItem('user');
    if (user) {
      this.login(JSON.parse(user));
    }
  },
    ...mapActions(['logout']),
    handleLogout() {
      this.logout(); // Gọi hành động logout từ Vuex
      this.$router.push('/'); // Chuyển hướng đến trang đăng nhập
    },
    clearForm() {
      this.employee.email = '';
      this.employee.employeename = '';
      this.employee.password = '';
    },
  }
};
</script>
<template>
  <header >
    <nav class="navbar navbar-expand-lg navbar-light  shadow-sm p-1 mb-4 ">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-around" id="navbarNavDropdown">
    <RouterLink to="/"><img style="width: 100px;border-radius: 50%;" src="./assets/img/logo.jpg" alt=""></RouterLink>
    <ul class="navbar-nav fs-5">
      <li class="nav-item active">
        <RouterLink  class="nav-link" to="/">Trang chủ</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink  class="nav-link" to="/news">Tin tức</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink  class="nav-link" to="/show">Chương trình</RouterLink>
      </li>
    </ul>
    <div class="d-flex gap-3">
    <!-- Buttons to trigger the modal -->
    <div class="formAccount">
      <div v-if="isLoggedIn" class="profile-dropdown">
      <div class="profile-dropdown-btn">
        <span>Xin chào! </span>
        <span class="text-danger fst-italic fw-bold">{{user.employeename}}</span>
      </div>
      <ul class="profile-dropdown-list">
        <li class="profile-dropdown-list-item d-flex align-items-center">
          <RouterLink class="text-black text-decoration-none" to="/profile/account/info">
            <font-awesome-icon class="text-white" style="font-size: 15px; background: #ACD793; padding: 9px;" icon="fa-solid fa-user"/>
            <span>Thông tin người dùng</span>
          </RouterLink>
        </li>
        <li class="profile-dropdown-list-item">
          <button @click="handleLogout" class="bg-transparent rounded-4 border-0 p-0">
            <font-awesome-icon class="text-white" style="font-size: 15px; background: #ACD793; padding: 9px;" icon="fa-solid fa-sign-out"/>
            <span>Đăng xuất</span>
          </button>
        </li>
      </ul>
    </div>
    <button v-else type="button" class="bg-black px-2 py-1 rounded-4 border-0" @click="showForm('signin')" data-toggle="modal" data-target="#exampleModalCenter">
      <font-awesome-icon class="text-white" icon="fa-solid fa-user"/>
    </button>
        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content w-75 mx-auto p-3">
              <div class="modal-header">
                <h5 class="modal-title">{{ isSignIn ? 'Đăng Nhập' : 'Đăng Ký' }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body" >
                <!-- Signin Form -->
                <div v-if="isSignIn">
                  <form @submit.prevent="LoginData">
                    <div class="form-group">
                      <label for="signinEmail">Email</label>
                      <input type="email" v-model="employee.email" class="form-control" id="signinEmail">
                    </div>
                    <div class="form-group">
                      <label for="signinPassword">Mật khẩu</label>
                      <input type="password" v-model="employee.password" class="form-control" id="signinPassword">
                    </div>
                    <div style="font-size: 14px; display: flex;">
                      Bạn chưa có tài khoản?
                      <button type="button" class="text-primary border-0 bg-transparent" style="cursor: pointer;" @click="showForm('signup')">Đăng ký ngay</button>
                    </div>
                    <button type="submit" class="btn btn-danger w-100">Đăng nhập</button>
                  </form>
                </div>
                <!-- Signup Form --> 
                <div  v-else >
                  <form @submit.prevent="save">
                    <div class="form-group">
                      <label for="signupEmail">Email</label>
                      <input type="email" v-model="employee.email" class="form-control" id="signupEmail">
                    </div>
                    <div class="form-group">
                      <label for="signupUsername">Tên người dùng</label>
                      <input type="text" v-model="employee.employeename" class="form-control" id="signupUsername">
                    </div>
                    <div class="form-group">
                      <label for="signupPassword">Mật khẩu</label>
                      <input type="password" v-model="employee.password" class="form-control" id="signupPassword">
                    </div>
                    <div style="font-size: 14px; display: flex;">
                      Bạn đã có tài khoản?
                      <button type="button" class="text-primary border-0 bg-transparent" style="cursor: pointer;" @click="showForm('signin')">Đăng nhập ngay</button>
                    </div>
                    <button type="submit" class="btn btn-danger w-100">Đăng ký</button>
                  </form>
                </div>
              </div>
              <small id="emailHelp" class="form-text text-muted m-4 text-center">
                Bằng việc đăng ký tức là bạn đã đồng ý với <u>Điều khoản Dịch vụ</u> của chúng tôi và cũng như đã đọc và hiểu <u>Chính sách Bảo mật</u> của chúng tôi
              </small>
            </div>
          </div>
        </div>
        </div>
   
  </div>
</div>
    </nav>
  </header>
  <section>
   
    <RouterView/>
  </section>
  <footer class="d-flex justify-content-between align-items-center">
<div class="container d-flex justify-content-between align-items-center">
  <div class="logo">
  <img class="rounded-circle" style="width: 100px;" src="./assets/img/logo.jpg" alt="">
</div>
<div>
  <li>VỀ CHÚNG TÔI</li>
  <li>QUẢNG CÁO DOANH NGHIỆP</li>
  <li>CHÍNH SÁCH BẢO MẬT</li>
  <li>ĐIỀU KHOẢN SỬ DỤNG</li>
</div>
<div>
  <li>TIÊU CHUẨN NỘI DUNG</li>
  <li>LIÊN LẠC</li>
  <li>TUYỂN DỤNG</li>
</div>
<div class="icon fs-3 d-flex justify-content-center align-items-center bg-white rounded-5">
  <a href="https://www.youtube.com/@phamucviet1755" style="margin-right: 15px;">
    <img width="70px" src="./assets/img/youtube.jpg" alt="">
  </a>
  <a href="https://www.tiktok.com/@ducviet2003_">
    <img width="100px" src="./assets/img/tiktok.jpg" alt="">
  </a>
  <a href="https://github.com/whis203">
    <img width="100px" src="./assets/img/github.jpg" alt="">
  </a>
</div>
<div>

</div>
</div>
  </footer>
 
</template>

    
 
<style scoped>

footer {
  margin-top: 40px;
  position: relative;
  height: 400px;
  width: 100%;
  list-style: none;
  text-align: center;
  color: rgba(255, 255, 255, 0.747);
  font-weight: bold;
  font-size: 20px;

}
footer::before {
  content: "";
  background-image: url("./assets/img/footer.jpg");
  filter: brightness(30%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Đặt z-index để nó nằm phía sau các thành phần khác */
}
.actives{
  background-color: #c8102e;
  border-radius: 5px;
  color: white;
}
.tags li{
  padding: 15px 40px;
  font-size: 20px;
}
.col img{
  border-radius: 10px;
  margin: 50px 0px;
}
.col p{
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-right: 40px;
}
.banner2 {
  position: relative;
  height: auto;
  width: 100%;
}
.banner2::before {
  content: "";
  background-image: url("./assets/img/banner2.jpg");
  filter: brightness(30%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Đặt z-index để nó nằm phía sau các thành phần khác */
}
ul {
  list-style: none;
  text-decoration: none;
}
.profile-dropdown-list{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 20px 10px;
  margin-top: 20px;
  display: none;
  position: absolute;
  z-index: 99;
  background-color: white;
  width: 220px;
  
}

.profile-dropdown-list-item:first-child:before{
  content: "";
  position: absolute;
  left: 2rem;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
  transform: translateY(-400%);
  transition: border-color 0.2s linear ;
}

.profile-dropdown-list-item:hover{
  background-color: #f7f7f7;
  border-radius: 3px;
}
.profile-dropdown-list::before{
  content: "";
  width: 170px;
  height: 3rem;
  position: absolute;
  right: 0;
  left: 0;
  transform: translateY(-100%)
  
}
.profile-dropdown-list-item span{
 padding: 15px;
}
.profile-dropdown{
 position: relative;
 cursor: pointer;
}
.profile-dropdown:hover .profile-dropdown-list{
  display: block;
  
}
 .title-h2 {
            position: relative;
            display: inline-block;
            font-size: 24px;
            margin-bottom: 20px;
        }
        .title-h2::after {
            content: "";
            display: inline-block;
            width: 700px; /* Chiều dài của đường thẳng */
            height: 4px; /* Chiều cao của đường thẳng */
            background-color: red; /* Màu nền đỏ */
            margin-left: 10px; /* Khoảng cách từ chữ đến đường thẳng */
            vertical-align: middle; /* Căn giữa theo chiều dọc với chữ */
        }
       
</style>
