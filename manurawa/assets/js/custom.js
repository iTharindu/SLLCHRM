//  =======================================================
// * Web Name: Manurawa 2020
// * Web Version: 1.0
// * Developer: Sandeepa Lokubaranige | www.sandeepa.net
// * Owner: SLLCHRM | www.sllchrm.lk
// ======================================================== 

var goBtn = document.getElementById("goBtn");
var menu = document.getElementById("menu");

goBtn.onclick = function() {
  window.location = menu.value;
}

$(document).ready(function(){
  $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
    
    $(".zoom").hover(function(){
		
		$(this).addClass('transition');
	}, function(){
        
		$(this).removeClass('transition');
	});
});


