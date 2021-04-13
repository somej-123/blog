$(document).ready(function(){
    var aa = true;
    var bb = true;
    slideStart();
    slideStart2();
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
    $("#M_hamburger").click(function(){
        if(bb == true){
            bb = false;
            $("#M_hamburger").addClass("rotate");
            $("#M_hamburger").attr("src","img/X.png");
            $("#M_hamburger").removeClass("back");
            $("#M_SearchBox").stop().animate({
                "margin-left":0+"%"
            },1000);
            // $(".SearchBox").fadeIn(1000);
        }else{
            bb = true;
            $("#M_hamburger").addClass("back");
            $("#M_hamburger").attr("src","img/menu.png");
            $("#M_hamburger").removeClass("rotate");
            $("#M_SearchBox").stop().animate({
                "margin-left":-100+"%"
            },1000);
            // $(".SearchBox").fadeOut(1000);
        }
    });
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
