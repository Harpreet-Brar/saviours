var config = {
    apiKey: "AIzaSyA_7yI1zJv8m02KV2JWRig4SUMfvRmEh8I",
   authDomain: "saviours-b670c.firebaseapp.com",
   databaseURL: "https://saviours-b670c.firebaseio.com",
   projectId: "saviours-b670c",
   storageBucket: "",
   messagingSenderId: "631866391865",
   appId: "1:631866391865:web:cfae7e9b73021796"
};
firebase.initializeApp(config);
//===================================================login page ==============================================
const body = document.body;
const buttons = document.querySelectorAll('button.fa-bars');

var db = firebase.firestore();
var admin_name, admin_email, admin_photoUrl, admin_uid, admin_emailVerified;

firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
      var pagename =document.title;
      if(pagename != "SIGN UP"){
          if(pagename != "LOGIN"){
          // User is signed in.
          var url = "login.html";
          $(location).attr("href", url);
      }
      }

  }

const login_button = document.querySelectorAll('#login_button');
login_button.forEach(button=>button.addEventListener('click',login_funct));

const password_button = document.querySelectorAll('.psw a');
password_button.forEach(span=>span.addEventListener('click',password_funct));

function login_funct(){

    var loguser = $("#log_name").val();
    var logpass = $("#log_pass").val();

    firebase.auth().signInWithEmailAndPassword(loguser, logpass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  alert(errorCode + " " + errorMessage);
});


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var url = "donate.html";
    $(location).attr("href", url);
  }
});
}

function password_funct(){
    document.location.href="reset_password.html";
}

});




//=========================================signup=====================================

const signup_button = document.querySelectorAll('#addbtnn');
signup_button.forEach(button => button.addEventListener('click',signup_funct));

//do the adding part
function signup_funct() {

    let name = $('#name').val();
    let email = $('#email').val();
    let pswd = $('#paswd').val();
    let confrm = $('#cnfr').val();

if(name==""){
        $('#name').css('border-color','red');
}
else{
        $('#name').css('border-color','rgb(10,63,88)');
}
var filter = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(filter.test(email)){

    if(pswd==""){
            $('#paswd').css('border-color','red');
            $('#cnfr').css('border-color','red');
    }
    else{
        if(pswd == confrm){

        firebase.auth().createUserWithEmailAndPassword(email, pswd).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...

            alert(errorCode + " " + errorMessage);

            });

          $('#paswd').css('border-color','rgb(10,63,88)');
          $('#cnfr').css('border-color','rgb(10,63,88)');


          firebase.auth().signOut().then(function() {
              // Sign-out successful.
              alert("Signup Successfull... please login")
              document.location.href="login.html";

          }).catch(function(error) {
              // An error happened.
              alert("error! check your network");
          });
        }
        else{
            $('#paswd').css('border-color','red');
            $('#cnfr').css('border-color','red');
        }
    }



$('#email').css('border-color','rgb(10,63,88)');
$('#email').css('background-color','transparent');
}
else{

    $('#email').css('border-color','red');
}


};


/*========================== RESET PASSWORD ============================*/
const resetpassword = document.querySelectorAll('#resetpassbtnn');
resetpassword.forEach(button => button.addEventListener('click',resetpass_funct));
const gotologin = document.querySelectorAll('#gotologin');
gotologin.forEach(button => button.addEventListener('click',gotologin_funct));

function gotologin_funct(){
    document.location.href="login.html";
}

function resetpass_funct(){
    var auth = firebase.auth();
    var emailAddress = $('#resetemail').val();

    auth.sendPasswordResetEmail(emailAddress).then(function() {
        // Email sent.
        alert("reset link sent to your emailAddress")
    }).catch(function(error) {
        alert("User not found!  check your email");
    });
}

/*========================== SIGN OUT ============================*/
const logout = document.querySelectorAll('#logout_button');
logout.forEach(button => button.addEventListener('click',logout_funct));

//do the adding part
function logout_funct() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        document.location.href="login.html";
    }).catch(function(error) {
        // An error happened.
        alert("error! check your network");
    });
}


//=============================================HEADER BURGER====================================================

buttons.forEach(button => button.addEventListener('click',modify));

function modify(x){
    if(x.target.className=="fa fa-close"){
        body.classList="";
    }
    if(x.target.className=="fa fa-bars"){
        body.className="";
        body.classList.add("show-menu");
        document.getElementById("menubar").className = "fa fa-close";
        document.getElementById("menubar").id = "close";

    }

    if(body.className==""){
        document.getElementById("close").className = "fa fa-bars";
        document.getElementById("close").id = "menubar";
    }
}




//==================================================INDEX PAGE====================================


//==================================================DATA VISUAL PAGE====================================



//==================================================DONATE PAGE====================================
const loc = document.querySelectorAll('.loc_search');
loc.forEach(button => button.addEventListener('click',step2));

function step2(x){
    var find = $('#loc input').val();
    const dropdown = document.getElementById("selection");
    dropdown.className="selection";
    const hide = document.getElementById("loc");
    $('#loc').empty();
    $('#loc').append('<h2 id="locationname">Location : '+find+'</h2>');

    document.getElementById('bar').className="bar2";

    }


    const list = document.querySelectorAll('#selection');
    list.forEach(button => button.addEventListener('change',step3));

    function step3(x){
        var centre=$('#selection').val();
        $('.centre_list').empty();
        $('.centre_list').append('<div class="entry"><p>Centre '+centre+'</p><img src="" alt="PHOTO OF CENTRE"><button class="select" id="select">Select</button><a href="https://www.google.com/maps/place/Langara/@49.2245834,-123.1108307,17z/data=!3m1!4b1!4m5!3m4!1s0x5486746f412563f7:0x36606d221509fdfe!8m2!3d49.2245834!4d-123.1086421" target="_blank"><button>Directions</button></a></div>');
        document.getElementById('bar').className="bar3";
    }

    const date = document.querySelectorAll('main');
    date.forEach(button => button.addEventListener('click',step4));

    function step4(x){
        var centre = $('.entry p').text();
        if(x.target.id=='select'){
            $('#loc').append('<h3>'+centre+'</h3>');
            const dropdown = document.getElementById("selection");
            dropdown.className="hide";
    $('.centre_list').empty();
    $('.centre_list').append('<div class="entry2"><input type="date" id="date"><select><option>Available time slots</option><option>12:00</option><option>14:00</option><option>16:00</option><option>20:00</option></select><button id="sub">Submit</button></div>');
    document.getElementById('bar').className="bar4";
    }

    if(x.target.id=='sub'){
        $('.centre_list').empty();
        $('.centre_list').append("<h1 style='text-align:center'>Thanks </h1><br><h3>You Will Recieve Confirmation Email</h3");
        document.getElementById('bar').className="bar5";

    }
}
