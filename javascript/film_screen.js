/**
 * @author Loong
 */


$(function(){
	var open_screen = false;
	
	function toggle_screen(){
		if(!open_screen){
			open_screen = true;
			$('#screen_top').show();
			$('#screen_bottom').show();
		}else{
			$('#screen_top').hide();
			$('#screen_bottom').hide();
			open_screen = false;
		}
	}	
	$('#screen_bottom').css('height',$(this).height() - 545);
	toggle_screen();
	$('#screen_top,#screen_bottom').click(function(){
		toggle_screen();
	});
})
