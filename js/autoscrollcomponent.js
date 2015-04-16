   $( document ).ready(
                function(){
                 
                                var i=0;
                                console.log("called with" +i);
		                $($(".auto-scroll-me > div")[i]).effect('slide', { direction: 'right', mode: 'show' ,duration:3000});
		                setInterval(function () {
		          	   var effect = 'slide';
                		   var optionsright = { direction: 'right' };
		                   var optionsleft = { direction: 'left' };
                		   var duration = 1000;
                                   $($(".auto-scroll-me > div")[i]).toggle(effect, optionsleft, duration,function(){
		                        i++;
		                        if(i==$(".auto-scroll-me > div").length){
		                            i=0;
		                        }
		                       
		                        $($(".auto-scroll-me > div")[i]).toggle(effect, optionsright, duration);
		            	  });
		                }, 5000); 
		        }
		    );
