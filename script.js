const btns = document.getElementsByClassName("rate");
const submit = document.getElementsByClassName('submission');
const thanks = document.getElementsByClassName('container2');
const main = document.getElementsByClassName('container')
const chosen = document.getElementsByClassName('chose')
let selected = false;



 for (let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', () =>{
        selected = true;
        [...btns].forEach(btn => btn.classList.remove('click'));
            btns[i].classList.add('click');
               chosen[0].innerText = `You selected ${btns[i].id} out of 5`
   
})    
};


submit[0].addEventListener('click', () =>{
    if (selected){
    main[0].style.display ='none'
    thanks[0].style.display = 'grid'  
    } else{
        alert("please give us a rating")
    }
});