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

	// 聲音部分
	// 背景音效
	$(".first_click").click(function() {
		play_bgm1();
		setTimeout(bgm2_delay,14000);
		setInterval(play_bgm1,28000);
	});

	function bgm2_delay() {
		play_bgm2();
		setInterval(play_bgm2, 28000)
	}

	var bgm1_play = document.getElementById("bgm1");
	function play_bgm1() {
		bgm1_play.play();
	}

	var bgm2_play = document.getElementById("bgm2");
	function play_bgm2() {
		bgm2_play.play();
	}

	$("body").click(function() {
		$("body").removeClass('first_click');
	});

	// 切換按鈕音效
	$("#dot1, #dot1_P").click(function() {
		play_top();
	});
	var top_play = document.getElementById("top_audio");
	function play_top() {
		top_play.currentTime = 0;
		top_play.play();
	}


	$("#dot2, #dot2_P").click(function() {
		play_mid();
	});
	var mid_play = document.getElementById("mid_audio");
	function play_mid() {
		mid_play.currentTime = 0;
		mid_play.play();
	}


	$("#dot3, #dot3_P").click(function() {
		play_bot();
	});	
	var bot_play = document.getElementById("bot_audio");
	function play_bot() {
		bot_play.currentTime = 0;
		bot_play.play();
	}
});




