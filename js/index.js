
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
        var empty=vD.isEmpty(ch1.val());
        var nickname=vD.isNickname(ch1.val());
        if(empty==false){
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
        if(ch1.val()==""){
            ch1.parent().addClass("has-error");
            ch1.next()
                .show()
                .text("请输入姓名");
        }
        else if(ch1.val().length>6){
            ch1.parent().addClass("has-error");
            ch1.next()
                .show()
                .text("不能超过6个字");
        }
        else{
            ch1.parent().removeClass("has-error");
            ch1.next().hide();
        }
    }


    function telphone(){
        var ch1=$("#telphone");
        if(ch1.val()==""||ch1.val().length!=11){
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
        if(ch1.val()==""||!ch1.val().match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)){
            ch1.parent().addClass("has-error");
            ch1.next()
                .show()
                .text("请输入正确的邮箱地址");
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



