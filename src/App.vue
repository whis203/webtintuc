<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light shadow-sm p-3 mb-5">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-around" id="navbarNavDropdown">
    <RouterLink to="/"><img style="width: 100px;" src="./assets/img/logo.jpg" alt=""></RouterLink>
    <ul class="navbar-nav fs-5">
      <li class="nav-item active">
        <RouterLink  class="nav-link" to="/">Trang chủ</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink  class="nav-link" to="/about">Tin tức</RouterLink>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Chương trình</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Thêm
        </a>
        <div class="dropdown-menu"  aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Giải trí</a>
          <a class="dropdown-item" href="#">Trò chơi</a>
          <a class="dropdown-item" href="#">VC</a>
        </div>
      </li>
    </ul>
    <div class="login ">
          <button type="button" class="bg-black text-white px-2 py-1 rounded-4 me-2 border-0"  >
            <font-awesome-icon icon="fa-solid fa-search" />
          </button>
          <button type="button" class="bg-black text-white px-2 py-1 rounded-4 border-0"  data-toggle="modal" data-target="#exampleModalCenter">
            <font-awesome-icon icon="fa-solid fa-user" />
          </button>
          <div class="modal fade " id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered " role="document">
              <div class="modal-content w-75 mx-auto p-3">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Đăng Nhập</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email hoặc Tên người dùng</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" >
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Mật khẩu</label>
                      <input type="password" class="form-control" id="exampleInputPassword1" >
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                      <label class="form-check-label" for="exampleCheck1">Ghi nhớ đăng nhập</label>
                    </div>
                    <button type="submit" class="btn btn-danger w-100">Đăng nhập</button>
                  </form>
                </div>
                <small id="emailHelp" class="form-text text-muted m-4 text-center">Bằng việc đăng ký tức là bạn đã đồng ý với <u>Điều khoản Dịch vụ</u> của chúng tôi và cũng như đã đọc và hiểu <u>Chính sách Bảo mật</u> của chúng tôi</small>
              </div>
            </div>
        </div>
  </div>
</div>
</nav>
  </header>
  <div class="banner container" >
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" style="height: 600px;" src="./assets/img/baner.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" style="height: 600px;" src="./assets/img/baner.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" style="height: 600px;" src="./assets/img/baner.jpg" alt="Third slide">
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
  <div class="container my-5 d-flex gap-3">
    <div>

      <div class="tinhot">
      <div class="title">
        <h2 class="title-h2 fw-bold">TIN HOT</h2>
        <div class="content-top d-flex">
          <img class="w-25" src="./assets/img/baner.jpg" alt="">
          <div class="mx-3">
            <h3>Vừa ra game Disorder, NetEase đã bị gán mác “đạo nhái” Apex Legends Mobile (sản phẩm của tương lai)</h3>
            <p>Musou Far Musou Good.</p>
            <span>24/04/2019, 03:38</span>
          </div>
        </div>
        <div class="content-bottom d-flex flex-wrap gap-3 justify-content-between my-5">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
              <a href="#" class="btn btn-primary">24/04/2019, 03:36</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
              <a href="#" class="btn btn-primary">24/04/2019, 03:36</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
              <a href="#" class="btn btn-primary">24/04/2019, 03:36</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tinhot">
      <div class="title">
        <h2 class="title-h2 fw-bold">TIN TỨC NỔI BẬT</h2>
        <div class="content-top d-flex">
          <img class="w-25" src="./assets/img/baner.jpg" alt="">
          <div class="mx-3">
            <h3>Vừa ra game Disorder, NetEase đã bị gán mác “đạo nhái” Apex Legends Mobile (sản phẩm của tương lai)</h3>
            <p>Musou Far Musou Good.</p>
            <span>24/04/2019, 03:38</span>
          </div>
        </div>
        <div class="content-bottom d-flex flex-wrap gap-3 justify-content-between my-5">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
              <a href="#" class="btn btn-primary">24/04/2019, 03:36</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
              <a href="#" class="btn btn-primary">24/04/2019, 03:36</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
              <a href="#" class="btn btn-primary">24/04/2019, 03:36</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tinhot">
      <div class="title">
        <h2 class="title-h2 fw-bold">GAME ONLINE</h2>
        <div class="content-top d-flex">
          <img class="w-25" src="./assets/img/baner.jpg" alt="">
          <div class="mx-3">
            <h3>Vừa ra game Disorder, NetEase đã bị gán mác “đạo nhái” Apex Legends Mobile (sản phẩm của tương lai)</h3>
            <p>Musou Far Musou Good.</p>
            <span>24/04/2019, 03:38</span>
          </div>
        </div>
        <div class="content-bottom d-flex flex-wrap gap-3 justify-content-between my-5">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
              <a href="#" class="btn btn-primary">24/04/2019, 03:36</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
              <a href="#" class="btn btn-primary">24/04/2019, 03:36</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
              <a href="#" class="btn btn-primary">24/04/2019, 03:36</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tinhot">
      <div class="title">
        <h2 class="title-h2 fw-bold">GAME MOBILE</h2>
        <div class="content-top d-flex">
          <img class="w-25" src="./assets/img/baner.jpg" alt="">
          <div class="mx-3">
            <h3>Vừa ra game Disorder, NetEase đã bị gán mác “đạo nhái” Apex Legends Mobile (sản phẩm của tương lai)</h3>
            <p>Musou Far Musou Good.</p>
            <span>24/04/2019, 03:38</span>
          </div>
        </div>
        <div class="content-bottom d-flex flex-wrap gap-3 justify-content-between my-5">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
              <a href="#" class="btn btn-primary">24/04/2019, 03:36</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
              <a href="#" class="btn btn-primary">24/04/2019, 03:36</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
              <a href="#" class="btn btn-primary">24/04/2019, 03:36</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tinhot">
      <div class="title">
        <h2 class="title-h2 fw-bold">PC/CONSOLE</h2>
        <div class="content-top d-flex">
          <img class="w-25" src="./assets/img/baner.jpg" alt="">
          <div class="mx-3">
            <h3>Vừa ra game Disorder, NetEase đã bị gán mác “đạo nhái” Apex Legends Mobile (sản phẩm của tương lai)</h3>
            <p>Musou Far Musou Good.</p>
            <span>24/04/2019, 03:38</span>
          </div>
        </div>
        <div class="content-bottom d-flex flex-wrap gap-3 justify-content-between my-5">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
              <a href="#" class="btn btn-primary">24/04/2019, 03:36</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
              <a href="#" class="btn btn-primary">24/04/2019, 03:36</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
              <a href="#" class="btn btn-primary">24/04/2019, 03:36</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tinhot">
      <div class="title">
        <h2 class="title-h2 fw-bold">PHIM ẢNH</h2>
        <div class="content-top d-flex">
          <img class="w-25" src="./assets/img/baner.jpg" alt="">
          <div class="mx-3">
            <h3>Vừa ra game Disorder, NetEase đã bị gán mác “đạo nhái” Apex Legends Mobile (sản phẩm của tương lai)</h3>
            <p>Musou Far Musou Good.</p>
            <span>24/04/2019, 03:38</span>
          </div>
        </div>
        <div class="content-bottom d-flex flex-wrap gap-3 justify-content-between my-5">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
              <a href="#" class="btn btn-primary">24/04/2019, 03:36</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
              <a href="#" class="btn btn-primary">24/04/2019, 03:36</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
              <a href="#" class="btn btn-primary">24/04/2019, 03:36</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="p-2 rounded-4">
      <p class="box-1 position-sticky top-0">
      <h2 >XEM NHIỀU</h2>
      <p>Bí kíp vượt các mốc level trong Tân Thiên Long Mobile</p>
      <hr>
      <p>Shroud vô cùng tức giận khi quay lại chơi PUBG</p>
      <hr>
      <p>Apex Legends: Lý giải nguyên nhân ngôi sao sáng làng Battle Royale lao đầu xuống dốc</p>
      <hr>
      <p>PUBG Mobile: Hướng dẫn đổi nón lá và áo dài hoàn toàn Free</p>
      <hr>
      <p>Saint Seiya: Galaxy Spirits – Game Áo Giáp Vàng chính chủ Toei Animation và Masami Kurumada</p>
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
        <img style="width: 250px;" src="./assets/img/Game-Scoop_iTunes-profile-picture-737x414.jpg" alt="">
        <p>PHÁ ĐẢO</p>
        </div>
        <div class="col">
        <img style="width: 250px;" src="./assets/img/NVC-737x414.jpg" alt="">
        <p>MỞ KHOÁ</p>
        </div>
        <div class="col">
        <img style="width: 250px;" src="./assets/img/Beyond_itunes_profile2-737x414.jpg" alt="">
        <p>ĐOẠT CUP</p>
        </div>
        <div class="col">
        <img style="width: 250px;" src="./assets/img/Unlocked_itunes-737x414.jpg" alt="">
        <p>NINTERDER</p>
        </div>
    </div>
  </div>
  <div class="newtin container my-5 ">
    <h1 class="fw-bold fs-2">
      TIN MỚI NHẤT
    </h1>
  <div class="tags my-5">
    <ul style="list-style: none;" class="d-flex justify-content-center align-items-center gap-4 flex-wrap text-black-50 ">
      <li class="actives"><font-awesome-icon icon="fa-solid fa-circle-down" /> Mới nhất</li>
      <li><font-awesome-icon icon="fa-solid fa-gamepad" /> Trò chơi</li>
      <li><font-awesome-icon icon="fa-solid fa-dice" /> Playstaion</li>
      <li><font-awesome-icon icon="fa-solid fa-naira-sign" /> Nintendo</li>
      <li><font-awesome-icon icon="fa-solid fa-xmark" /> Xbox</li>
      <li><font-awesome-icon icon="fa-solid fa-computer-mouse" /> PC</li>
      <li><font-awesome-icon icon="fa-solid fa-ticket" /> Phim điện ảnh</li>
      <li><font-awesome-icon icon="fa-solid fa-tv" /> Phim truyền hình</li>
      <li><font-awesome-icon icon="fa-solid fa-book" /> Truyện tranh</li>
      <li><font-awesome-icon icon="fa-solid fa-clipboard" /> Nihon</li>
      <li><font-awesome-icon icon="fa-solid fa-mobile" /> Công nghệ</li>
    </ul>
  </div>
  </div>
  <div class="container d-flex flex-wrap gap-5 justify-content-center" >
    <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
            </div>
      </div>
      <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
            </div>
      </div>
      <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
            </div>
      </div>
      <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
            </div>
      </div>
      <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
            </div>
      </div>
      <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
            </div>
      </div>
      <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
            </div>
      </div>
      <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
            </div>
      </div>
      <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
            </div>
      </div>
      <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
            </div>
      </div>
      <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
            </div>
      </div>
      <div class="card" style="width: 20rem;">
            <img class="card-img-top" src="./assets/img/baner.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Tencent sắp sản xuất riêng điện thoại chơi PUBG Mobile và Vương Giả Vinh Diệu?</h5>
              <p class="card-text">Musou Far Musou Good.</p>
            </div>
      </div>
  </div>
 <div class="container d-flex justify-content-center">
  <a href="#" class="btn btn-danger   my-4 p-2 px-5">Xem thêm</a>
 </div>
  <footer class="d-flex justify-content-between align-items-center">
<div class="container d-flex justify-content-between align-items-center">
  <div class="logo">
  <img style="width: 100px;" src="./assets/img/logo.jpg" alt="">
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
<div class="icon fs-3">
  <font-awesome-icon class="mx-4" icon="fa-solid fa-envelope" />
  <font-awesome-icon icon="fa-solid fa-comment" />
</div>
<div>

</div>
</div>
  </footer>
  <!-- <RouterView/> -->
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
