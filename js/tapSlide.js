$(document).ready(function(){
    var img = $('#fadeimgList>img');
    var index = 0;
    var autoSlide;
    
    
    $('#prev').click(function(){
        prevSlide();
    });

    $('#next').click(function(){
        nextSlide(index);
    })

    function prevSlide(){
        if(index == 0){
            index = img.length-1
        }else{
            index--;
        }
        moveSlide(index);
    }

    function nextSlide(){
        if(index == img.length){
            index = 0;
        }else{
            index++;
        }
        moveSlide(index);
    }

    function moveSlide(index){
        img.stop().eq(index).fadeIn(500).siblings().fadeOut(500);
    }

    autoSlide = setInterval(function(){
        nextSlide();
    },3000);

    $("#M_BG").mouseover(function(){
        clearInterval(autoSlide);
    });
    $("#M_BG").mouseout(function(){
        autoSlide = setInterval(function(){
            nextSlide();
        },3000);
    })
});