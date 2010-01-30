
$(function(){
	$(".title2").hover(function(){
		$(".title1").css('background','url("images/title2_bg.gif")');
		$(".title2").css('background','url("images/title2_bg.gif")');
		$(".title1 a").css('color','#666666');
		$(".title2 a").css('color','#666666');
		$(this).css('background','url("images/red_title1_bg.gif")');
		$(this).children().css('color','#333333');
		$(".context").css('display','none');
		$(this).next().next().next().next().next().next().next().next().css('display','inline');
	});
	$(".title1").hover(function(){
		$(".title1").css('background','url("images/title2_bg.gif")');
		$(".title2").css('background','url("images/title2_bg.gif")');
		$(".title1 a").css('color','#666666');
		$(".title2 a").css('color','#666666');
		$(this).css('background','url("images/red_title1_bg.gif")');
		$(this).children().css('color','#333333');
		$(".context").css('display','none');
		$(this).next().next().next().next().next().next().next().next().css('display','inline');
	});
})
