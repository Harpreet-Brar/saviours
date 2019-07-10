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




        /*=================================================================================================*/
        var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'Blood Group',
              borderColor: 'rgb(255, 99, 132)',

          },
          {
              label: 'A+',
              backgroundcolor:['rgb(218, 236, 243)'],
              borderColor: 'rgb(244,164,96)',
              data: [0,7,14,18,21,24,30],

          },
          {
              label: 'AB+',
              backgroundcolor:['rgb(218, 236, 243)'],
              borderColor: 'rgb(255, 99, 132)',
              data: [0,9,17,21,27,38,41],

          },
          {
              label: 'B+',
              backgroundcolor:['rgb(218, 236, 243)'],
              borderColor: 'rgb(218,165,32)',
              data: [0,11,19,21,29,40,43],

          },
          {
              label: 'AB-',
              backgroundcolor:['rgb(218, 236, 243)'],
              borderColor: 'rgb(199,21,133)',
              data: [0,12,21,24,31,46,51],

          },
          {
              label: 'O+',
              backgroundcolor:['rgb(218, 236, 243)'],
              borderColor: 'rgb(50, 99, 132)',
              data: [0,9,23,27,34,48,52],

          },
          {
              label: 'O-',
              backgroundcolor:['rgb(218, 236, 243)'],
              borderColor: 'rgb(165,42,42)',
              data: [0,14,25,31,42,52,50],

          }
      ]
      },

      // Configuration options go here
      options: {}
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
          document.getElementById("bar").className = "fa fa-close";
          document.getElementById("bar").id = "close";

      }

      if(body.className==""){
          document.getElementById("close").className = "fa fa-bars";
          document.getElementById("close").id = "bar";
      }
  }
