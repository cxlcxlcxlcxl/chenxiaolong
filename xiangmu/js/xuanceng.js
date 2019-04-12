//	选项卡
	$(".letters").find("li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".ul li").removeClass("active").eq($(this).index()).addClass("active");
	})
	
//	楼层

	$(".lou").children("li").click(function(){
//			拿到索引,计算选择器的数字
		var index = $(this).index()+1;
//			根据选择器选择到标签,获取距离顶部的位置
		var t = $(".floor"+index).offset().top;
//			设置动画
		$("html").animate({
			scrollTop:t
		})
		
	})