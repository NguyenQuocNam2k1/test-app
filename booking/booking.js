const form = document.getElementById("form_booking");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const nameTour = document.getElementById("nameTour");
const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("checkOut");
const modal = document.querySelector(".modal_booking");
const numberUser = document.getElementById("numberUser");

// localStorage.setItem("user",JSON.stringify([]));
const user = JSON.parse(localStorage.getItem("user"));
// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
//   formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
	const formControl = input.parentElement
  const small = formControl.querySelector('small')
	small.innerText = ''
}

//Show modal
function showModal(){
  modal.classList.add("modal_booking_show");
  const name = username.value;
  modal.innerHTML = '<div class="modal_booking_header"></div>\n'+
  '      <div class="modal_booking_item">\n'+
  '        <p style="margin-bottom: 0;\n'+
  '        font-size: 1.2rem;\n'+
  '        font-weight: 600;\n'+
  '        text-align: center;\n'+
  '        margin-top: 1rem;">XÁC NHẬN THÔNG TIN</p>\n'+
  '        <form class="row">\n'+
  '          <div class="form-group col-md-6">\n'+
  '            <label for="formGroupExampleInput">Họ và tên</label>\n'+
  `            <div style="border: 1px solid #ced4da;height: 38px;color: #6C757D;background-color: #e9ecef;border-radius: 4px;align-items: center;padding: 6px 12px;">${name.toString()}</div>\n`+
  '          </div>\n'+
  '          <div class="form-group col-md-6">\n'+
  '            <label for="formGroupExampleInput">Số người đăng ký</label>\n'+
  `            <input type="text" class="form-control" id="formGroupExampleInput" placeholder=${numberUser.value} disabled>\n`+
  '          </div>\n'+
  '          <div class="form-group col-md-6">\n'+
  '            <label for="formGroupExampleInput2">Email</label>\n'+
  `            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder=${email.value} disabled>\n`+
  '          </div>\n'+
  '          <div class="form-group col-md-6">\n'+
  '            <label for="formGroupExampleInput2">Số điện thoại</label>\n'+
  `            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder=${phoneNumber.value} disabled>\n`+
  '          </div>\n'+
  '          <div class="form-group">\n'+
  '            <label for="formGroupExampleInput2">Tên tour</label>\n'+
  `            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder=${nameTour.value} disabled>\n`+
  '          </div>\n'+
  '          <div class="form-group col-md-6">\n'+
  '            <label for="formGroupExampleInput2">Ngày đi</label>\n'+
  `            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder=${checkIn.value} disabled>\n`+
  '          </div>\n'+
  '          <div class="form-group col-md-6">\n'+
  '            <label for="formGroupExampleInput2">Ngày về</label>\n'+
  `            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder=${checkOut.value} disabled>\n`+
  '          </div>\n'+
  '          <div style="position: relative;" class="mt-2 mb-2">\n'+
  '            <div class="btn-group mr-2" style="right: 10px; position: absolute; " role="group" aria-label="Basic mixed styles example">\n'+
  '              <button type="button" id="button_auth_clear" class="btn btn-danger" style="width: 80px">Hủy</button>\n'+
  '              <button type="button" id="liveToastBtn" class="btn btn-success">Xác nhận</button>\n'+
  '            </div>\n'+
  '          </div>\n'+
  '        </form>\n'+
  '      </div>';
  const clear = document.getElementById("button_auth_clear");
  var toastTrigger = document.getElementById('liveToastBtn')
  var toastLiveExample = document.getElementById('liveToast')
  clear.addEventListener("click", function(e){
    modal.classList.remove("modal_booking_show");
  });
  if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
      var toast = new bootstrap.Toast(toastLiveExample)
    modal.classList.remove("modal_booking_show");
      toast.show();
    })
  }
}



// Check email is valid
function checkEmail(input) {
  let flag = true;
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    flag = false;
  } else {
    showError(input, "Email không hợp lệ");
  }
  return flag;
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} là trường bắt buộc`);
      isRequired = true;
    }else{
        showSuccess(input);
    }
  });

  return isRequired;
}

// Check input length
function checkLength(input, number) {
  if (input.value.length < number) {
    showError(input, `Số điện thoại không hợp lệ`);
  } else {
    showSuccess(input);
  }
}


// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!checkRequired([username, email, phoneNumber, nameTour, checkIn , checkOut, numberUser])) {
          checkLength(phoneNumber, 9);
          if(!checkEmail(email)){
            showModal();
          }
  }
});


