/**
 * @author Loong
 */
$(function(){
	$('#sortable').sortable();
	$('#sortable1').sortable();
	$('#div_styleset').click(function(){
		//alert('ok');
		if($('#div_cfg').css('display') == 'none'){
			$('#div_cfg').show();
			$('#img_cfg').attr('src','/images/unextract.jpg');
		}else{
			$('#div_cfg').hide();
			$('#img_cfg').attr('src','/images/extract.jpg');
		}
	});
	
	$('.category_span').click(function(e){
		if($(this).parent().find('input').attr('checked')){
			$(this).parent().find('input').attr('checked',false);
			$(this).parent().attr('class','stylecontext1');
		}else{
			$(this).parent().find('input').attr('checked',true);
			$(this).parent().attr('class','stylecontext2');
			add_category($(this).html());
		}
	});
	
	$('.stylecontext1 input').click(function(){
		if($(this).attr('checked')){
			$(this).attr('checked',false);
			$(this).parent().attr('class','stylecontext1');
		}else{
			$(this).attr('checked',true);
			$(this).parent().attr('class','stylecontext2');
		}
	});
	
	function add_category(caption,id){
		var str = '<div class=m_l_m id="'+ id + '">'
				+'<div class=title><div class="title_name">'+caption +'</div><div class=pic2><a href=""><img border=0 class="xf" src="images/xf.gif"></a></div><div class="addjian"><img style="cursor:pointer;" src="images/add.jpg">　<img style="cursor:pointer;" src="images/jian.jpg"></div><div class=more><a href="">更多</a></div></div>'
				+'<div class=m_context>'
				+'	<div class=m_content>'
				+'		<img width="111" height="83" src="images/b1.jpg" id="pop_img">'
				+'		<div class=c_title1><a href="">[蔡嘉妮]</a></div>'
				+'		<div class=c_content1><a href="">《剑雨江湖》横店拍摄现场开放媒体探班</a></div>'
				+'	</div>'
				+'	<div class=m_content>'
				+'		<img width="111" height="83" src="images/b2.jpg">'
				+'		<div class=c_title1><a href="">[王树宝]</a></div>'
				+'		<div class=c_content1><a href="">巨力集团上市庆典晚会在河北保定举行</a></div>'
				+'	</div>'
				+'	<div class=m_content>'
				+'		<img width="111" height="83" src="images/b3.jpg">'
				+'		<div class=c_title1><a href="">[詹武明]</a></div>'
				+'		<div class=c_content1><a href="">本届格莱美将注定充满感动时刻</a></div>'
				+'	</div>'
				+'	<div class=m_content>'
				+'		<img width="111" height="83" src="images/b4.jpg">'
				+'		<div class=c_title1><a href="">[郑杰]</a></div>'
				+'		<div class=c_content1><a href="">臧天朔聚众斗殴案终审结果出炉</a></div>'
				+'	</div>'
				+'	<div class=m_content>'
				+'		<img width="111" height="83" src="images/b5.jpg">'
				+'		<div class=c_title1><a href="">[喻冰]</a></div>'
				+'		<div class=c_content1><a href="">吴奇隆与马雅舒聚少离多，交往5年</a></div>'
				+'	</div>'
				+'	<div class=m_content>'
				+'		<img width="111" height="83" src="images/b6.jpg">'
				+'		<div class=c_title1><a href="">[李春勇]</a></div>'
				+'		<div class=c_content1><a href="">刘谦向日本天皇跪拜事件</a></div>'
				+'	</div>'
				+'</div>'
				+'<div class="m_l_m_b"></div>'
			+'</div>';
			$('#sortable').append(str);
	};
});
