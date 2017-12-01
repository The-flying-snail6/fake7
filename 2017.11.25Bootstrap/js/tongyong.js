// JavaScript Document

			function myMove(obj,attr,target,speed,fn){//obj对象 attr属性 target目标 speed步幅
				speed = (parseInt(getStyle(obj,attr))<target)?speed:-speed;	//前面判断成立，则取speed为正，不成立则speed取负--即取反
				/*var num = parseInt(getStyle(obj,attr);//将attr类型的值转化为数值
				if(num<target){
					speed = speed;
				}else{
					speed = -speed;	
				}*/
				
				clearInterval(obj.timer);
				obj.timer = setInterval(function(){
					var nowPis = parseInt(getStyle(obj,attr)) + speed;//获取当前位置（left），
					//if(abs(target-nowPis)=<abs(speed)){}
					//if((speed>(target-nowPis)&&(speed>0)) || (speed<(target-nowPis)&&(speed<0))){}
					if((target<nowPis)&&(speed>0) || (target>nowPis)&&(speed<0)){
						obj.style[attr] = target + "px";
						clearInterval(obj.timer);
						if(fn)
						fn()
					}else{
						obj.style[attr] =nowPis + "px";
					}
				},30);
			}
			function getStyle(obj,attr) {return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle(obj)[attr];}