$(document).ready(function(){

    $(".nav_plus").click(function(){
        $("#M_aside_menu").animate({
            "right":0
        },300);
        $(".nav_plus").hide();
        $("#sub_page").addClass("contentsBackground");
        $("footer").addClass("contentsBackground");
    });

    $("#close").click(function(){
        $("#M_aside_menu").animate({
            "right":-300
        },300);
        $(".nav_plus").show();
        $("#sub_page").removeClass("contentsBackground");
        $("footer").removeClass("contentsBackground");
    })

    
})