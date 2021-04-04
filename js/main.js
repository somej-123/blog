$(document).ready(function(){
    var aa = true;
    slideStart();
    $("#hamburger").click(function(){
        if(aa == true){
            aa = false;
            $("#hamburger").addClass("rotate");
            $("#hamburger").attr("src","img/X.png");
            $("#hamburger").removeClass("back");
            $(".SearchBox").stop().animate({
                "margin-left":0+"%"
            },1000);
            // $(".SearchBox").fadeIn(1000);
        }else{
            aa = true;
            $("#hamburger").addClass("back");
            $("#hamburger").attr("src","img/menu.png");
            $("#hamburger").removeClass("rotate");
            $(".SearchBox").stop().animate({
                "margin-left":-100+"%"
            },1000);
            // $(".SearchBox").fadeOut(1000);
        }
    });
    //슬라이드 속도
        function slideStart(){
            var myCarousel = document.querySelector('#myCarousel')
            var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 100000,
            wrap:true,
        })
    }
    
});
