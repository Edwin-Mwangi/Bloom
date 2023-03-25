//nav options direction
const navButtons = document.querySelectorAll('#menu li');

navButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        if(option.innerHTML == 'Intro'){
            //scroll to start page
        }
    })
} )

//scroll behavior
//tbd

//gallery behaviour
const imgOptions = document.querySelectorAll('div.header span');
const gallery = document.querySelectorAll( 'div.album .img')

imgOptions.forEach(option =>{
    option.addEventListener('click', ()=>{
        if(option.innerHTML == 'All'){
            gallery.forEach(image =>{
                if(image.classList.contains('active')){
                    image.classList.add('hide')
                    setTimeout(()=>{
                        image.classList.add('hidden')        
                        image.classList.remove('active')                     
                    }, 400)                   
                }
                setTimeout(()=>{
                    image.classList.remove('hidden','hide')                                
                }, 400) 
            })
        }
        if(option.innerHTML == 'Pretty'){
            gallery.forEach(image =>{
                image.classList.add('hide')
                setTimeout(()=>{
                    image.classList.add('hidden')
                    if(image.classList.contains('five')||image.classList.contains('four')){
                        image.classList.add('active')
                        image.classList.remove('hidden','hide')
                    }
                }, 400)
            })
        }
    

    })
})