//nav options direction
const navButtons = document.querySelectorAll('#menu li a');
const navLists = document.querySelectorAll('#menu li');

navButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        navLists.forEach(list =>{
            if(list.classList.contains('active')){
                list.classList.remove('active')
            }
        })
        button.parentElement.classList.add('active')
    })
} )
//activating active when certain point is reached
const sections = document.querySelectorAll('section');
console.log(sections);
window.addEventListener('scroll', checkSections);

checkSections();

function checkSections(){
    const triggerTop = window.innerHeight / 5 * 2;
    for(i=0; i<sections.length; i++){
        const sectionTop = sections[i].getBoundingClientRect().top
        if(sectionTop < triggerTop){
            if(!navLists[i].classList.contains('active') ){
                navLists[i].classList.add('active')
            }else{
                if(i != 0){
                    for(j=0; j<i; j++){
                        navLists[j].classList.remove('active')
                    }
                }
            }
        }else{
            navLists[i].classList.remove('active')
        } 
    }
}


//scroll behavior
//tbd

//gallery behaviour
const imgOptions = document.querySelectorAll('div.header span');
const gallery = document.querySelectorAll( 'div.album .img')

imgOptions.forEach(option =>{
    option.addEventListener('click', ()=>{
        if(option.innerHTML == 'All'){
            gallery.forEach(image =>{
                image.classList.add('hide')
                if(image.classList.contains('active')){
                    setTimeout(()=>{
                        image.classList.add('hidden')        
                        image.classList.remove('active')                     
                    }, 400)                   
                }//else{
                //     //rest of images were displaying 1st so had to tweak(bruteforce)
                //     image.classList.toggle('hide')
                //     setTimeout(()=>{
                //         image.classList.add('hide')                                
                //     }, 400)
                // }
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
                    image.classList.remove('hide')
                }, 400)
            })
        }
    

    })
})