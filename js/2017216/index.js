jQuery(function ($) {
    if ($(".slide-pic").length > 0) {
        var defaultOpts = { interval: 5000, fadeInTime: 300, fadeOutTime: 200 };
        var _titles = $("ul.slide-txt li");
        var _titles_bg = $("ul.op li");
        var _bodies = $("ul.slide-pic li");
        var _count = _titles_bg.length;
        var _current = 0;
        var _intervalID = null;
        var stop = function () { window.clearInterval(_intervalID); };
        var slide = function (opts) {
            if (opts) {
                _current = opts.current || 0;
            } else {
                _current = (_current >= (_count - 1)) ? 0 : (++_current);
            };
            _bodies.filter(":visible").fadeOut(defaultOpts.fadeOutTime, function () {
                _bodies.eq(_current).fadeIn(defaultOpts.fadeInTime);
                _bodies.removeClass("cur").eq(_current).addClass("cur");
            });
            _titles.removeClass("cur").eq(_current).addClass("cur");
            _titles_bg.removeClass("cur").eq(_current).addClass("cur");
        };
        var go = function () {
            stop();
            _intervalID = window.setInterval(function () { slide(); }, defaultOpts.interval);
        };
        var itemMouseOver = function (target, items) {
            stop();
            var i = $.inArray(target, items);
            slide({ current: i });
        };
        _titles.hover(function () { if ($(this).attr('class') != 'cur') { itemMouseOver(this, _titles); } else { stop(); } }, go);
        _bodies.hover(stop, go);
        go();
    }
	$('.selectHeader ul li').on('click',function(){
		var _index=$(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.course').eq(_index).addClass('current').siblings().removeClass('current');	
	})	
});
var course=document.getElementsByClassName('course')[0];
var coursesort=course.getElementsByClassName('coursesort');
var table=document.getElementsByClassName('table')[0];
var courseTable=table.getElementsByClassName('courseTable');
var len=coursesort.length;
for(var i=0;i<len;i++){
	coursesort[i].index=i;
	coursesort[i].onclick=function(){
		var _index=this.index;
		for(var j=0;j<len;j++){
			coursesort[j].className="coursesort";
			courseTable[j].className="courseTable ";
		}
		coursesort[_index].className="coursesort active";
		courseTable[_index].className="courseTable active";
	}
}
var course1=document.getElementsByClassName('course')[1];
var coursesort1=course1.getElementsByClassName('coursesort');
var table1=document.getElementsByClassName('table')[1];
var courseTable1=table1.getElementsByClassName('courseTable');
var len1=coursesort1.length;
for(var i=0;i<len1;i++){
	coursesort1[i].index=i;
	coursesort1[i].onclick=function(){
		var _index=this.index;
		for(var j=0;j<len1;j++){
			coursesort1[j].className="coursesort";
			courseTable1[j].className="courseTable ";
		}
		coursesort1[_index].className="coursesort active";
		courseTable1[_index].className="courseTable active";
	}
}

var course2=document.getElementsByClassName('course')[2];
var coursesort2=course2.getElementsByClassName('coursesort');
var table2=document.getElementsByClassName('table')[2];
var courseTable2=table2.getElementsByClassName('courseTable');
var len2=coursesort2.length;
for(var i=0;i<len2;i++){
	coursesort2[i].index=i;
	coursesort2[i].onclick=function(){
		var _index=this.index;
		for(var j=0;j<len2;j++){
			coursesort2[j].className="coursesort";
			courseTable2[j].className="courseTable ";
		}
		coursesort2[_index].className="coursesort active";
		courseTable2[_index].className="courseTable active";
	}
}

var course3=document.getElementsByClassName('course')[3];
var coursesort3=course3.getElementsByClassName('coursesort');
var table3=document.getElementsByClassName('table')[3];
var courseTable3=table3.getElementsByClassName('courseTable');
var len3=coursesort3.length;
for(var i=0;i<len3;i++){
	coursesort3[i].index=i;
	coursesort3[i].onclick=function(){
		var _index=this.index;
		for(var j=0;j<len3;j++){
			coursesort3[j].className="coursesort";
			courseTable3[j].className="courseTable ";
		}
		coursesort3[_index].className="coursesort active";
		courseTable3[_index].className="courseTable active";
	}
}
var course4=document.getElementsByClassName('course')[4];
var coursesort4=course4.getElementsByClassName('coursesort');
var table4=document.getElementsByClassName('table')[4];
var courseTable4=table4.getElementsByClassName('courseTable');
var len4=coursesort4.length;
for(var i=0;i<len4;i++){
	coursesort4[i].index=i;
	coursesort4[i].onclick=function(){
		var _index=this.index;
		for(var j=0;j<len4;j++){
			coursesort4[j].className="coursesort";
			courseTable4[j].className="courseTable ";
		}
		coursesort4[_index].className="coursesort active";
		courseTable4[_index].className="courseTable active";
	}
}
//文字的无缝滚动
var speed=40 ;
var demo=document.getElementById("evaluate"); 
var demo2=document.getElementById("evaluate2"); 
var demo1=document.getElementById("evaluate1"); 

demo2.innerHTML=demo1.innerHTML; 
function Marquee(){ 
	if(demo2.offsetHeight-demo.scrollTop<=0) 
	  demo.scrollTop-=demo2.offsetHeight; 
	else{ 
	  demo.scrollTop++ ;
	} 
} 
var MyMar=setInterval(Marquee,speed) 
demo.onmouseover=function() {clearInterval(MyMar)} 
demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)} 

