
$(function(){
	$(".title2").hover(function(){
		$(".title1").css('background','url("images/title2_bg.gif")');
		$(".title2").css('background','url("images/title2_bg.gif")');
		$(".title1").css('color','#666666');
		$(".title2").css('color','#666666');
		$(this).css('background','url("images/title1_bg.gif")');
		$(this).css('color','#333333');
		$(".context").css('display','none');
		$(this).next().next().next().next().next().next().next().next().css('display','inline');
	});
	$(".title1").hover(function(){
		$(".title1").css('background','url("images/title2_bg.gif")');
		$(".title2").css('background','url("images/title2_bg.gif")');
		$(".title1").css('color','#666666');
		$(".title2").css('color','#666666');
		$(this).css('background','url("images/title1_bg.gif")');
		$(this).css('color','#333333');
		$(".context").css('display','none');
		$(this).next().next().next().next().next().next().next().next().css('display','inline');
	});
	$(function(){
		$(".title1").css('background','url("images/title1_bg.gif")');
		$(".title2").css('background','url("images/title2_bg.gif")');
		$(".title1").css('color','#666666');
		$(".title2").css('color','#666666');
	});
	
	$("#flash_mar").css('left',$("#ply").offset().left+400);
	$("#flash_mar").css('top',$("#ply").offset().top+45);
	
	setInterval(function(){
		$("#mar").animate({
                marginTop:"-25px"
        },500,function(){
                $(this).css({marginTop:"0px"}).find("div:first").appendTo(this);
        });
	},10000)
})

function resize(){
	$("#flash_mar").css('left',$("#ply").offset().left+400);
	$("#flash_mar").css('top',$("#ply").offset().top+45);
}
