$(document).ready(function(){

$(".education-box").show();
$(".technical-box").hide();
$(".publication-box").hide();
$(".personal-box").hide();
$("#technical").click(function(){

	$(".education-box").hide();
	$(".technical-box").toggle(200);
	$(".publication-box").hide();
	$(".personal-box").hide();
});
$("#publication").click(function(){

	$(".education-box").hide();
	$(".technical-box").hide();
	$(".publication-box").toggle(200);
	$(".personal-box").hide();
});
$("#personal").click(function(){

	$(".education-box").hide();
	$(".technical-box").hide();
	$(".publication-box").hide();
	$(".personal-box").toggle(200);
});
$("#education").click(function(){

	$(".education-box").toggle(200);
	$(".technical-box").hide();
	$(".publication-box").hide();
	$(".personal-box").hide();
});
});