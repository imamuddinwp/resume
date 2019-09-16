$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

$(document).ready(function(){
	$("#all").click(function(){
		$(".psd").show(500);
		$(".web").show(500);
		$(".wp").show(500);
	});
	
	$("#psd").click(function(){
		$(".psd").show(500);
		$(".web").hide(500);
		$(".wp").hide(500);
	});
	
	$("#web").click(function(){
		$(".psd").hide(500);
		$(".web").show(500);
		$(".wp").hide(500);
	});
	
	$("#wp").click(function(){
		$(".psd").hide(500);
		$(".web").hide(500);
		$(".wp").show(500);
	});
	
});