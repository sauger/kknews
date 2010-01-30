$(function(){
	$('.xf').mouseover(function(e){
			$(this).attr('src','images/xf_z.gif');	
	});
	$('.xf').mouseout(function(e){
		$(this).attr('src','images/xf.gif');	
	});
	$('.xf').each(function(){
		$(this).parent().click(openCloud);
	});
})

function openCloud(){
	var cloud=window.open ('cloud.html','cloud','resizable=yes,center=yes,scrollbars=no,toolbar=no,menubar=no,fullscreen=no');
	cloud.moveTo(0,0);
	cloud.resizeTo(screen.availWidth,screen.availHeight);
	cloud.outerWidth=screen.availWidth;
	cloud.outerHeight=screen.availHeight;
}