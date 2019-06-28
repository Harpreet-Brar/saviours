window.setInterval(function(){
       jQuery('.next').trigger('click');
},3600);


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
