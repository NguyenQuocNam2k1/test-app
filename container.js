const header = document.getElementById("header");
const footer = document.getElementById("footer")
if(header){
    header.innerHTML = '<div class="container-md" data-aos="fade-down" data-aos-duration="2000">\n'+
    '        <a class="navbar-brand" href="http://127.0.0.1:5500/home/home.html">\n'+
    '          <img src="../image/logo.png" alt="logo.svg" class="header_logo" />\n'+
    '        </a>\n'+
    '        <button\n'+
    '          class="navbar-toggler"\n'+
    '          type="button"\n'+
    '          data-bs-toggle="collapse"\n'+
    '          data-bs-target="#navbarSupportedContent"\n'+
    '          aria-controls="navbarSupportedContent"\n'+
    '          aria-expanded="false"\n'+
    '          aria-label="Toggle navigation"\n'+
    '        >\n'+
    '          <span class="navbar-toggler-icon"></span>\n'+
    '        </button>\n'+
    '        <div class="collapse navbar-collapse" id="navbarSupportedContent">\n'+
    '          <ul class="navbar-nav me-auto mb-2 mb-lg-0">\n'+
    '            <li class="nav-item">\n'+
    '              <a\n'+
    '                class="nav-link active text_header"\n'+
    '                aria-current="page"\n'+
    '                href="http://127.0.0.1:5500/home/home.html"\n'+
    '                >TRANG CHỦ</a\n'+
    '              >\n'+
    '            </li>\n'+
    '            <li class="nav-item text_header">\n'+
    '              <a class="nav-link text_header" href="http://127.0.0.1:5500/similar/similar.html">TIN TỨC</a>\n'+
    '            </li>\n'+
    '            <li class="nav-item dropdown">\n'+
    '              <a\n'+
    '                class="nav-link dropdown-toggle text_header"\n'+
    '                href="#"\n'+
    '                id="navbarDropdown"\n'+
    '                role="button"\n'+
    '                data-bs-toggle="dropdown"\n'+
    '                aria-expanded="false"\n'+
    '              >\n'+
    '                GIỚI THIỆU\n'+
    '              </a>\n'+
    '              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">\n'+
    '                <li>\n'+
    '                  <a class="dropdown-item" href="http://127.0.0.1:5500/reviewUs/reviewUs.html">Tổng quan về công ty</a>\n'+
    '                </li>\n'+
    '                <li><a class="dropdown-item" href="http://127.0.0.1:5500/contact/contact.html">Liên hệ</a></li>\n'+
    '              </ul>\n'+
    '            </li>\n'+
    '            <li class="nav-item dropdown">\n'+
    '              <a\n'+
    '                class="nav-link dropdown-toggle text_header"\n'+
    '                href="#"\n'+
    '                id="navbarDropdown"\n'+
    '                role="button"\n'+
    '                data-bs-toggle="dropdown"\n'+
    '                aria-expanded="false"\n'+
    '              >\n'+
    '                TOUR\n'+
    '              </a>\n'+
    '              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">\n'+
    '                <li>\n'+
    '                  <a\n'+
    '                    class="dropdown-item"\n'+
    '                    href="http://127.0.0.1:5500/category_tour/category_tour.html"\n'+
    '                    >Du lịch nước ngoài</a\n'+
    '                  >\n'+
    '                </li>\n'+
    '                <li>\n'+
    '                  <a\n'+
    '                    class="dropdown-item"\n'+
    '                    href="http://127.0.0.1:5500/category_tour/category_tour.html"\n'+
    '                    >Du lịch trong nước</a\n'+
    '                  >\n'+
    '                </li>\n'+
    '              </ul>\n'+
    '            </li>\n'+
    '          </ul>\n'+
    '          <form class="d-flex">\n'+
    '            <input\n'+
    '              class="form-control me-2"\n'+
    '              type="search"\n'+
    '              placeholder="Search"\n'+
    '              aria-label="Search"\n'+
    '            />\n'+
    '            <button\n'+
    '              class="btn btn-success btn-header-search"\n'+
    '              type="submit"\n'+
    '              style="margin-right: 1rem;"\n'+
    '            >\n'+
    '              Search\n'+
    '            </button>\n'+
    '          </form>\n'+
    '          <a\n'+
    '            href="http://127.0.0.1:5500/login/login.html"\n'+
    '            type="button"\n'+
    '            class="btn btn-warning btn-header-login"\n'+
    '            >Đăng ký</a\n'+
    '          >\n'+
    '        </div>\n'+
    '      </div>';
}

if(footer){
    footer.innerHTML = ' <div class="container pt-3">\n'+
    '        <div class="row justify-content-around">\n'+
    '          <div class="col-12 col-lg-5 col-sm-12">\n'+
    '            <h2 class="title_footer">LIÊN HỆ VỚI TRAVELMART</h2>\n'+
    '            <ul class="list_contact" >\n'+
    '              <li class="list_contact_item"><i class="bi bi-geo-alt-fill"></i> LIÊN HỆ VỚI VIETNAMTRAVEL\n'+
    '                BT8 - M2, Khu đô thị Dương Nội, Q.Hà Đông, Thủ đô Hà Nội</li>\n'+
    '              <li class="list_contact_item"><i class="bi bi-telephone-fill"></i> (0913) 073 - 026 ; (0243) 998 9676</li>\n'+
    '              <li class="list_contact_item"><i class="bi bi-mic-fill"></i> Fax: (024) 3312 0411</li>\n'+
    '              <li class="list_contact_item"><i class="bi bi-envelope"></i> vietnamtravel1234@gmail.com</li>\n'+
    '            </ul>\n'+
    '          </div>\n'+
    '          <div class="col-12 col-lg-5 col-sm-12">\n'+
    '            <div class="row">\n'+
    '              <h2 class="title_footer">VĂN PHÒNG</h2>\n'+
    '              <div class="col-12 col-sm-12 col-lg-6">\n'+
    '                <ul class="list_contact" >\n'+
    '                  <li class="list_contact_item"><i class="bi bi-geo-alt-fill"></i> LIÊN HỆ VỚI VIETNAMTRAVEL\n'+
    '                    BT8 - M2, Khu đô thị Dương Nội, Q.Hà Đông, Thủ đô Hà Nội</li>\n'+
    '                  <li class="list_contact_item"><i class="bi bi-telephone-fill"></i> (0913) 073 - 026 ; (0243) 998 9676</li>\n'+
    '                  <li class="list_contact_item"><i class="bi bi-mic-fill"></i> Fax: (024) 3312 0411</li>\n'+
    '                  <li class="list_contact_item"><i class="bi bi-envelope"></i> vietnamtravel1234@gmail.com</li>\n'+
    '                </ul>\n'+
    '              </div>\n'+
    '              <div class="col-12 col-sm-12 col-lg-6">\n'+
    '                <ul class="list_contact" >\n'+
    '                  <li class="list_contact_item"><i class="bi bi-geo-alt-fill"></i> LIÊN HỆ VỚI VIETNAMTRAVEL\n'+
    '                    BT8 - M2, Khu đô thị Dương Nội, Q.Hà Đông, Thủ đô Hà Nội</li>\n'+
    '                  <li class="list_contact_item"><i class="bi bi-telephone-fill"></i> (0913) 073 - 026 ; (0243) 998 9676</li>\n'+
    '                  <li class="list_contact_item"><i class="bi bi-mic-fill"></i> Fax: (024) 3312 0411</li>\n'+
    '                  <li class="list_contact_item"><i class="bi bi-envelope"></i> vietnamtravel1234@gmail.com</li>\n'+
    '                </ul>\n'+
    '              </div>\n'+
    '            </div>\n'+
    '          </div>\n'+
    '          <div class="col-lg-2 col-sm-12 image_footer">\n'+
    '            <h2 class="title_footer_right">KẾT NỐI VỚI CHÚNG TÔI</h2>\n'+
    '            <a href="https://www.facebook.com/nguyenquoc.nam.2k1">\n'+
    '              <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/187426529_3617840175108305_8223619833176045930_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RVj1v8hbdbEAX_-tJhF&_nc_ht=scontent.fhan3-1.fna&oh=00_AT99_Z5Pn2vWQZZLyD1Uy41s05dnTFCd38b_KJrnhghb8A&oe=6262F5B7"\n'+
    '              style="width:100%; height: 60%;" \n'+
    '              alt="avatar"/>\n'+
    '            </a>\n'+
    '          </div>\n'+
    '        </div>\n'+
    '      </div>';
}