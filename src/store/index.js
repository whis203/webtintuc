import { createStore } from "vuex";

const store = createStore({
  state: {
    user: JSON.parse(localStorage.getItem("user")) || {
      employeename: "",
      email: "",
      phone: "",
      address: "",
    },
    isLoggedIn: !!localStorage.getItem("user"),
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      state.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(user)); // Lưu trạng thái vào localStorage
    },
    LOGOUT(state) {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("user"); // Xóa trạng thái khỏi localStorage
    },
    UPDATE_USER(state, user) {
      state.user = { ...state.user, ...user };
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
  actions: {
    login({ commit }, user) {
      commit("SET_USER", user);
    },
    logout({ commit }) {
      commit("LOGOUT");
    },
    updateUser({ commit }, user) {
      commit("UPDATE_USER", user);
    },
  },
  getters: {
    user: (state) => state.user,
    isLoggedIn: (state) => state.isLoggedIn,
  },
});

export default store;
