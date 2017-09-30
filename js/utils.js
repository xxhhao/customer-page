/**
 * Created by Administrator on 2017/9/29.
 */


var validate={
    isEmpty:function(x){
        if(x!==""){
            return true
        }
        else{
            return false
        }
    },

    isNumber:function(x){
        if(x.match(/^\d+$/)){
            return true
        }
        else{
            return false
        }
    },

    isLetter: function (x) {
        if(x.match(/^[A-Za-z]+$/)){
            return true
        }
        else{
            return false
        }
    },

    isTelephone:function(x){
        if(x.match(/^1[3-5|8]\d{9}$/)){
            return true
        }
        else{
            return false
        }
    },

    isEmail:function(x){
        if(x.match(/^[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z]{2,3}){1,2}$/)){
            return true
        }
        else{
            return false
        }
    },

    isChinese:function(x){
        if(x.match(/^[\u4e00-\u9fa5]+$/)){
            return true
        }
        else{
            return false
        }
    },

    isPassward:function(x){
        if(x==""){
            return("empty")
        }
        else if(x.length<6|| x.length>20){
            return("short")
        }
        else{
            var a=0;
            var b=0;
            var c=0;
            for(i=0;i< x.length;i++){
                if(x.charAt(i).match(/^\d+$/)){
                    a=1;
                }
                else if(x.charAt(i).match(/^[A-Za-z]+$/)){
                    b=1;
                }
                else{
                    c=1;
                }
            }

            var num=a+b+c;
            if(num==1){
                return("simple")
            }
            else if(num==2){
                return("normal")
            }
            else{
                return("good")
            }
        }
    },

    isNickname:function(x){
        if(x.match(/^\w{3,20}$/)){
            return true
        }
        else{
            return false
        }
    },

    isMoney:function(x){
        if(x.match(/^\d*\.\d{2}$/)){
            return true
        }
        else{
            return false
        }
    },

    isIdcard:function(x){
        if(x.match(/^\d{6}\d{4}\d{2}\d{2}\d{3}[0-9|x]$/)){
            var a= parseInt(x.slice(7,10));
            var b= parseInt(x.slice(11,12));
            var c= parseInt(x.slice(13,14));
            if(a<2100 && b<13 && c<32){
                return true
            }
            else{
                return false
            }
        }

        else{
            return false
        }
    },

    isUrl:function(x){
        if(x.match(/^https:\/\/www\.[a-z0-9_-]+(\.[a-z]{2,3}){1,2}(\/[a-z0-9_-]+)*$/)){
            return true
        }
        else{
            return false
        }
    },

    isDate:function(x){
        if(x.match(/^\d{4}\-\d{2}\-\d{2}$/)){
            var dateArray= x.split("-");
            var a=parseInt(dateArray[0]);
            var b=parseInt(dateArray[1]);
            var c=parseInt(dateArray[2]);
            if(a<2100 && b<13 && c<32){
                return true
            }
            else{
                return false
            }
        }
        else{
            return false
        }
    },

    isTime:function(x){
        if(x.match(/^\d{2}:\d{2}:\d{2}$/)){
            var timeArray= x.split(":");
            var a=parseInt(timeArray[0]);
            var b=parseInt(timeArray[1]);
            var c=parseInt(timeArray[2]);
            if(a<25 && b<61 &&c<61){
                return true
            }
            else{
                return false
            }
        }
        else{
            return false
        }
    },

    isInt:function(x){
        if(x.match(/^[1-9][0-9]*$/)){
            return true
        }
        else{
            return false
        }
    },

    isPost:function(x){
        if(x.match(/^\d{6}$/)){
            return true
        }
        else{
            return false
        }
    },

    isLength:function(x){
        if(x.length>=6){
            return true
        }
        else{
            return false
        }
    }
};

