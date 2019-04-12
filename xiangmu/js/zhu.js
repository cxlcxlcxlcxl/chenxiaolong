$(function() {
	(function register() {
		$(".box2 #phone").blur(function() {
			phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if($(this).val() == "") {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("手机号码不能为空!");
				return;
			} else if(!phoneReg.test($(this).val())) {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("请输入正确的手机号码!");
			} else {
				$(this).addClass("correctInput");
				$(this).next().empty();
			}
		});
 
	
		$(".box2 .phonekey").blur(function() {
			reg = /^[A-Za-z0-9]{6}$/;
			if($(this).val() == "") {
				$(this).addClass("errorInput");
				$(this).next().next().css("display", "block").html("验证码不能为空！");
				return;
			} else if(!reg.test($(this).val())) {
				$(this).addClass("errorInput");
				$(this).next().next().css("display", "block").html("验证码输入有误！");
			} else {
				$(this).next().next().empty();
				$(this).addClass("correctInput");
			}
		});
 
	
		$(".box2 .password").blur(function() {
			reg = /^[A-Za-z0-9]{6}$/;
			if(reg.test($(this).val())==""){
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("密码不能为空！");
				//console.log("登录界面的密码是不是为空了？？")
			}else if(!reg.test($(this).val())) {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("请输入6位包含数字或字母的密码！");
			} else {
				$(this).removeClass("errorInput");
				$(this).next().empty();
				$(this).addClass("correctInput");
			}
		});
	
		$(".box2 .email").blur(function() {
			var pwd1 = $('.box2 .password').val();
			var pwd2 = $(this).val();
			if(pwd1 == "") {
				$(this).removeClass("errorInput");
				$(this).next().html("确认密码不能为空！");
				$(this).addClass("errorInput");
				return;
			} else if(pwd1 != pwd2) {
				$(this).addClass("errorInput");
				$(this).removeClass("correctInput");
				$(this).next().css("display", "block").html("两次密码输入不一致！");
			} else {
				$(this).removeClass("errorInput");
				$(this).addClass("correctInput");
				$(this).next().empty();
			}
		});
	})();
});
 	class Register{
        constructor(){
            this.url = "http://www.liyangyf.com/ctrl/register.php";

            this.init();
        }
        init(){
            var that = this;
            $(".submit").click(function(){
                that.load()
            })
        }
        load(){
            $.ajax({
                url:this.url,
                data:{
                    tel:$("#phone").val(),
                    pass:$("#password2").val()
                },
                success:function(res){
                    switch(res){
                        case "0":
                            $(".error").html("重名");
                            break;
                        case "1":
                            $(".error").html("成功，3秒周跳转到登录");
                            setTimeout(() => {
                                location.href = "denglu.html";
                            }, 3000);
                            break;
                        case "2":
                            $(".error").html("不允许为空");
                            break;
                    }
                },
                
            })
        }
    }
    new Register()