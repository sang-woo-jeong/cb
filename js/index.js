$(document).ready(function(){
				
					
	var mh = document.body.clientHeight;					
	
	
	
	var e = 0;
		
	$(window).scroll(function () {
		var sl = Math.ceil($("html, body").scrollTop());
			
			
			if(sl==0){	
				
				$(".gnb ul li").stop().animate({"height":5+"px"});
				$(".gnb ul li").eq(0).stop().animate({"height":50+"px"});
			}
			
			else if(sl==mh*1){
				
				$(".gnb ul li").stop().animate({"height":5+"px"});
				$(".gnb ul li").eq(1).stop().animate({"height":50+"px"});
				
				$('.sec1 .sc').animate({"opacity":1},400,function(){
					$('.sec1 .secondheading').animate({"opacity":1},400,function(){
						$('.sec1 .thirdheading').animate({'opacity':1},400,function(){
							$('.sec1 .man').animate({'opacity':1,'left':-100+'px'},400,function(){
								$('.sec1 nav').animate({'opacity':1},400);
							})
						});
					});
				});
			
				$(".sec1 nav li").eq(3).on("click",function(){
				$(".sec1 nav li").stop().animate({"width":20+"px"});
				$(".sec1 nav li").eq(3).stop().animate({"width":75+"px"});
				$(".sec1 .sc ul").stop().animate({"margin-left":-0*750+"px"});
				$(".sec1 .contain .swrap").stop().animate({"margin-top":-70*0});
		
	});
			
			}
			
			else if(sl==mh*2){			
				$(".gnb ul li").stop().animate({"height":5+"px"});
				$(".gnb ul li").eq(2).stop().animate({"height":50+"px"});
				
				$(".sec2 .box1").animate({"opacity":1},400,function(){
					$(".sec2 .box2").animate({"opacity":1},400,function(){
						$(".sec2 .primaryheading").animate({"opacity":1},400,function(){
							$(".sec2 .secondheading").animate({"opacity":1},400,function(){
								$(".sec2 .thirdheading").animate({"opacity":1},400,function(){
									$(".sec2 .bodytext").animate({"opacity":1},400);
								});
							})
						})
					});
				});			
			}
			
			else if(sl==mh*3){			
				$(".gnb ul li").stop().animate({"height":5+"px"});
				$(".gnb ul li").eq(3).stop().animate({"height":50+"px"});
				
				$(".sec3 .wrap1-0").stop().animate({"opacity":1},400,function(){
					$(".sec3 .wrap2-0").stop().animate({"opacity":1},400,function(){
						$(".sec3 .a-2-1").stop().animate({"opacity":1},400,function(){
							$(".sec3 ul li").stop().animate({"opacity":1},400,function(){
								$(".sec3 .a1-1").stop().animate({"opacity":1},400);
							});
						});
					});
				})
				
				$(".sec3 ul li").on("click",function(){
				
					var i = $(this).index();
					
					$(".sec3 ul li").css({"background":"none"});
					$(".sec3 ul li img").css({"opacity":0});
					$(".sec3 ul li").eq(i).css({"background":"#ddd"});
					$(".sec3 ul li img").eq(i).css({"opacity":1});
					
					if(i==0){
						$(".sec3 .contain .wrap1").css({"opacity":0});
						$(".sec3 .contain .wrap2").css({"opacity":0});
						$(".sec3 .contain .a-2").stop().css({"opacity":0});
						$(".sec3 .contain .wrap1-0").stop().animate({"opacity":1},400,function(){
							$(".sec3 .contain .wrap2-0").stop().animate({"opacity":1},400,function(){
								$(".sec3 .contain .a-2-1").stop().animate({"opacity":1},400);
							});
						});
						
					}
					
					else if(i==1){
						$(".sec3 .contain .wrap1").css({"opacity":0});
						$(".sec3 .contain .wrap2").css({"opacity":0});
						$(".sec3 .contain .a-2").css({"opacity":0});
						$(".sec3 .contain .wrap1-1").stop().animate({"opacity":1},400,function(){
							$(".sec3 .contain .wrap2-1").stop().animate({"opacity":1},400,function(){
								$(".sec3 .contain .a-2-2").stop().animate({"opacity":1},400);
							});
						});
						
					}
					
					else if(i==2){
						$(".sec3 .contain .wrap1").css({"opacity":0});
						$(".sec3 .contain .wrap2").css({"opacity":0});
						$(".sec3 .contain .a-2").css({"opacity":0});
						$(".sec3 .contain .wrap1-2").stop().animate({"opacity":1},400,function(){
							$(".sec3 .contain .wrap2-2").stop().animate({"opacity":1},400,function(){
								$(".sec3 .contain .a-2-3").stop().animate({"opacity":1},400);
							});
						});
						
					}
					
					else if(i==3){
						$(".sec3 .contain .wrap1").css({"opacity":0});
						$(".sec3 .contain .wrap2").css({"opacity":0});
						$(".sec3 .contain .a-2").css({"opacity":0});
						$(".sec3 .contain .wrap1-3").stop().animate({"opacity":1},400,function(){
							$(".sec3 .contain .wrap2-3").stop().animate({"opacity":1},400,function(){
								$(".sec3 .contain .a-2-4").stop().animate({"opacity":1},400);
							});
						});
					}
					
					else if(i==4){
						$(".sec3 .contain .wrap1").css({"opacity":0});
						$(".sec3 .contain .wrap2").css({"opacity":0});
						$(".sec3 .contain .a-2").css({"opacity":0});
						$(".sec3 .contain .wrap1-4").stop().animate({"opacity":1},400,function(){
							$(".sec3 .contain .wrap2-4").stop().animate({"opacity":1},400,function(){
								$(".sec3 .contain .a-2-5").stop().animate({"opacity":1},400);
							});
						});
					}
					
					else if(i==5){
						$(".sec3 .contain .wrap1").css({"opacity":0});
						$(".sec3 .contain .wrap2").css({"opacity":0});
						$(".sec3 .contain .a-2").css({"opacity":0});
						$(".sec3 .contain .wrap1-5").stop().animate({"opacity":1},400,function(){
							$(".sec3 .contain .wrap2-5").stop().animate({"opacity":1},400,function(){
								$(".sec3 .contain .a-2-6").stop().animate({"opacity":1},400);
							});
						});
					}
					
					else if(i==6){
						$(".sec3 .contain .wrap1").css({"opacity":0});
						$(".sec3 .contain .wrap2").css({"opacity":0});
						$(".sec3 .contain .a-2").css({"opacity":0});
						$(".sec3 .contain .wrap1-6").stop().animate({"opacity":1},400,function(){
							$(".sec3 .contain .wrap2-6").stop().animate({"opacity":1},400,function(){
								$(".sec3 .contain .a-2-7").stop().animate({"opacity":1},400);
							});
						});
					}
					
					else if(i==7){
						$(".sec3 .contain .wrap1").css({"opacity":0});
						$(".sec3 .contain .wrap2").css({"opacity":0});
						$(".sec3 .contain .a-2").css({"opacity":0});
						$(".sec3 .contain .wrap1-7").stop().animate({"opacity":1},400,function(){
							$(".sec3 .contain .wrap2-7").stop().animate({"opacity":1},400,function(){
								$(".sec3 .contain .a-2-8").stop().animate({"opacity":1},400);
							});
						});
					}
					
					else if(i==8){
						$(".sec3 .contain .wrap1").css({"opacity":0});
						$(".sec3 .contain .wrap2").css({"opacity":0});
						$(".sec3 .contain .a-2").css({"opacity":0});
						$(".sec3 .contain .wrap1-8").stop().animate({"opacity":1},400,function(){
							$(".sec3 .contain .wrap2-8").stop().animate({"opacity":1},400,function(){
								$(".sec3 .contain .a-2-9").stop().animate({"opacity":1},400);
							});
						});
					}
					
					else if(i==9){
						$(".sec3 .contain .wrap1").css({"opacity":0});
						$(".sec3 .contain .wrap2").css({"opacity":0});
						$(".sec3 .contain .a-2").css({"opacity":0});
						$(".sec3 .contain .wrap1-9").stop().animate({"opacity":1},400,function(){
							$(".sec3 .contain .wrap2-9").stop().animate({"opacity":1},400,function(){
								$(".sec3 .contain .a-2-10").stop().animate({"opacity":1},400);
							});
						});
					}
					
					else if(i==10){
						$(".sec3 .contain .wrap1").css({"opacity":0});
						$(".sec3 .contain .wrap2").css({"opacity":0});
						$(".sec3 .contain .a-2").css({"opacity":0});
						$(".sec3 .contain .wrap1-10").stop().animate({"opacity":1},400,function(){
							$(".sec3 .contain .wrap2-10").stop().animate({"opacity":1},400,function(){
								$(".sec3 .contain .a-2-11").stop().animate({"opacity":1},400);
							});
						});
					}
					
					else if(i==11){
						$(".sec3 .contain .wrap1").css({"opacity":0});
						$(".sec3 .contain .wrap2").css({"opacity":0});
						$(".sec3 .contain .a-2").css({"opacity":0});
						$(".sec3 .contain .wrap1-11").stop().animate({"opacity":1},400,function(){
							$(".sec3 .contain .wrap2-11").stop().animate({"opacity":1},400,function(){
								$(".sec3 .contain .a-2-12").stop().animate({"opacity":1},400);
							});
						});
					}
					
				});
			}
			
			else if(sl==mh*4){			
				$(".gnb ul li").stop().animate({"height":5+"px"});
				$(".gnb ul li").eq(4).stop().animate({"height":50+"px"});
				
				$(".sec4 .box1").animate({"opacity":1},400,function(){
					$(".sec4 .box2").animate({"opacity":1},400,function(){
						$(".sec4 .primaryheading").animate({"opacity":1},400,function(){
							$(".sec4 .secondheading").animate({"opacity":1},400,function(){
								$(".sec4 .thirdheading").animate({"opacity":1},400,function(){
									$(".sec4 .bodytext").animate({"opacity":1},400);
								});
							})
						})
					});
				});	
			}
			
			else if(sl==mh*5){			
				$(".gnb ul li").stop().animate({"height":5+"px"});
				$(".gnb ul li").eq(5).stop().animate({"height":50+"px"});
				
				$(".sec5 .wrap1").animate({"opacity":1,"left":0},800);
				
				$(".sec5 .wrap2").animate({"opacity":1,"right":0},800);
				
				$(".sec5 .o3").animate({"opacity":1,"top":"50%"},800);
					

			}
			
			else if(sl==mh*6){			
				$(".gnb ul li").stop().animate({"height":5+"px"});
				$(".gnb ul li").eq(6).stop().animate({"height":50+"px"});
				
				$(".sec6 .textwrap").stop().animate({"opacity":1,"margin-top":0},800);
				$(".sec6 .imgwrap li").stop().animate({"opacity":1,"margin-top":0},800);
			}
			
			else if(sl==mh*7){			
				$(".gnb ul li").stop().animate({"height":5+"px"});
				$(".gnb ul li").eq(7).stop().animate({"height":50+"px"});
			};
	}); 
		
	$("header .box1").animate({"opacity":1},400,function(){
		$("header .box2").animate({"opacity":1},400,function(){
			$("header .primaryheading").animate({"opacity":1},400,function(){
				$("header .secondheading").animate({"opacity":1},400,function(){
					$("header .thirdheading").animate({"opacity":1},400,function(){
						$("header .bodytext").animate({"opacity":1},400);
					});
				})
			})
		});
	});
	
	$("header .box1").animate({"transform":"translateX(-50%) rotateZ(90deg)"});
		
	var e = 0;	
		
	$(".sec").on("mousewheel",function(event,delta){
	event.preventDefault();
	
	
		if(delta<0){
			e++;
			$("html,body").stop().animate({scrollTop:e*mh},800);
			
		}
		else if(delta>0){
			e--;
			$("html,body").stop().animate({scrollTop:e*mh},800);
		};
		
		if(e>8){
			e=8;
		}
		else if(e<0){
			e=0;
		};
							
	});
	
	$(".gnb ul li").on("click", function(){
		var i = $(this).index();
		
		$("html,body").stop().animate({scrollTop:i*mh},{duration: 800, complete: function (){}});
		e = i ;
	});
	
	
	
	
	
	$(".sec1 nav li").eq(2).on("click",function(){
		$(".sec1 nav li").stop().animate({"width":20+"px"});
		$(".sec1 nav li").eq(2).stop().animate({"width":75+"px"});
		$(".sec1 .sc ul").animate({"margin-left":-1*750+"px"});
		$(".sec1 .contain .swrap").stop().animate({"margin-top":-70*1});
		
	});
	
	$(".sec1 nav li").eq(1).on("click",function(){
		$(".sec1 nav li").stop().animate({"width":20+"px"});
		$(".sec1 nav li").eq(1).stop().animate({"width":75+"px"});
		$(".sec1 .sc ul").animate({"margin-left":-2*750+"px"});
		$(".sec1 .contain .swrap").stop().animate({"margin-top":-70*2});
	});
	
	$(".sec1 nav li").eq(0).on("click",function(){	
		$(".sec1 nav li").stop().animate({"width":20+"px"});
		$(".sec1 nav li").eq(0).stop().animate({"width":75+"px"});
		$(".sec1 .sc ul").animate({"margin-left":-3*750+"px"});
		$(".sec1 .contain .swrap").stop().animate({"margin-top":-70*3});
	});
					
					
				
					
});