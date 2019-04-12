    
    // 1.拿到总数据
    // 2.拿到cookie
    // 3.将总数据和cookie做比较，在cookie中存在的数据，渲染页面

    // 4.删除
    var otbody = document.querySelector("tbody");
    var arr = document.cookie.split("; ");

    var str = "";
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<json.length;j++){
            if(arr[i].split("=")[1] == json[j].goodsId){
                str += "<tr data-id='"+ json[j].goodsId +"'>"+
                			"<td><img src='"+"'></td>"+
                            "<td><img src='"+ json[j].src +"'></td>"+
                            "<td>"+ json[j].name +"</td>"+
                            "<td>"+ json[j].price +"</td>"+
                            "<td>"+"</td>"+
                            "<td><span>删除</span></td>"+
                        "</tr>";
                       
            }
        }
    }
    otbody.innerHTML = str;

    // 删除按钮的功能：事件委托
    otbody.addEventListener("click",function(eve){
        var e = eve || window.event;
        var target = e.target || e.srcElement;
        if(target.tagName == "SPAN"){
            // 删除DOM元素
            target.parentNode.parentNode.remove()
            // 删除cookie数据
            var id = target.parentNode.parentNode.getAttribute("data-id");
            removeCookie(id);
        }
    })
