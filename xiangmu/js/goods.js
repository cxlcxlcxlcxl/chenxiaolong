		var olist = document.getElementById("list")
		
		var str = "";
		for(var i=0;i<json.length;i++){
            str += '<div class="box" goodsId="'+ json[i].goodsId +'">'+
                        '<img src="'+ json[i].src +'"/>'+
                        '<p>'+ json[i].name +'</p>'+
                        '<span>'+ json[i].price +'</span>'+
                        '<em class="addCar">添加购物车</em>'+
                    '</div>';
		}
		olist.innerHTML = str;
        
        // ES6之前的字符串不支持换行：
        //     在一行写
        //     每行都得是字符,用+号换行拼接
        // 如果能理解第二种写法，而且能写出来，不出错，最好用第二种
        // 但是用第一种也没有任何问题

        
        // 1.页面有配合
        
        // 2.绑定点击事件,使用事件委托
        olist.addEventListener("click",function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if(target.className == "addCar"){
                // 3.点击时做什么？存cookie，存什么内容？商品货号，货号在数据中，拼接到每个商品结构上的自定义属性中
                var id = target.parentNode.getAttribute("goodsid");
                setCookie(id,id)
            }
        })
        