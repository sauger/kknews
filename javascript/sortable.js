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
			remove_category($(this).parent().attr('index'));
		}else{
			$(this).parent().find('input').attr('checked',true);
			$(this).parent().attr('class','stylecontext2');
			add_category($(this).html(),$(this).parent().attr('index'));
		}
	});
	
	
	$('.stylecontent input:checkbox').click(function(){
		if($(this).attr('checked')){
			$(this).parent().attr('class','stylecontext2');
			add_category($(this).parent().find('span').html(),$(this).parent().attr('index'));
			
		}else{
			$(this).parent().attr('class','stylecontext1');
			remove_category($(this).parent().attr('index'));
		}
	});
	
	function remove_category(id){
		$('#m_l_m'+ id).remove();
	}
	
	function add_category(caption,id){
		var str = '<div class=m_l_m id="m_l_m'+ id + '">'
				+'<div class=title><div class="title_name">'+caption +'</div><div class=pic2><a href=""><img border=0 class="xf" src="images/xf.gif"></a></div><div class="addjian"><img style="cursor:pointer;" src="images/add.jpg" class="img_plus">　<img style="cursor:pointer;" src="images/jian.jpg" class="img_mine"></div><div class=more><a href="">更多</a></div></div>'
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
			$('.img_plus').unbind('click');
			$('.img_mine').unbind('click');
			bind_plus_mine();
	};
	
	
	
	function bind_plus_mine(){
		$('.img_plus').click(function(){
			var str = '<div class=m_content>'
					+'	<img width="111" height="83" src="images/b7.jpg">'
					+'	<div class=c_title1><a href="">[威尔]</a></div>'
					+'	<div class=c_content1><a href="">主创莅临蓉城 世界舞王教人跳踢踏</a></div>'
					+'</div>'
					+'<div class=m_content>'
					+'	<img width="111" height="83" src="images/b8.jpg">'
					+'	<div class=c_title1><a href="">[魏钰婷]</a></div>'
					+'	<div class=c_content1><a href="">胡歌再次出演电视剧神话</a></div>'
					+'</div>'
					+'<div class=m_content>'
					+'	<img width="111" height="83" src="images/b9.jpg">'
					+'	<div class=c_title1><a href="">[肖若赝]</a></div>'
					+'	<div class=c_content1><a href="">黄山有成旅游热门景点</a></div>'
					+'</div>'
					+'<div class=m_content>'
					+'	<img width="111" height="83" src="images/b10.jpg">'
					+'	<div class=c_title1><a href="">[蔡剑文]</a></div>'
					+'	<div class=c_content1><a href="">费德勒横扫特松加 小将回球艰难</a></div>'
					+'</div>'
					+'<div class=m_content>'
					+'	<img width="111" height="83" src="images/b11.jpg">'
					+'	<div class=c_title1><a href="">[张义勇]</a></div>'
					+'	<div class=c_content1><a href="">小布33分火箭结束三连败</a></div>'
					+'</div>'
					+'<div class=m_content>'
					+'	<img width="111" height="83" src="images/b12.jpg">'
					+'	<div class=c_title1><a href="">[沐咭咭]</a></div>'
					+'	<div class=c_content1><a href="">艾弗森23分火力不逊科比</a></div>'
					+'</div>';
					//alert($(this).parent().parent().parent().find('.m_context').attr('class'));
			$(this).parent().parent().parent().find('.m_context').append(str);
		});
		$('.img_mine').click(function(){
			$(this).parent().parent().parent().find('.m_context').find('.m_content:lt(6)').remove();
		});
		$('#kb_mine').click(function(){
			$(this).parent().parent().parent().parent().find('#content').find('.cl:last').remove();
		});
		$('#kb_add').click(function(){
			$(this).parent().parent().parent().parent().find('#content').append('<div class=cl><a href="">·[体育] 《公主和青蛙》迪士尼动画</a></div>');
		});
		$('.a_tmp').click(function(e){
			e.preventDefault();
		});
		
		$('#sc_add').click(function(){
			$(this).parent().parent().parent().append('<div class=cl><a class="idft3" href="">[博客家园] </a><a class="idft4" href="">三年内可能爆发危机</a></div>');
		});
		$('#sc_mine').click(function(){
			$(this).parent().parent().parent().find('.cl:last').remove();
		});
	}	
	 bind_plus_mine();
	 $('#btn_save').click(function(){
	 	$('#div_cfg').hide();
		$('#img_cfg').attr('src','/images/extract.jpg');
	 });
});
