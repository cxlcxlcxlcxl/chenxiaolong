	$("#photo").banner({
			items:$("#photo").children(".zh").children("img"),		//必传项，表示要移动的图片
			autoPlay:true,						//可选，是否需要自动轮播
			delayTime:3000,						//可选，自动轮播时，没两张图片的间隔时间
			moveTime:300						//可选，每张图片运动的时间
		})
	$("#ue").banner({
        	items:$("#ue").children("#img").children("img"),
			autoPlay:true,						//可选，是否需要自动轮播
			delayTime:3000,						//可选，自动轮播时，没两张图片的间隔时间
			moveTime:300						//可选，每张图片运动的时间
		})
	$(".cx").banner({
        	items:$(".cx").children(".ball").children("img"),
			autoPlay:true,						//可选，是否需要自动轮播
			delayTime:3000,						//可选，自动轮播时，没两张图片的间隔时间
			moveTime:300						//可选，每张图片运动的时间
		})
	$(".mon").banner({
        	items:$(".mon").children(".null").children("img"),
			autoPlay:true,						//可选，是否需要自动轮播
			delayTime:3000,						//可选，自动轮播时，没两张图片的间隔时间
			moveTime:300						//可选，每张图片运动的时间
		})


   		$(".cont").find("li").mouseover(function(){
			$(this).stop().animate({width:400})
			.siblings().stop().animate({width:200})
		})

		$(function(){
			$("html").stop().animate({
				scrollTop:($("div").offset().top) 
		})
	})
		
		
		
		
		
		
		function Search(){
//			1.选元素,设置url
			this.txt = document.getElementById("txt");
			this.ul = document.getElementById("list");
			this.url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
			
//			2.绑定事件
			this.addEvent();
		}
		Search.prototype.addEvent = function(){
			var that = this;
			this.txt.onkeyup = function(){
//				3.保存输入框的内容
				that.val = this.value;
//				4.准备请求数据
				that.load()
			}
		}
		Search.prototype.load = function(){
			var that = this;
			jsonp(this.url,function(res){
//				5.将数据保存到将来的实例对象
				that.res = res;
//				6.请求成功之后,才能够去渲染页面
				that.display();
			},{
				_name:"cb",
				cb:"asdasgtdsa",
				wd:this.val
			})
		}
		Search.prototype.display = function(){
//			7.渲染页面
			var str= ""
			this.res.s.forEach(function(v){
				str += `<li>${v}</li>`;
			})
			this.ul.innerHTML = str;
		}
		
		new Search()