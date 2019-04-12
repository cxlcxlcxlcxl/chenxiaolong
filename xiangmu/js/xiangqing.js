var oleft = document.querySelector("#left");
var ospan = oleft.children[1];
var oright = document.querySelector("#right");
var otop = oright.children[0];


oleft.onmouseover = function(){
	ospan.style.display = "block";
	oright.style.display = "block";
	
    oleft.onmousemove = function(eve){
    	var e = eve || window.event;
    	var a = e.offsetX - ospan.offsetWidth/2; 
    	var b = e.offsetY - ospan.offsetHeight/2;
    	if(a<0) a=0;
    	if(b<0) b=0;
    	  if(a>oleft.offsetWidth-ospan.offsetWidth){
            a=oleft.offsetWidth-ospan.offsetWidth
        }
        if(b>oleft.offsetHeight-ospan.offsetHeight){
            b=oleft.offsetHeight-ospan.offsetHeight
        }
    	
    	
    	ospan.style.left = a + "px";
    	ospan.style.top = b +"px"
    	
    	    var x = a/(oleft.offsetWidth-ospan.offsetWidth);
            var y = b/(oleft.offsetHeight-ospan.offsetHeight);
            
            
            otop.style.left = (oright.offsetWidth- otop.offsetWidth) * x + "px";
            otop.style.top = (oright.offsetHeight- otop.offsetHeight) * y + "px";

    	
    }
	
}
  oleft.onmouseout = function(){
  
    ospan.style.display = "none";
    oright.style.display = "none";
}
