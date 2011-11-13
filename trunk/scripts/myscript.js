var mydiv = document.getElementById("imageContent");
var $mainContent		= $('#mainContent');
var $imageContent	= $('#coin-slider');
var $sidebar		= $('#sidebar');

$(function() {
});

function onDesignProcessClick(){
	$sidebar.animate({width:450});
	$mainContent.animate({width:300});
	$imageContent.coinslider({ width: 300, delay: 5000});

};
function onDesignTeamClick(){
	$sidebar.animate({width:700});
	$mainContent.animate({width:500});
	$imageContent.coinslider({ width: 500, delay: 5000});
	
};