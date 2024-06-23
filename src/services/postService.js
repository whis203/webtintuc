import axios from "axios";

const API_URL = "http://localhost:5454/api/v1/post";

class PostService {
  savePost(post) {
    // Corrected method name
    return axios.post(`${API_URL}/save`, post);
  }
  getAllPost() {
    // Corrected method name and removed parameter
    return axios.get(`${API_URL}/getAllPost`);
  }
  getPostsByUserId(userid) {
    // Corrected method name and removed parameter
    return axios.get(`${API_URL}/post/${userid}`);
  }
  updatePost(post) {
    return axios.put(`${API_URL}/update`, post);
  }
  deletePost(id) {
    return axios.delete(`${API_URL}/delete/${id}`);
  }
  getPostDetail(postid) {
    // Corrected method name and removed parameter
    return axios.get(`${API_URL}/detail/${postid}`);
  }
  getPostsByCategory(category) {
    return axios.get(`${API_URL}/category/${category}`);
  }
}

export default new PostService();
