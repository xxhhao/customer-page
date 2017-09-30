
var vD=Object.create(validate);


$(function(){

    $("#confirm").click(function(){
        name();
        realname();
        telphone();
        email();
        check();
        $("#email").keyup(function(){
            email();
        })
    });

    $("#save").click(function(){
        receive();
        phone();
        street();
        check();
    });


});

    function check(){
        $(".check").blur(function(){
            receive();
            street();
            phone();
            name();
            realname();
            telphone();
            email();
        });
    }


    function name(){
        var ch1=$("#name");
        if(vD.isEmpty(ch1.val())==false){
            ch1.parent().addClass("has-error");
            ch1.next()
                .show()
                .text("请输入正确的用户名");
        }
        else{
            ch1.parent().removeClass("has-error");
            ch1.next().hide();
        }
    }


    function realname(){
        var ch1=$("#realname");
        if(vD.isChinese(ch1.val())==false ||vD.isLength(ch1.val())==false){
            ch1.parent().addClass("has-error");
            ch1.next()
                .show()
                .text("请输入姓名");
        }
        else{
            ch1.parent().removeClass("has-error");
            ch1.next().hide();
        }
    }


    function telphone(){
        var ch1=$("#telphone");
        if(vD.isTelephone(ch1.val())==false){
            ch1.parent().addClass("has-error");
            ch1.next()
                .show()
                .text("请输入正确的手机号码");
        }
        else{
            ch1.parent().removeClass("has-error");
            ch1.next().hide();
                }
    }

    //function email(){
    //    var ch1=$("#email");
    //    if(vD.isEmail(ch1.val())==false){
    //        ch1.parent().addClass("has-error");
    //        ch1.next()
    //            .show()
    //            .text("请填写正确的邮箱地址")
    //    }
    //    else{
    //        ch1.parent().removeClass("has-error");
    //        ch1.next().hide();
    //    }
    //}


    function receive(){
        var ch2=$("#receive");
        if(ch2.val()==""){
            ch2.parent()
                .addClass("has-error")
                .focus();
        }
        else{
            ch2.parent().removeClass("has-error");
        }
    }

    function phone(){
        var ch2=$("#phone");
        if(ch2.val()=="") {
            ch2.parent()
                .addClass("has-error")
                .focus();
        }
        else{
            ch2.parent().removeClass("has-error");
        }
    }

    function street(){
        var ch2=$("#street");
        if(ch2.val()==""){
            ch2.parent()
                .addClass("has-error")
                .focus();
        }
        else{
            ch2.parent().removeClass("has-error")
        }
    }



    function email(){
        var ch1=$("#email");
        var p=vD.isPassword(ch1.val());
        if(p=="empty"){
            ch1.parent().addClass("has-error");
            ch1.next()
                .show()
                .text("请正确填写密码");
            ch1.siblings(".ttt").children().hide();
        }
        else if(p=="short"){
            ch1.parent().addClass("has-error");
            ch1.next()
                .show()
                .text("密码长度太短");
            ch1.siblings(".ttt").children().hide();
        }
        else if(p=="simple"){
            ch1.parent().removeClass("has-error");
            ch1.next().hide();
            ch1.siblings(".ttt").children("div:first-child")
                .show()
                .text("弱")
                .css({
                    "display":"inline-block",
                    "background":"red",
                    "width":"32px",
                    "height":"6px",
                    "color":"red",
                    "line-height":"30px",
                    "padding-left":"10px"
                });
            ch1.siblings(".ttt").children("div:nth-child(2)")
                .show()
                .text("中")
                .css({
                    "display":"inline-block",
                    "background":"grey",
                    "width":"32px",
                    "height":"6px",
                    "color":"white",
                    "line-height":"30px",
                    "padding-left":"10px"
                });
            ch1.siblings(".ttt").children("div:nth-child(3)")
                .show()
                .text("高")
                .css({
                    "display":"inline-block",
                    "background":"grey",
                    "width":"32px",
                    "height":"6px",
                    "color":"white",
                    "line-height":"30px",
                    "padding-left":"10px"
                });
        }
        else if(p=="normal"){
            ch1.parent().removeClass("has-error");
            ch1.next().hide();
            ch1.siblings(".ttt").children("div:first-child")
                .show()
                .text("弱")
                .css({
                    "display":"inline-block",
                    "background":"red",
                    "width":"32px",
                    "height":"6px",
                    "color":"white",
                    "line-height":"30px",
                    "padding-left":"10px"
                });
            ch1.siblings(".ttt").children("div:nth-child(2)")
                .show()
                .text("中")
                .css({
                    "display":"inline-block",
                    "background":"orange",
                    "width":"32px",
                    "height":"6px",
                    "color":"orange",
                    "line-height":"30px",
                    "padding-left":"10px"
                });
            ch1.siblings(".ttt").children("div:nth-child(3)")
                .show()
                .text("高")
                .css({
                    "display":"inline-block",
                    "background":"grey",
                    "width":"32px",
                    "height":"6px",
                    "color":"white",
                    "line-height":"30px",
                    "padding-left":"10px"
                });
        }
        else if(p=="good"){
            ch1.parent().removeClass("has-error");
            ch1.next().hide();
            ch1.siblings(".ttt").children("div:first-child")
                .show()
                .text("弱")
                .css({
                    "display":"inline-block",
                    "background":"red",
                    "width":"32px",
                    "height":"6px",
                    "color":"white",
                    "line-height":"30px",
                    "padding-left":"10px"
                });
            ch1.siblings(".ttt").children("div:nth-child(2)")
                .show()
                .text("中")
                .css({
                    "display":"inline-block",
                    "background":"orange",
                    "width":"32px",
                    "height":"6px",
                    "color":"white",
                    "line-height":"30px",
                    "padding-left":"10px"
                });
            ch1.siblings(".ttt").children("div:nth-child(3)")
                .show()
                .text("高")
                .css({
                    "display":"inline-block",
                    "background":"green",
                    "width":"32px",
                    "height":"6px",
                    "color":"green",
                    "line-height":"30px",
                    "padding-left":"10px"
                });
        }
        else{
            ch1.parent().removeClass("has-error");
            ch1.next().hide();

        }
    }