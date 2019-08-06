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


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        $(login_button).text("logout");
        login_button.addEventListener('click',(e)=>{

            
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
                document.location.href="pages/login.html";
            }).catch(function(error) {
                // An error happened.
                alert("error! check your network");
            });

        });
    }
    else{

        login_button.addEventListener('click',(e)=>{

                document.location.href="pages/login.html";
            
        });

    }
});


const body = document.body;
const buttons = document.querySelectorAll('button.fa-bars');


//==========================================================================



window.setInterval(function(){
       jQuery('.next').trigger('click');
},3600);




        var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
          showSlides(slideIndex += n);
        }

        function currentSlide(n) {
          showSlides(slideIndex = n);
        }

        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }

          slides[slideIndex-1].style.display = "block";
        }




        /*==================================================================================*/
        /*================================DATA VISUALIZATION CHART===========================*/
        /*==================================================================================*/
   var ctx = document.getElementById('myChart').getContext('2d');
   var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'A+',
            data: [0,14,25,31,42,52,50],

            backgroundColor: ["transparent"],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 3
        },
        {
            label: 'B+',
            data: [0,9,23,27,34,48,52],

            backgroundColor: ["transparent"],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 3
        },
        {
            label: 'AB+',
            data: [0,12,21,24,31,46,51],

            backgroundColor: ["transparent"],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 3
        },
        {
            label: 'AB-',
            data: [0,11,19,21,29,40,43],
            backgroundColor: ["transparent"],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 3
        },
        {
            label: 'A-',
            data: [0,9,17,21,27,38,41],
            backgroundColor: ["transparent"],
            borderColor: [
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 3
        },
        {
            label: 'B-',
            data: [0,7,14,18,21,24,30],
            backgroundColor: ["transparent"],
            borderColor: [
                'rgba(255, 159, 0, 1)',
                'rgba(255, 159, 0, 1)',
                'rgba(255, 159, 0, 1)',
                'rgba(255, 159, 0, 1)',
                'rgba(255, 159, 0, 1)',
                'rgba(255, 159, 0, 1)',
                'rgba(255, 159, 0, 1)'
            ],
            borderWidth: 3
        },
        {
            label: 'O+',
            data: [0,7,14,18,21,24,30],
            backgroundColor: ["transparent"],
            borderColor: [
                'rgba(255, 159, 14, 1)',
                'rgba(255, 159, 14, 1)',
                'rgba(255, 159, 14, 1)',
                'rgba(255, 159, 14, 1)',
                'rgba(255, 159, 14, 1)',
                'rgba(255, 159, 14, 1)',
                'rgba(255, 159, 14, 1)'
            ],
            borderWidth: 3
        },
        {
            label: 'O-',
            data: [0,7,14,18,21,24,30],
            backgroundColor: ["transparent"],
            borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
        },


    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});




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
