const btns = document.getElementsByClassName("rate");
const submit = document.getElementsByClassName('submission');
const thanks = document.getElementsByClassName('container2');
const main = document.getElementsByClassName('container')
const chosen = document.getElementsByClassName('chose')




 for (let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', () =>{
        btns[i].classList.toggle('click')

          chosen[0].innerText = `You selected ${btns[i].id} out of 5`
   
})    
};


submit[0].addEventListener('click', () =>{
    main[0].style.display ='none'
    thanks[0].style.display = 'grid'
    
});