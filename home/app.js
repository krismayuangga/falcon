const html = document.documentElement;
const body = document.body;
const menuLinks = document.querySelectorAll(".admin-menu a");
const collapseBtn = document.querySelector(".admin-menu .collapse-btn");
const toggleMobileMenu = document.querySelector(".toggle-mob-menu");
const switchInput = document.querySelector(".switch input");
const switchLabel = document.querySelector(".switch label");
const switchLabelText = switchLabel.querySelector("span:last-child");
const collapsedClass = "collapsed";
const lightModeClass = "light-mode";

/*TOGGLE HEADER STATE*/
collapseBtn.addEventListener("click", function () {
  body.classList.toggle(collapsedClass);
  this.getAttribute("aria-expanded") == "true"
    ? this.setAttribute("aria-expanded", "false")
    : this.setAttribute("aria-expanded", "true");
  this.getAttribute("aria-label") == "collapse menu"
    ? this.setAttribute("aria-label", "expand menu")
    : this.setAttribute("aria-label", "collapse menu");
});

/*TOGGLE MOBILE MENU*/
toggleMobileMenu.addEventListener("click", function () {
  body.classList.toggle("mob-menu-opened");
  this.getAttribute("aria-expanded") == "true"
    ? this.setAttribute("aria-expanded", "false")
    : this.setAttribute("aria-expanded", "true");
  this.getAttribute("aria-label") == "open menu"
    ? this.setAttribute("aria-label", "close menu")
    : this.setAttribute("aria-label", "open menu");
});

/*SHOW TOOLTIP ON MENU LINK HOVER*/
for (const link of menuLinks) {
  link.addEventListener("mouseenter", function () {
    if (
      body.classList.contains(collapsedClass) &&
      window.matchMedia("(min-width: 768px)").matches
    ) {
      const tooltip = this.querySelector("span").textContent;
      this.setAttribute("title", tooltip);
    } else {
      this.removeAttribute("title");
    }
  });
}

/*TOGGLE LIGHT/DARK MODE*/
if (localStorage.getItem("dark-mode") === "false") {
  html.classList.add(lightModeClass);
  switchInput.checked = false;
  switchLabelText.textContent = "Light";
}

switchInput.addEventListener("input", function () {
  html.classList.toggle(lightModeClass);
  if (html.classList.contains(lightModeClass)) {
    switchLabelText.textContent = "Light";
    localStorage.setItem("dark-mode", "false");
  } else {
    switchLabelText.textContent = "Dark";
    localStorage.setItem("dark-mode", "true");
  }
});


function getCookie(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}





$(document).ready(function () {



  var list_html = '';

  const params = new URLSearchParams(getCookie('Token_List'))

  if (params.get(`token${1}`)) {

    for (i = 1; i < 10; i++) {
      if (params.has(`acct${i}`)) {
        list_html += ` <li onclick="login_s('${params.get(`token${i}`)}')" style="margin-bottom: 0">
                      <a href="#0">
                        <svg>
                      <use xlink:href="#pages"></use>
                      </svg>
                   <span>${params.get(`acct${i}`)} -  ${params.get(`cur${i}`)}</span>
                  </a>
                  </li>`

      }
    }


    authT(params.get(`token${1}`))
    $('#account_lits_con').html(list_html)
  } else {


    if (getCookie('api_token')) {

      authT(getCookie('api_token'), true)

    } else {
      $('#login_div').show()
      $('#login_list').show()
      $('#account_details').hide()
      $('.logout-btn').hide()
      $('#account_lits_con').hide()

    }


  }






});




function logout() {

  $('.logout-btn').attr('href', '#open-modal');
  window.location.href = $(this).attr('href');

  // var r = confirm("Are you sure? you want to logout ?");
  // if (r == true) {
  //   setCookie("api_token", "", 30)
  //   setCookie("Token_List", "", 30)
  //   location.href = `/`
  // }


}


function logoutre(){
  setCookie("api_token", "", 30)
  setCookie("Token_List", "", 30)
  location.href = `/`
}





function login_s(token) {
  authT(token)
}



function authT(token, is_one) {

  if (token !== '') {



    var loading = $.toast({ heading: 'Connecting...', position: 'top-right', });
    ws = new WebSocket('wss://ws.derivws.com/websockets/v3?app_id=36270')
    ws.onopen = function () {
      this.send(JSON.stringify({ authorize: token }))
    }
    ws.onmessage = function (evt) {
      loading.reset();
      data = JSON.parse(evt.data)
      if (data.authorize) {
        setCookie('api_token', token, 1)


        console.log(data.authorize);

        if (is_one) {

          $('#account_lits_con').html(
            ` <li onclick="login_s('${token}')" style="margin-bottom: 0">
                      <a href="#0">
                        <svg>
                      <use xlink:href="#pages"></use>
                      </svg>
                   <span>${data.authorize.loginid} -  ${data.authorize.currency}</span>
                  </a>
                  </li>`)
        }


        $('#account_id').html(data.authorize.balance + " " + data.authorize.currency)
        $('#account_balance').html(data.authorize.loginid)
        $('#account_fullname').html(data.authorize.fullname.trim() ? data.authorize.fullname : data.authorize.email)


        if (data.authorize.is_virtual){
          $('.virtual-acc').show()
          $('.real-acc').hide()
        }else{
          $('.real-acc').show()
          $('.virtual-acc').hide()
        }







        $.toast({
          heading: 'Welcome.',
          text: 'Your account is connected',
          position: 'top-right',
          loader: false,
          icon: 'success',
          hideAfter: 2000,
          stack: 6
        });


      } else {



        $('#login_div').show()
        $('#login_list').show()
        $('#account_details').hide()
        $('.logout-btn').hide()
        $('#account_lits_con').hide()


        $.toast({
          heading: 'Error',
          text: 'Invalid Token, Please re-login',
          position: 'top-right',
          loader: false,
          icon: 'error',
          hideAfter: 2000,
          stack: 6
        });


        // setCookie('api_token', '', 1)

      }
    }
  } else {
    $.toast({
      heading: 'Warning.',
      text: 'Please enter valid token',
      position: 'top-right',
      loader: false,
      icon: 'warning',
      hideAfter: 3000,
      stack: 6
    });
  }
}
