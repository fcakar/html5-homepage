var mydiv = document.getElementById("imageContent");

$(function() {
});

function onDesignProcessClick(){
	mydiv.style.width = '450px'
	$('#coin-slider').coinslider({ width: 300, delay: 5000 });
	
};
function onDesignTeamClick(){
	mydiv.style.width = '960px'
	$('#coin-slider').coinslider({ width: 800, delay: 5000 });
	
};