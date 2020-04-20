
		 
		 $(document).ready(function(){
			 
			 
		$('.navbar-nav .nav-item').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
		

		$('.bottom-scroll').click(function(){
		
			$("html,body").animate({
			
				scrollTop:0
				
			},1000);
		});
		
		
		$(window).scroll(function(){
			var ourWindow = $(this).scrollTop();
			
			if(ourWindow<200){
			
			$('.bottom-scroll').fadeOut();
			
			}else{
				$('.bottom-scroll').fadeIn();
			}
			
			//Fixed Menu area
			
			if(ourWindow>100){
				$('body').addClass('fixed');
			}else{
				
				$('body').removeClass('fixed');
			}
		});
		
		
		
		
		
		
		  var mixer = mixitup('.gallery');
         
         var mixer = mixitup(containerEl, {
             selectors: {
                 control: '[amarissa]',
         
             }
         
         });			 
			 
			 
		 });