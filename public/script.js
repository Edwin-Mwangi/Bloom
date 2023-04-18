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

//activating click on small screens
const smallMenu = document.getElementById('smallmenu');
const closeNav = document.getElementById('xmark');
const nav = document.querySelector('nav');

smallMenu.addEventListener('click', ()=>{
    nav.classList.add('in');
})
closeNav.addEventListener('click', ()=>{
    nav.classList.remove('in');
})
//activating active when certain point is reached
const sections = document.querySelectorAll('section');
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


//hover on gallery images behavior

const imgData = [
     {
        title: 'Lavenders',
        text: 'The scent pulls you',
        tall: true
    },
    {
        title: 'Lavenders',
        text: 'Bringing color to your world',
        tall: false
    },
    {
        title: 'Tulips',
        text: 'Blooming in its own time',
        tall: false
    },
    {
        title: 'Roses',
        text: 'Take time to smell the roses',
        tall: true
    },
    {
        title: 'Roses',
        text: 'Beautiful even as they fade',
        tall: true
    },
    {
        title: 'Tulips',
        text: 'Medicine for the soul ',
        tall: false,
    }   
]
const images = document.querySelectorAll('.album div.img');
images.forEach((img, index) => {
        img.innerHTML = `<div id="hover"></div>
        <div class="imgtext absolute translate-y-20 opacity-0 left-1/2 -translate-x-1/2 text-center">
           <i></i>
           <h4 class="relative text-xl mx-auto font-medium bg-orange-600 rounded-sm w-fit px-2">${imgData[index].title}</h4>
           <em class="whitespace-nowrap text-gray-500">${imgData[index].text}</em>
        </div>`;
    })
    


//gallery behaviour
const imgOptions = document.querySelectorAll('div.header span');
const gallery = document.querySelectorAll( 'div.album .img')

imgOptions.forEach(option =>{
    option.addEventListener('click', ()=>{
        if(option.innerHTML == 'All'){
            gallery.forEach(image =>{
                    image.classList.add('hide')
                    setTimeout(()=>{
                        image.classList.remove('hidden')
                    },400)
                // hidden and hide must be at diff times..bruteforce
                setTimeout(()=>{
                    if(image.classList.contains('active')){
                        image.classList.remove('active')
                    }
                    image.classList.remove('hide')
                },410)
            })
        }
        if(option.innerHTML == 'Roses'){
            gallery.forEach(image =>{
                image.classList.add('hide')
                setTimeout(()=>{
                    image.classList.add('hidden')
                    if(image.classList.contains('five')||image.classList.contains('four')){
                        image.classList.add('active')
                        image.classList.remove('hidden')
                        setTimeout(()=>{
                            image.classList.remove('hide')
                        }, 410)
                    }
                    
                }, 400)
            })
        }
        if(option.innerHTML == 'Tulips'){
            gallery.forEach(image =>{
                image.classList.add('hide')
                setTimeout(()=>{
                    image.classList.add('hidden')
                    if(image.classList.contains('three')||image.classList.contains('six')){
                        image.classList.add('active')
                        image.classList.remove('hidden')
                    }
                    
                }, 400)
                setTimeout(()=>{
                    image.classList.remove('hide')
                }, 410)
            })
        }
        if(option.innerHTML == 'Lavender'){
            gallery.forEach(image =>{
                image.classList.add('hide')
                setTimeout(()=>{
                    image.classList.add('hidden')
                    if(image.classList.contains('one')||image.classList.contains('two')){
                        image.classList.add('active')
                        image.classList.remove('hidden')
                    }
                    setTimeout(()=>{
                        image.classList.remove('hide')
                    }, 410)
                }, 400)
            })
        }
    })
})