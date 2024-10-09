               /***slider***/
             //!-------------- GLOBAL DATA ---------------
             //DOM ----> ELEMENT - EVENT - ACTION
             var imgs = Array.from(document.querySelectorAll('.item img'))
             var lightBox = document.querySelector('.lightBox')
             var closeIcone = document.getElementById('close')
             var boxData = document.getElementById('boxData')
             var nextIcon = document.getElementById('next')
             var prevIcon = document.getElementById('prev')
             var currentIndex =0
             //!-------------- EVENTS --------------------
               for (var i =0 ; i<imgs.length ; i++){
                  imgs[i].addEventListener('click', function(e){
                     var currentTarget = e.target
                    currentIndex= imgs.indexOf(currentTarget)
                     
                     lightBox.classList.remove('d-none')
                     var currentSrc = e.target.getAttribute('src')
                      boxData.style.backgroundImage= `url(${currentSrc})` 
                     
                  })
               }
               closeIcone.addEventListener('click' , function(){
                  closeSlide()
               })
               nextIcon.addEventListener('click' , function (e) {
                    nextSlide()
                     
                 })
               prevIcon.addEventListener('click' , function (e) {
                  prevSlide()
                     
                 })

             //!-------------- FUNCTIONS -----------------
                function closeSlide(){
                  lightBox.classList.add('d-none')

                }

                function nextSlide(){
                 currentIndex++; 
                 if(currentIndex == imgs.length){
                  currentIndex=0;
               }
               currElementSrc = imgs[currentIndex].getAttribute('src')
               console.log(currElementSrc);
               boxData.style.backgroundImage=`url(${currElementSrc})`
                    
                  
                }
                function prevSlide(){
                currentIndex--; 
                 if(currentIndex < 0){
                  currentIndex=imgs.length-1;
               }
               currElementSrc = imgs[currentIndex].getAttribute('src')
               console.log(currElementSrc);
               boxData.style.backgroundImage=`url(${currElementSrc})` 
                }

                document.addEventListener('click' , function(e){
                  if(e.target == lightBox){
                     closeSlide()
                  }
                })


                document.addEventListener('keydown' , function (e) { 
                   //  console.log(e.key);
                   
                      switch (e.key){
                             case "ArrowRight":
                                nextSlide();
                                break;
                                
                             case "ArrowLeft":
                                prevSlide();
                                break;
                             case "Escape":
                                closeSlide();
                                break;

                      }
                     
                 })