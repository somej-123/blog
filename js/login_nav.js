$(document).ready(function(){
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
});