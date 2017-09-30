
var vD=Object.create(validate);


$(function(){

    $("#confirm").click(function(){
        name();
        realname();
        telphone();
        email();
        check();
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

    function email(){
        var ch1=$("#email");
        if(vD.isEmail(ch1.val())==false){
            ch1.parent().addClass("has-error");
            ch1.next()
                .show()
                .text("请填写正确的邮箱地址")
        }
        else{
            ch1.parent().removeClass("has-error");
            ch1.next().hide();
        }
    }

    function passward(){
        var ch1=$("#passward");
        var p=vD.isPassward(ch1.val());
        if(vD.isPassward(ch1.val())=="empty"){
            ch1.parent().addClass("has-error");
            ch1.next()
                .show()
                .text("不能为空");
        }
        else if(p=="short"){
            ch1.parent().addClass("has-error");
            ch1.next()
                .show()
                .text("密码太短");
        }
        else{
            ch1.parent().removeClass("has-error");
            ch1.next().hide();
        }
    }

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



