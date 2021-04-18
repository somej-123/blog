$(document).ready(function(){
    slideStart();
    slideStart2();
    var color = true;
    $('.nav_hamberger').click(function(){
        $('#nav_ul').stop().fadeToggle();
        if(color == true){
            color = false;
            console.log(color);
            $('#navi').stop().css("background-color","rgba(0, 0, 0, 0.5)");
        }
        else{
            color =  true;
            console.log(color);
            $('#navi').stop().css("background-color","rgba(0, 0, 0, 0)");
        }
    })
        //슬라이드 속도
        function slideStart(){
            var myCarousel = document.querySelector('#myCarousel')
            var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 10000,
            wrap:true,
            });
        }
        //모바일 슬라이드 속도
        function slideStart2(){
            var myCarousel = document.querySelector('#mobile_slide')
            var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 10000,
            wrap:true,
            });
        }

    
});
