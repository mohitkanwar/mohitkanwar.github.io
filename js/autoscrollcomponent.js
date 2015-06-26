   $( document ).ready(
   // TODO: correct for multiple usage in same page
                function(){
                 
                 if($(".auto-scroll-me").length>1){
                        for(var index=0;index<$(".auto-scroll-me").length;index++){
                                if(!$($(".auto-scroll-me")[index]).hasClass("auto-scroll-started")){
                                        startscrolling($($(".auto-scroll-me")[index]).children());
                                        $($(".auto-scroll-me")[index]).addClass("auto-scroll-started");
                                }
                               
                        }
                 
                 }
                 else{
                 startscrolling($(".auto-scroll-me > div"));
                 }
                 
                               
		        }
		    );
		    
		    
		    function startscrolling(array){
		     var i=0;
                                console.log("called with" +i);
		                $(array[i]).effect('slide', { direction: 'right', mode: 'show' ,duration:0});
		                setInterval(function () {
		          	
                                   $(array[i]).effect('slide', { direction: 'left', mode: 'hide' },2500,function(){
		                        i++;
		                        if(i==array.length){
		                            i=0;
		                        }
		                       
		                        $(array[i]).effect('slide', { direction: 'right', mode: 'show' },2500);
		            	  });
		                }, 7000); 
		    }
