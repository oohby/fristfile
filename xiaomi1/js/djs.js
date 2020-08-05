$(function(){
	setInterval(djs,1000);
	
	
	function djs(){
		var time=new Date();
		var year=time.getFullYear();
		var month=time.getMonth();
		var day=time.getDate();
		var hour=time.getHours();
		var mintue=time.getMinutes();
		var currtime=time.getTime();
		if(hour%2){
			//如果是奇数则加1
			hour=hour+1;
			cha(time,year,month,day,hour);
		}
		else{
			//如果是偶数判断是否超过半小时了，如果是则加2，如果不是则不加
			if(mintue>30){
				hour=hour+2;
				cha(time,year,month,day,hour);	
			}else{//否则计算与30分钟的时间差
					var newdate=new Date(year,month,day,hour,30,0);
					//计算相差毫秒数
					var ms=newdate.getTime()-time.getTime();
					//计算分钟数
					var m=parseInt(ms/(60*1000));
					//计算秒数
					var s=parseInt((ms-m*(60*1000))/1000);
					$('.djs').find('.wz').html('距离结束还有');
					$('.djs').find('.hour').html('00');
					if(m<10){
						$('.djs').find('.min').html('0'+m);
					}
					else{
						$('.djs').find('.min').html(m);
					}
					if(s<10){
						$('.djs').find('.sec').html('0'+s);
					}else{
						$('.djs').find('.sec').html(s);
					}
			}	
		}
		$('.time').html(hour+':00 场');	
	}
	function cha(time,year,month,day,hour,min){
		var newdate=new Date(year,month,day,hour,0,0);
		//计算相差毫秒数
		var ms=newdate.getTime()-time.getTime();
		//计算分钟数
		var m=parseInt(ms/(60*1000));
		//计算秒数
		var s=parseInt((ms-m*(60*1000))/1000);
		$('.djs').find('.wz').html('距离开始还有');
				$('.djs').find('.hour').html('00');
				if(m<60){
					$('.djs').find('.min').html(m);
				}
				if(m<10){
					$('.djs').find('.min').html('0'+m);
				}
				if(m>60){
					m=m-60;
					$('.djs').find('.hour').html('01');
					if(m<10){
						$('.djs').find('.min').html('0'+m);
					}else{
						$('.djs').find('.min').html(m);
					}
					
				}
				if(s<10){
					$('.djs').find('.sec').html('0'+s);
				}else{
					$('.djs').find('.sec').html(s);
				}
	}
})

//判断当前的小时数
//如果是偶数再判断分钟数,如果分钟数>30分钟,则计算与下一个偶数时间的差
//如果分钟数<30则,计算还有多久结束
//
//如果是奇数,则计算与下个偶数的时间差