$(function() {
	
	(function create_code() {
//		验证码
		function shuffle() {
			var arr = ['1', 'r', 'Q', '4', 'S', '6', 'w', 'u', 'D', 'I', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', '2', 's', 't', '8', 'v', '7', 'x', 'y', 'z', 'A', 'B', 'C', '9', 'E', 'F', 'G', 'H', '0', 'J', 'K', 'L', 'M', 'N', 'O', 'P', '3', 'R', '5', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
			return arr.sort(function() {
				return(Math.random() - .5);
			});
		};
		shuffle();
//		验证码拼接
		function showAuthCode() {
			var ar1 = '';
			var code = shuffle();
			for(var i = 0; i < 6; i++) {
			ar1 += code[i];
			};
			$(".box1 .authCode").text(ar1);
		};
		showAuthCode();
//		点击切换验证码
		$(".box1 .authCode").click(function() {
			showAuthCode();
		});
	})();
	
	(function login_validate() {
//		手机号验证
		$(".box1 .account").blur(function() {
			accountReg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if($(this).val() == "" || $(this).val() == "请输入您的账号（手机号）") {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("账号不能为空！");
				return;
			} else if(!accountReg.test($(".box1 .account").val())) {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("账号不存在!");
			} else {
				$(this).addClass("correctInput");
				$(this).removeClass("errorInput");
				$(this).next().empty();
			}
		});
//		密码验证
		$(".box1 .password").blur(function() {
			reg = /^[A-Za-z0-9]{6}$/
			if($(this).val() == "") {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("密码不能为空！");
			} else if(!reg.test($(".password").val())) {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("请输入6位包含数字或字母的密码！");
			} else {
				$(this).addClass("correctInput");
				$(this).removeClass("errorInput");
				$(this).next().empty();
			}
		});
//		验证码验证
		$(".box1 .photokey").blur(function() {
			var code1 = $('.box1 .photokey').val().toLowerCase();
			var code2 = $(".box1 .authCode").text().toLowerCase();
			if($('.box1 .photokey').val() == "") {
				$('.box1 .photokey').addClass("errorInput");
				$(this).next().next().html("验证码不能为空！");
				//console.log("11111")
				return;
			} else if(code1 != code2) {
				$(this).addClass("errorInput");
				$(this).next().next().css("display", "block").html("验证码输入错误！");
				//console.log("22222")
			} else {
				$(this).removeClass("errorInput");
				$(this).next().next().empty();
				$(this).addClass("correctInput");
			}
		})
	})();

})
//	接口请求
	class Login{
// 	console.log(1)
        constructor(){
            this.url = "http://www.liyangyf.com/ctrl/login.php";
            this.init()
        }
        init(){
            var that = this;
            $(".submit").click(function(){
                that.load()
            })
        }
        load(){
//      	ajax请求
            var that = this;
            $.ajax({
                url:this.url,
                data:{
                    user:$(".account").val(),
                    pass:$(".password").val()
                },
                success:function(res){
                    switch(res){
                        case "0":
                            $(".error").html("用户名密码不符");
                            break;
                        case "1":
                            $(".error").html("请重新登录");
                            break;
                        default:
                            that.res = JSON.parse(res);
                            $(".error").html("登录成功");
                            that.display()
                             case "2":
                         $(".error").html("3秒周跳转到首页");
                            setTimeout(() => {
                                location.href = "index.html";
                            }, 3000);
                            break;
                    }
                },
                
            })
        }
        display(){
            console.log(this.res)
        }
    }
	new Login();
