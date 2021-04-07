$(document).ready(function(){
    
    var slideList = $(".eatingSlide");
    var slide = $("#firstContent");
    var dotList = $(".dotlist").children();
    var index = 0;
    var wid = slide.width();
    var autoSlide;

    dotList.click(function(){
        index = $(this).index();
        slideList.stop().animate({
            "margin-left": -wid * index
        });
        $(this).addClass("on").siblings().removeClass("on");
    });

    $(".prev").click(function(){
        prevSlide();
    });
    $(".next").click(function(){
        nextSlide();
    })

    function prevSlide(){
        if(index == 0){
            index = dotList.length-1;
            slideMove()
        }else{
            index--;
            slideMove()
        }
    }

    function nextSlide(){
        if(index == dotList.length-1){
            index = 0;
            slideMove()
        }else{
            index++;
            slideMove()
        }
    }

    function slideMove(){
        slideList.stop().animate({
            "margin-left":-wid * index
        });
        dotList.eq(index).addClass("on").siblings().removeClass("on");
    }

    autoSlide = setInterval(function(){
        if(index == dotList.length-1){
            index=0;
            slideMove();
        }else{
            index++;
            slideMove()
        }
    },3000)

    slide.mouseover(function(){
        clearInterval(autoSlide);
    });

    slide.mouseleave(function(){
        autoSlide = setInterval(function(){
            if(index == dotList.length-1){
                index=0;
                slideMove();
            }else{
                index++;
                slideMove()
            }
        },3000)
    })
});