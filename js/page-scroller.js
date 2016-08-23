$(document).ready(function(){
		var a = $(".nav").offset().top;

		$(document).scroll(function(){
		    if($(this).scrollTop() > a)
		    {   
		       $('.navbar').css({"background-color":"#3f4a4e"});
		    } else {
		       $('.navbar').css({"background-color":"transparent"});
		    }
		});
});