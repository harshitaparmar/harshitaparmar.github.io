$(document).ready(function(){

$(".education-box").show();
$(".technical-box").hide();
$(".publication-box").hide();
$(".personal-box").hide();
$("#technical").click(function(){

	$(".education-box").hide();
	$(".technical-box").show(200);
	$(".publication-box").hide();
	$(".personal-box").hide();
});
$("#publication").click(function(){

	$(".education-box").hide();
	$(".technical-box").hide();
	$(".publication-box").show(200);
	$(".personal-box").hide();
});
$("#personal").click(function(){

	$(".education-box").hide();
	$(".technical-box").hide();
	$(".publication-box").hide();
	$(".personal-box").show(200);
});
$("#education").click(function(){

	$(".education-box").show(200);
	$(".technical-box").hide();
	$(".publication-box").hide();
	$(".personal-box").hide();
});
});