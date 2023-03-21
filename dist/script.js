const imgOptions = document.querySelectorAll('div.header span');
const gallery = document.querySelectorAll( 'div.album .img')

imgOptions.forEach(option =>{
    option.addEventListener('click', ()=>{
        if(option.innerHTML == 'All'){
            gallery.forEach(image =>{
                image.classList.remove('active', 'hidden')
            })
        }
        if(option.innerHTML == 'Pretty'){
            gallery.forEach(image =>{
                image.classList.add('hidden')
                if(image.classList.contains('five')||image.classList.contains('four')){
                    image.classList.add('active')
                    image.classList.remove('hidden')
                }
            })
        }
    

    })
})