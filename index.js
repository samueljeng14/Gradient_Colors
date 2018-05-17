$(document).ready(function() {
	var container_width = $(".container").height() * 1.5;
	$(".container").css('width', container_width);

	$(window).resize(function() {
		var container_width = $(".container").height() * 1.5;
		$(".container").css('width', container_width);
	});

	// 點擊換背景

	$("#dot1, #dot1_P").click(function() {
		$("#bgc1").css('opacity', '1');
		$("#bgc2").css('opacity', '0');
		$("#bgc3").css('opacity', '0');
		$(".moun").css('fill', '#165C7C');
		$(".container").css('box-shadow', '2px 2px 10px 0 #9AB8B9');
		$(".dot2_A, .dot3_A").removeClass('dotA');
		$(".dot1_A").addClass('dotA');
	});

	$("#dot2, #dot2_P").click(function() {
		$("#bgc1").css('opacity', '0');
		$("#bgc2").css('opacity', '1');
		$("#bgc3").css('opacity', '0');
		$(".moun").css('fill', '#A4303F');
		$(".container").css('box-shadow', '2px 2px 10px 0 #CCB087');
		$(".dot1_A, .dot3_A").removeClass('dotA');
		$(".dot2_A").addClass('dotA');
	});

	$("#dot3, #dot3_P").click(function() {
		$("#bgc1").css('opacity', '0');
		$("#bgc2").css('opacity', '0');
		$("#bgc3").css('opacity', '1');
		$(".moun").css('fill', '#5D2C75');
		$(".container").css('box-shadow', '2px 2px 10px 0 #C57B8E');
		$(".dot2_A, .dot1_A").removeClass('dotA');
		$(".dot3_A").addClass('dotA');
	});
});



