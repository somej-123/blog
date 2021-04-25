$(document).ready(function(){
    hoverEvt1();
    var ID_confirm = false

    $("#sign_in input").on("input",function(){
        if($("#input_password").val() == $("#input_password2").val() && $("#input_password").val() != "" && $("#input_password2").val() != ""){
            $("#password_confirm_check_Y").css("display","block");
            $("#password_confirm_check_N").css("display","none");
        }else{
            $("#password_confirm_check_Y").css("display","none");
            $("#password_confirm_check_N").css("display","block");
        }

        if($("#input_ID").val() == "" || $("#input_ID").val() == null){
            hoverEvt1();
        }
        else if($("#input_email").val() == "" || $("#input_email").val() == null){
            hoverEvt1();
        }
        else if($("#input_password").val() == "" || $("#input_password").val() == null){
            hoverEvt1();
        }
        else if($("#input_password2").val() == "" || $("#input_password2").val() == null){
            hoverEvt1();
        }
        else{
            hoverEvt2();
        }
    });
    $("#login_btn2").click(function(){
        if($("#input_ID").val() == "" || $("#input_ID").val() == null){
            alert("아이디를 입력해주세요");
            return;
        }
        else if($("#input_email").val() == "" || $("#input_email").val() == null){
            alert("이메일을 입력해주세요");
            return;
        }
        else if($("#input_password").val() == "" || $("#input_password").val() == null){
            alert("비밀번호를 입력해주세요");
            return;
        }
        else if($("#input_password2").val() == "" || $("#input_password2").val() == null){
            alert("비밀번호 확인을 입력해주세요");
            return;
        }
        else if($("#input_password").val() != $("#input_password2").val()){
            alert("비밀번호를 다시 확인해주세요")
        }
        else if(ID_confirm == false){
            alert("아이디 중복 확인을 해주세요");
            return;
        }else{
            
        }
        
    })


    function hoverEvt1(){
        $("#login_btn2").css({
            "color":"red",
            "border-color":"red"
        });
        $("#login_btn2").mouseenter(function(){
            $("#login_btn2").css({
                "color":"white",
                "border-color":"red",
                "background-color":"red"
            });
        });
        $("#login_btn2").mouseleave(function(){
            $("#login_btn2").css({
                "color":"red",
                "border-color":"red",
                "background-color":"transparent"
            });
        });
    }
    function hoverEvt2(){
        $("#login_btn2").css({
            "color":"#fff",
            "border-color":"#fff"
        });
        $("#login_btn2").mouseenter(function(){
            $("#login_btn2").css({
                "color":"#fff",
                "border-color":"#0d6efd",
                "background-color":"#0d6efd"
            });
        });
        $("#login_btn2").mouseleave(function(){
            $("#login_btn2").css({
                "color":"#fff",
                "border-color":"#fff",
                "background-color":"transparent"
            });
        });
    }
});