$(function(){
	//购物车
	$('.cart').mouseenter(function(){
		$(this).find('a').addClass('active');
		$('.cart').find('.xiala').show().stop().animate({
			'height':'100'
		},200);
	})
	$('.cart').mouseleave(function(){
		$(this).find('a').removeClass('active');
		$('.cart').find('.xiala').stop().animate({
			'height':'0'
		},200,function(){
			$('.cart').find('.xiala').hide();
		});
	})
	//购物车结束
	
	//搜索框
	$('.search').find('input').focus(function(){
		$('.search .biaoqian').addClass('none');
		$('.search input').css({'border-color':'#ff6700','outline':'none'});
		$('.search .fangdajing').css({'border-color':'#ff6700'});
	})
	$('.search').find('input').focusout(function(){
		$('.search .biaoqian').removeClass('none');
		$('.search input').css({'border-color':'#E0E0E0','outline':'none'});
		$('.search .fangdajing').css({'border-color':'#E0E0E0'});
	})
	//搜索框结束
	
	
	//顶部下拉
	var idx;		
	//鼠标经过导航栏事件
	$('.nav ul .fenglei').mouseenter(function(){
		idx=$(this).index();
		//先让所有的列表隐藏，然后让对应的列表显示
		$('.nav ul li .list').hide();
		$('.nav ul li .list').eq(idx).show();
		//再让所有的列表高度从0变成230
		$('.nav ul li .list').stop().animate({
			height:'230px'
		},200);	
	});
	$('.nav_out').mouseleave(function(){
		$('.nav ul li .list').stop().animate({
			height:'0px'
		},200,function(){
			$('.nav ul li .list').hide();
		});
	});
	//顶部下拉结束
	
	//大图轮播
	var c=0;
	//自动轮播
	timer=setInterval(run,2000);
	function run(){
		c++
		if(c==5){
			c=0;
		}
		$('#lunbo li').eq(c).fadeIn().siblings().fadeOut();
		$('#circle li').eq(c).css({'background':'rgba(255,255,255,0.3)'}).siblings().css({'background':'rgba(0,0,0,0.4)'});
	}
	//鼠标移进轮播图区域就停止定时器
	$('#main').mouseenter(function(){
		clearInterval(timer);
	});
	$('#main').mouseleave(function(){
		clearInterval(timer);
		timer=setInterval(run,2000);
	});
	//鼠标放上小圆点的效果
	$("#circle li").mouseenter(function(){
		var a=$(this);
		c=$(this).index();
		$('#lunbo li').eq(c).stop().fadeIn().siblings().stop().fadeOut();
		a.css({'background':'rgba(255,255,255,0.3)'}).siblings().css({'background':'rgba(0,0,0,0.4)'});
	});
	//pre前一个
	$('.pre').eq(0).click(function(){
		c--;
		if(c==-1){
			c=4;
		}
		$('#lunbo li').eq(c).stop().fadeIn().siblings().stop().fadeOut();
		$('#circle li').eq(c).css({'background':'rgba(255,255,255,0.3)'}).siblings().css({'background':'rgba(0,0,0,0.4)'});	
	})
	//next下一个
	$('.next').eq(0).click(run);
	//大图轮播结束
	
	//右侧菜单
	$('.menu_list').mouseenter(function(){
		var c=$(this).index();
		$('.menu_list').css({'background':'none'});
		$(this).css({'background':'#ff6700'});
		$('.detail').hide();
		$('.detail').eq(c).show();	
	});
	$('.menu').mouseleave(function(){
		$('.menu_list').css({'background':'none'})
		$('.detail').hide();
	})
	//右侧菜单结束
	
	//三页ul
	var page=0;
	$('.sangou .b_next').click(function(){
		$('.sangou .b_pre').find('i').removeClass('stop');
		page++;
		if(page==2){
			$(this).find('i').addClass('stop');
			$('.sangou .b_next i').hover=null;
		}
		if(page==3){
			page=2;
		}
		$('.sangou .fengye_long').animate({
			'left':-992*page+'px'
		},500);
	})
	$('.sangou .b_pre').click(function(){
		$('.sangou .b_next').find('i').removeClass('stop');
		page--;
		if(page==0){
			$(this).find('i').addClass('stop');
			$('.sangou .b_pre i').hover=null;
		}
		if(page==-1){
			page=0;
		}
		$('.sangou .fengye_long').animate({
			'left':-992*page+'px'
		},500);
	})
	//三页ul 结束
	//为你推荐 三页切换
	var other_page=0;
	$('.commend .b_next').click(function(){
		$('.commend .b_pre').find('i').removeClass('stop');
		other_page++;
		if(other_page==2){
			$(this).find('i').addClass('stop');
		}
		if(other_page==3){
			other_page=2;
		}
		$('.commend .fengye_long').animate({
			'left':-1240*other_page+'px'
		},500);
	})
	$('.commend .b_pre').click(function(){
		$('.commend .b_next').find('i').removeClass('stop');
		other_page--;
		if(other_page==0){
			$(this).find('i').addClass('stop');
		}
		if(other_page==-1){
			other_page=0;
		}
		$('.commend .fengye_long').animate({
			'left':-1240*other_page+'px'
		},500);
	})
	//为你推荐 结束
	
	//内容 三页切换
	//对四个li进行循环
	$('.four_ul').find('.four').each(function(){
		//找到当前li下有几页
		var page=$(this).find('ul li').length;
		//将$(this)用Jthis存起来
		var Jthis=$(this);
		//将$(this)转换成原生js对象
		var Othis=$(this)[0];
		//设置一个总管变量存进原生js对象中
		Othis.num=0;
		//将各自的页数存进原生js对象中
		Othis.page=page;
		//找到next按钮，添加点击事件
		Jthis.find('.next').click(function(){
			//点击后让num加1
			Othis.num++;
			//同时将下面的小点的激活样式变到下一个
			$(this).next('.smalldot').find('a').eq(Othis.num).addClass('active').siblings().removeClass('active');
			//如果num==page的时候
			if(Othis.num==Othis.page){
				//让num=2，始终保持在最后一个li
				Othis.num=Othis.page-1;
			}
			//让ul滚动到相应的位置
			Jthis.find('ul').animate({
			//设置ul的left值
				'left':-296*Othis.num+'px'
			},500);
		})
		//找到pre按钮，添加点击事件
		Jthis.find('.pre').click(function(){
			//让num--；
			Othis.num--;
			//如果num==-1时，让num=0
			if(Othis.num==-1){
				Othis.num=0;
			}
			//同时找到下面的小点，让小点的样式变为激活状态
			$(this).next().next('.smalldot').find('a').eq(Othis.num).addClass('active').siblings().removeClass('active');
			//让ul滚动到指定位置
			Jthis.find('ul').animate({
				'left':-296*Othis.num+'px'
			},500);
		})
		//给小圆点加点击事件
		Jthis.find('.smalldot a').click(function(){
			//将所点击的小圆点的下标存进num中
			Othis.num=$(this).index();
			//让ul滚动到对应的left值
			Jthis.find('ul').animate({
				'left':-296*Othis.num+'px'
			},500);
			//改变所点击的小圆点的样式
			$(this).addClass('active').siblings().removeClass('active');
		})
		
		
	})
		
	
	
	
	
	//内容三页ul 结束
	
	//tab 切换
	function tab(classname){
		$(classname+' .more li').mouseenter(function(){
			var c=$(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			$(classname+' .kuang ul').eq(c).addClass('active').siblings().removeClass('active');
		})
	}
	tab('.jiadian_block');
	tab('.smart_block');
	tab('.collocation_block');
	tab('.parts_block');
	tab('.arround_block');
	//tab切换结束
	
	//返回顶部
	$('.backTop').click(function(){
		$('body,html').animate({'scrollTop':'0'},800);
	})
	
	
	
	
	
	
	
	
	
	//内容 三页切换
//	var content_page=[0,0,0,0];
//	var xb;
//	$('.four_ul').find('.four').mouseenter(function(){
//		xb=$(this).index();
//		var t=$(this);
//		//下一个
//		$(this).find('.next').click(function(){
//			content_page[xb]++;
//			$(this).next('.smalldot').find('a').eq(content_page[xb]).addClass('active').siblings().removeClass('active');
//			if(content_page[xb]==3){
//				content_page[xb]=2;
//			}
//			t.find('ul').animate({
//				'left':-296*content_page[xb]+'px'
//			},500);
//		})
//		//上一个
//		$(this).find('.pre').click(function(){
//			content_page[xb]--;
//			if(content_page[xb]==-1){
//				content_page[xb]=0;
//			}
//			$(this).next().next('.smalldot').find('a').eq(content_page[xb]).addClass('active').siblings().removeClass('active');
//			t.find('ul').animate({
//				'left':-296*content_page[xb]+'px'
//			},500);
//		})
//		//给小圆点加点击事件
//		$(this).find('.smalldot a').click(function(){
//			content_page[xb]=$(this).index();
//			t.find('ul').animate({
//				'left':-296*content_page[xb]+'px'
//			},500);
//			$(this).addClass('active').siblings().removeClass('active');
//		})
//	})
//	//当鼠标移出的时候去除点击事件
//	$('.four_ul').find('.four').mouseleave(function(){
//		$(this).find('.next').unbind('click');
//		$(this).find('.pre').unbind('click');
//		$(this).find('.smalldot a').unbind('click');
//	})
	//内容三页ul 结束
	
	
	//视频弹出
	//定义变量
	var video_index,vd,sta,totalsec,timer;
	//给li加点击事件
	$('.video .con_out ul').find('li').click(function(){
		//获取所点击的li的下标
		video_index=$(this).index();
		//获取相应下标的video标签，转成原生对象
		vd=$('video').eq(video_index)[0];
		//设置定时器，
		timer=setInterval(auto,100);
		//获得总时长
		totalsec=vd.duration;
		//计算分钟数
		var min=Math.floor(totalsec/60);
		//计算秒数
		var sec=parseInt(totalsec-min*60);
		//判断分钟数及秒数。。小于10时需要在前面加0
		if(min<10){
			if(sec<10){
				$('.control .playtime').find('.totaltime').html('0'+min+':0'+sec);
			}else{
				$('.control .playtime').find('.totaltime').html('0'+min+':'+sec);
			}
		}else{
			if(sec<10){
				$('.control .playtime').find('.totaltime').html(min+':0'+sec);
			}else{
				$('.control .playtime').find('.totaltime').html(min+':'+sec);
			}
		}
		sta=vd.paused;
		$('.video_zz').fadeIn();
		$('.video_zz').find('.video_zz_con').eq(video_index).stop().animate({
			'top':'50%',
			'opacity':'1'
		},500);
	});
	//给关闭窗口的x加点击事件
	$('.video_zz .video_zz_con .hd').find('a').click(function(){
		sta=true;
		vd.pause();
		$('.video_zz').fadeOut();
		$('.video_zz').find('.video_zz_con').stop().animate({
			'top':'-100%',
			'opacity':'0'
		},500);
	});
	//给video窗口加点击播放和停止的切换
	$('.video_zz .video_zz_con .pic video').click(change_play);
	$('.video_zz .video_zz_con .pic').find('a').click(change_play);
	//进度条的拖动
	$('.controls .long').find('.circle').mousedown(function(e){
		e.preventDefault();
		e.stopPropagation();
		var cthis=$(this);
//		获取鼠标点击位置
		var x=e.pageX;
		//获取小点本身的left值
		var left=cthis.position().left;
		//清除定时器
		clearInterval(timer);
		$(document).mousemove(function(e){
			var newx=e.pageX-x+left;
			console.log(newx);
			if(newx<0){
				newx=0;
			}else if(newx>868){
				newx=868-cthis.outerWidth();
			}
			cthis.css({'left':newx+'px'});
//			计算当前小圆点位置占进度条的百分比
			vd.currentTime=parseFloat((newx*totalsec/868),2);
			//改变底下进度条的长度
			cthis.siblings('.long_inner').css({'width':newx+'px'});
		});
		
	});
	//进度条点击事件
	$('.controls .long').click(function(e){
		var x=e.pageX;
		var w=$(this).offset().left;
		var wz=x-w;
//		计算当前小圆点位置占进度条的百分比
		vd.currentTime=parseInt(wz*totalsec/868);
//		改变底下进度条的长度
		$(this).find('.long_inner').css({'width':wz+'px'});
	})
	//鼠标抬起时清理进度条的移动事件
	$(document).mouseup(function(){
		$(this).unbind('mousemove');
		timer=setInterval(auto,100);
		
	});
	//给播放按钮添加播放暂停事件
	$('.control').find('.play').click(change_play);
	
	//音量拖动事件
	$('.vol').find('.circle').mousedown(function(e){
		e.preventDefault();
		var cthis=$(this);
		//获取鼠标点击位置
		var x=e.pageX;
		//获取小点本身的left值
		var left=$(this).position().left;
		$(document).mousemove(function(e){
			var newx=e.pageX-x+left;
			if(newx<0){
				newx=0
			}else if(newx>=100){
				newx=100-cthis.outerWidth();
			}
			cthis.css({'left':newx+'px'});
			//计算当前小圆点位置占进度条的百分比
			var vol=parseFloat((newx/100),1);
			vd.volume=vol;
			if(vol==0){
				$('.vol').find('.vol_pic').stop().css({'background-position':'0px -80px'});
			}else if(vol>0 && vol<0.5){
				$('.vol').find('.vol_pic').stop().css({'background-position':'0px -60px'});
			}else{
				$('.vol').find('.vol_pic').stop().css({'background-position':'0px -40px'});
			}
			//改变底下音量条的长度
			cthis.siblings('.vol_control').css({'width':newx+'px'});
		});
	});
	//静音事件
	$('.vol').find('.vol_pic').click(function(){
		if(vd.muted){
			vd.muted=false;
			$(this).css({'background-position':'0px -40px'});
		}else{
			vd.muted=true;
			$(this).css({'background-position':'0px -80px'});
		}
		
	})
	//播放速度
	$('.control .speed').find('i').click(function(){
		var sp=$(this).attr('speed');
		var wz=$(this).html();
		vd.playbackRate=sp;
		$(this).parent().siblings('.normal').html(wz);
	})
	$('.control .speed').mouseenter(function(){
		$(this).find('.speednum').fadeIn();
		var cz=$(this).find('.normal').text();
		$(this).find('.speednum i').each(function(){
			if($(this).text()==cz){
				$(this).hide();
			}
		})
	})
	$('.control .speed').mouseleave(function(){
		$(this).find('.speednum').hide();
		$(this).find('i').show();
	})
	//改变播放状态
	function change_play(){
		if(sta){
			$('.pic').find('a').hide();
			$('.control').find('.play').css({'background-position':'0px -20px'});
			vd.play();
			sta=false;
		}else{
			$('.pic').find('a').show();
			$('.control').find('.play').css({'background-position':'0px 0px'});
			vd.pause();
			sta=true;
		}
	}
	
	
	function auto(){
			//获取当前播放的秒数
			var cursec=vd.currentTime;
			//判断当前秒数，如果大于60转换成几分几秒，
			if(cursec>=60){
				var curmin=Math.floor(cursec/60);
				var newsec=parseInt(cursec-curmin*60);
				if(curmin<10){
					if(newsec<10){
						$('.control .playtime').find('.curtime').html('0'+curmin+':0'+newsec);
					}else{
						$('.control .playtime').find('.curtime').html('0'+curmin+':'+newsec);
					}
				}else{
					if(newsec<10){
						$('.control .playtime').find('.curtime').html(curmin+':0'+newsec);
					}else{
						$('.control .playtime').find('.curtime').html(curmin+':'+newsec);
					}
				}
				//否则就是显示秒数
			}else{
				var newsec=parseInt(cursec);
				if(newsec<10){
					$('.control .playtime').find('.curtime').html('00:0'+newsec);
				}else{
					$('.control .playtime').find('.curtime').html('00:'+newsec);
				}
			}
			//秒数走的同时也要让进度条跟着走,计算百分比
			var p=parseFloat(cursec/totalsec,2);
			//改变小圆点的位置
			$('.controls .long').find('.circle').css({'left':p*868+'px'});
			//改变底下进度条的长度
			$('.controls .long').find('.long_inner').css({'width':p*868+'px'});
		}
})
