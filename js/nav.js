$(document).ready(function(){

    var color = true;

    $(window).scroll(function(){
        $scroll = $(document).scrollTop();
        console.log($scroll)
        if($scroll > 146){
            $('#navi_background').stop().css("background-color","rgba(0, 0, 0, 0.5)");
        }else{
            $('#navi_background').stop().css("background-color","rgba(0, 0, 0, 0)");
        }
    });
    
    $('.nav_hamberger').click(function(){
        $('#nav_ul').stop().fadeToggle();
        if(color == true){
            color = false;
            $('#navi').stop().css("background-color","rgba(0, 0, 0, 0.5)");
        }
        else{
            color =  true;
            $('#navi').stop().css("background-color","rgba(0, 0, 0, 0)");
        }
    })
});