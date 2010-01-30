/**
 * @author Loong
 */
function random_num(num){
	return Math.floor(Math.random()*num);
}
$(function(){
	var h1 = -1;
	var h2 = -1;
	var h3 = -1;
	var key1 = ""
	var key2 = '';
	var key3 = '';	
	function refresh_ssnr(){
		$('.ssnrcls').show();
		if (h1 != -1){
			$(".ssnrcls[num='" +h1 + "']").hide();
		}
		if (h2 != -1){
			$(".ssnrcls[num='" +h2 + "']").hide();
		}
		if (h3 != -1){
			$(".ssnrcls[num='" +h3 + "']").hide();
		}
	}
	$('.l1').click(function(e){
		e.preventDefault();
		while(true){
			temp = random_num(5);
			if (temp != h2 && temp != h3){
				h1 = temp;
				break;
			}
		}		
		if(key1 == $(this).attr('id')){
		   key1  = "";
		   h1 = -1;	
		}else{
		   key1 = $(this).attr('id');
		}
		
		$('.l1').not(this).removeClass('ssfont3_sel');
		refresh_ssnr();
		
	});
	
	$('.l2').click(function(e){
		e.preventDefault();
		while(true){
			temp = random_num(5);
			if (temp != h1 && temp != h3){
				h2 = temp;
				break;
			}
		}
		if(key2 == $(this).attr('id')){
		   key2  = "";
		   h2 = -1;	
		}else{
		   key2 = $(this).attr('id');
		}
		$('.l2').not(this).removeClass('ssfont3_sel');
		refresh_ssnr();
	});
	$('.l3').click(function(e){
		e.preventDefault();
		while(true){
			temp = random_num(5);
			if (temp != h1 && temp != h2){
				h3 = temp;
				break;
			}
		}
		if(key3 == $(this).attr('id')){
		   key3  = "";
		   h3 = -1;	
		}else{
		   key3 = $(this).attr('id');
		}
		$('.l3').not(this).removeClass('ssfont3_sel');
		refresh_ssnr();
	});
	

	
	$('.ssfont3').mouseover(function(){
		$(this).addClass('ssfont3_sel');
	});
	$('.l1').mouseout(function(){
		if($(this).attr('id') == key1){
			exit;
		}
		$(this).removeClass('ssfont3_sel');
	});
	
	$('.l2').mouseout(function(){
		if($(this).attr('id') == key2){
			exit;
		}
		$(this).removeClass('ssfont3_sel');
	});
	$('.l3').mouseout(function(){
		if($(this).attr('id') == key3){
			exit;
		}
		$(this).removeClass('ssfont3_sel');
	});
	
});
