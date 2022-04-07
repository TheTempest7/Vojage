let captionList=document.body.querySelector('.Table__span');

captionList.addEventListener('click',function(){
    let listBody=document.body.querySelector('.Table__leftList ');
    listBody.classList.toggle('show');
 
    
})


document.addEventListener('click',(e)=>{
    let listBody=document.body.querySelector('.Table__leftList ');
    let floatMenuBody=document.body.querySelector('.leftList__body');
    let ourSpan=document.body.querySelector('.Table__span');
    let closeLink=document.body.querySelectorAll('.leftList__link');
    console.log(closeLink);
console.log(e.target.closest('.leftList__body'));

for(let i=0;i<closeLink.length;i++){
let itemLink=closeLink[i];
if(((e.target.closest('.leftList__body')===floatMenuBody)&&(e.target.closest('.leftList__link')!==closeLink[i]))||(e.target===ourSpan)){
    console.log(e.target);
}
else{
    listBody.classList.remove('show');
}
}
/*if(((e.target.closest('.leftList__body')===floatMenuBody)&&(e.target.closest('.leftList__link')!==closeLink))||(e.target===ourSpan)){
    console.log(e.target);
}
else{
    listBody.classList.remove('show');
}*/


})
