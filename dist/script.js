const imgOptions = document.querySelectorAll('div.header span');

imgOptions.forEach(option =>{
    option.addEventListener('click', ()=>{
        console.log(`${option} clicked`)
    })
})