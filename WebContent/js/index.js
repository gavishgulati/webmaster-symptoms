function manClick(){
	$("#bodyList").hide();
	$("#manBodyParts").removeClass("none");
	$("#manBodyParts").addClass("animated bounceInLeft");
}
function womanClick(){
	$("#bodyList").hide();
	$("#womanBodyParts").removeClass("none");
	$("#womanBodyParts").addClass("animated bounceInLeft");
}
$(document).ready(function(){
$(".circle-text").click(function(){
	 if($(this).text() == 'HEAD'){
		 $("#manBodyParts").addClass("animated bounceOutLeft none");
		 $("#manBodyParts").removeClass("bounceInLeft");
    	 $("#headsub").removeClass("none");
		 $("#headsub").addClass("animated zoomInLeft");
	 }
});
});