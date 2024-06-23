<script>
import { mapGetters } from 'vuex';
import EmployeeService from '@/services/employeeService';

export default {
  computed: {
    ...mapGetters(['user'])
  },
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
  },
  methods: {
    changePassword() {
      if (this.newPassword !== this.confirmPassword) {
        alert('Mật khẩu mới và xác nhận mật khẩu không khớp.');
        return;
      }
      
      EmployeeService.changePassword({
        email: this.$store.state.user.email,
        currentPassword: this.currentPassword,
        newPassword: this.newPassword
      })
      .then(response => {
        alert(response.data); 
        window.location.reload();
      })
      .catch(error => {
        console.error('Lỗi:', error); // In ra lỗi chi tiết nếu có lỗi xảy ra
        alert('Đổi mật khẩu thất bại.');
      });
    }
  }
};
</script>
<template>
    <div class=" bg-white p-5 container">
      <div>
        <p class="fw-bold fs-4">Đổi mật khẩu</p>
        <span>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
      </div>
      <hr>
      <div class="profile-show d-flex justify-content-between">
        <form   @submit.prevent="changePassword">
    <div class=" ">    
      <input style="width: 200%;" type="password" class="form-control" id="validationCustom01" placeholder="Mật khẩu cũ" v-model="currentPassword" required>
    </div>
    <div class="">
     <input style="width: 200%;" type="password" class="form-control" id="validationCustom01" placeholder="Mật khảu mới" v-model="newPassword" required>
   </div>
  <div class="">
      <input style="width: 200%;" type="password" class="form-control" id="validationCustom01" placeholder="Nhập lại mật khẩu mới" v-model="confirmPassword" required>
    </div>
            <button class="btn btn-danger rounded-1 px-4" type="submit">Lưu</button>
    </form>
      </div>
    </div>
</template>

<style scoped>
label{
  width: 100%;
}
input{
 margin: 25px 0px;
 border: 1px solid rgb(233, 233, 233);
 border-radius: 2px;

}
</style>