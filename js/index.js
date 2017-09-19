
$(function(){
    $("#name").blur(function(){
        check()
    })
});


    function check(){
        var ch1=$("#name").val();
        if(ch1==""){
            $("#name").parent().addClass("has-error");
            $("#name").siblings().show();
        }
        else{
            $("#name").parent().removeClass("has-error")
            $("#name").siblings().hide();
        }
    };