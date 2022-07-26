let burgerTrigger=document.body.querySelector('.burger__listBod');  /** -----------------(find burger) --------------------------------  */

let fatherBurger=document.body.querySelector('.header__upsideBar ');/**(parent block) */

burgerTrigger.addEventListener('click',function(){
    fatherBurger.classList.toggle('action');
    
})