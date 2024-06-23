<script>
import { mapGetters } from 'vuex';
import EmployeeService from '@/services/employeeService';

export default {
  computed: {
    ...mapGetters(['user'])
  },
  data() {
    return {
      editUser: {} // Khai báo editUser rỗng ban đầu
    };
  },
  mounted() {
    // Sao chép dữ liệu từ user vào editUser khi component được mount
    this.editUser = { ...this.user };
  },
  methods: {
    updateUser() {
      EmployeeService.updateEmployee(this.editUser)
        .then(response => {
          if (response.status === 200) { // Kiểm tra mã trạng thái HTTP
            alert(response.data); // Hiển thị thông báo thành công từ server
            this.$store.dispatch('updateUser', this.editUser); // Cập nhật Vuex sau khi lưu thành công
          } else {
            alert('Cập nhật thất bại');
          }
        })
        .catch(error => {
          console.error('Lỗi:', error); // In ra lỗi chi tiết nếu có lỗi xảy ra
          alert('Cập nhật thất bại');
        });
    }
  }
};
</script>

<template>
 <div class=" bg-white p-5 container">
    <div>
      <p class="fw-bold fs-4">Hồ Sơ Của Tôi</p>
      <span>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
    </div>
    <hr>
    <div v-if="user" class="profile-show d-flex justify-content-between">
      <form class="needs-validation " @submit.prevent="updateUser">
          <div class="">    
            <input style="width: 200%;" type="text" class="form-control" id="validationCustom01" placeholder="Họ và tên" v-model="editUser.employeename" required>
          </div>
        <div class="">
            <input style="width: 200%;" type="text" class="form-control" id="validationCustom01" placeholder="Email" v-model="editUser.email" disabled>
          </div>
          <div class="">
            <input style="width: 200%;" type="text" class="form-control" id="validationCustom01" placeholder="Số điện thoại" v-model="editUser.phone" required>
          </div>
          <div class="">
            <input style="width: 200%;" type="text" class="form-control" id="validationCustom01" placeholder="Địa chỉ" v-model="editUser.address" required>
          </div>
        <button class="btn btn-danger rounded-1 px-4" type="submit">Cập nhật</button>
    </form>
    <div class="d-flex flex-column justify-content-center align-items-center border-left p-4">
      <img class="rounded-circle" style="width: 200px;" src="../assets/img/logo.jpg" alt="">
      <input style="width: 75px;" type="file" >
      <p class="text-black-50">Dụng lượng file tối đa 1 MB <br>
        Định dạng:.JPEG, .PNG</p>
    </div>
    </div>
  </div>
<RouterView/>
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