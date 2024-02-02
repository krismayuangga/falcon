$('.tooltip').hide();
$('.form-input').focus(function () {
  $('.tooltip').fadeOut(250);
  $("." + $(this).attr('tooltip-class')).fadeIn(500);
});

$('.form-input').blur(function () {
  $('.tooltip').fadeOut(250);
});

$('.login-button').click(function (event) {
  event.preventDefault();
  // or use return false;
});

$(".login-button").click(function () {

  if ($('.login-form').css("transform") == 'none' && $('#token').val() != '') {
    $('.login-form').css("transform", "rotateY(-180deg)");
    $('.loading').css("transform", "rotateY(0deg)");
    var delay = 600;
    setTimeout(function () {
      $('.loading-spinner-large').css("display", "block");
      $('.loading-spinner-small').css("display", "block");
    }, delay);
  } else {
    $('.login-form').css("transform", "");
  }
});
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function isEmpty(str) {
    return (!str || str.length === 0 );
}


$(document).ready(function () {

  let accounts = [];
  let serach = window.location.search; //"?acct1=CR650545&token1=a1-2xslnFiX6V67mV8QAgAIzCveSqztd&cur1=USD&acct2=CR792189&token2=a1-tq02OOQk3znDBKrN0OY2dBEzedJ9q&cur2=BTC&acct3=VRTC1796541&token3=a1-vglqXY0dGPcaPAADTghfyeSeIJtOo&cur3=USD&state="

  const params = new URLSearchParams(serach)
  let buttons = '<h4>Select Account</h4>'

  if (params.get(`token${1}`))
    setCookie('Token_List', params)

  for (i = 1; i < 10; i++) {
    if (params.has(`acct${i}`)) {
      accounts.push({ acc: params.get(`acct${i}`), token: params.get(`token${i}`), curr: params.get(`cur${i}`) })
      buttons += `<div onclick="login_s('${params.get(`token${i}`)}')"><button style="background: black;border-radius: 20px;height: 2.5em;" 
        id="login" class="btn btn-block btn-info ripple-effect">
        ${params.get(`acct${i}`).includes('VRTC') ? '[DEMO]' : '[REAL]'} - ${params.get(`acct${i}`)} -  ${params.get(`cur${i}`)}</button>
  </div><br>`
    }
  }
  $('#login-c-btn').html(buttons)






  const params1 = new URLSearchParams(getCookie('Token_List'))

  if (params1.get(`token${1}`)) {

    window.location.replace('/home')

  } else {
    
    console.log(isEmpty(getCookie('api_token')))

    if (getCookie('api_token')) {
      authT(getCookie('api_token'))
    }

  }


  $('#c_2').hide();
  // if (Array.isArray(accounts) && accounts.length) {
  //   $('#c_1').hide();
  //   $('#c_2').show();
  // } else {
  //   $('#c_1').show();
  //   $('#c_2').hide();
  // }


});

function getCookie(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

function login_s(token) {
  authT(token)
}


$('#login_s').on('click', function () {

  // swal("You already have an existing Binary | Deriv account? ", {
  //   buttons: ["Oh noez!", true],
  // });

  swal({
    title: "already have an account ?",
    text: "You already have an existing Deriv account?",
    buttons: true,
    dangerMode: false,
    buttons: ["No , Create an account ", "Yes"],
  })
    .then((willDelete) => {
      if (willDelete) {
        var app_id = '36270'
        window.location.replace(`https://oauth.deriv.com/oauth2/authorize?app_id=${app_id}`)
      } else {
        window.open('https://trade.kinerja.io/register', '_blank');
      }
    });
});


$('#login').on('click', function () {
  authT(null)

})


$('#newAccountpop').on('click', function () {
  window.open('https://trade.kinerja.io/register', '_blank');
})


$('#loginAccountpop').on('click', function () {
  var app_id = '36270'
  window.location.replace(`https://oauth.deriv.com/oauth2/authorize?app_id=${app_id}`)
})


$('#rememberMecheckbox').change(function () {
  $('#rememberMecheckbox').val(this.checked);

  var remember_me_val = $('#rememberMecheckbox').val()
  setCookie('remember_me_val', remember_me_val, 1);

  // console.log(getCookie('remember_me_val'))
  // console.log(getCookie('remember_me_val')=='true')

});


$('#logintoBinary').on('click', function (e) {

  e.preventDefault();
  if (getCookie('remember_me_val') == 'true') {
    var app_id = '36270'
    window.location.replace(`https://oauth.deriv.com/oauth2/authorize?app_id=${app_id}`)


  } else {

    $('#logintoBinary').attr('href', '#open-modal');
    window.location.href = $(this).attr('href');

  }

})





function authT(token_) {

  token = document.getElementById('token').value

  console.log("---------Token-------", token);

  if (token_)
    token = token_

  if (token !== '') {



    var loading = $.toast({ heading: 'Connecting...', position: 'top-right', });
    ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=36270')
    ws.onopen = function () {
      this.send(JSON.stringify({ authorize: token }))
    }
    ws.onmessage = function (evt) {
      loading.reset();
      data = JSON.parse(evt.data)
      if (data.authorize) {
        setCookie('api_token', token, 1)
        $.toast({
          heading: 'Welcome.',
          text: 'Your account is connected',
          position: 'top-right',
          loader: false,
          icon: 'success',
          hideAfter: 2000,
          stack: 6
        });
        setTimeout(function () {


          var datalist = ''
          if (data.authorize.is_virtual == 0) {
            datalist = "?accunt1=" + data.authorize.loginid + "token1=" + token
          }


          if (token_) {
            // window.location.replace('/login/m.html')
            window.location.replace('/home')
          } else {
            host = window.location.host
            const params = new URLSearchParams(window.location.search)
            if (params.has('url'))
              window.location.replace(params.get('url'))
            else
              // window.location.replace('/login/m.html' + datalist)
              window.location.replace('/home' + datalist)
          }


        }, 1000)
      } else {
        $.toast({
          heading: 'Error',
          text: 'Invalid Token, Please create new one and try again..',
          position: 'top-right',
          loader: false,
          icon: 'error',
          hideAfter: 2000,
          stack: 6
        });
        clear()

        setCookie('api_token', '', 1)
        if (token_)
          window.location.replace('/login')
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


function clear() {
  $('.login-form').css("transform", "");
  $('.loading').css("transform", "");
  $('.loading-spinner-large').css("display", "");
  $('.loading-spinner-small').css("display", "");
}
