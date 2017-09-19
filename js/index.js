

$(function(){
    $("#confirm").click(function(){
        name();
        realname();
        telphone();
    });

    $(".check").blur(function(){
        name();
    });

});


    function name(){
        var ch1=$("#name");
        if(ch1.val()==""){
            ch1.parent().addClass("has-error");
            ch1.next().show();
        }
        else if(ch1.val().length<=6) {
            ch1.parent().removeClass("has-error");
            ch1.next().hide();
        }
        else if(ch1.val().length>6){
            ch1.parent().addClass("has-error");
            ch1.next().show();
            ch1.next().text("²»ÄÜ");
        }

        //ch1.blur(function(){
        //    if(ch1.val()!==""){
        //        ch1.parent().removeClass("has-error");
        //        ch1.siblings().hide();
        //    }
        //})

    }


    function realname(){
        var ch1=$("#realname");
        if(ch1.val()==""){
            ch1.parent().addClass("has-error");
            ch1.siblings().show();
        }
        else{
            ch1.parent().removeClass("has-error");
            ch1.siblings().hide();
        }
}

    function telphone(){
        var ch1=$("#telphone")
        if(ch1.val()==""||ch1.val().length!=11){
            ch1.parent().addClass("has-error");
            ch1.siblings().show();
        }
        else{
            ch1.parent().removeClass("has-error");
            ch1.siblings().hide();
                }
    }
