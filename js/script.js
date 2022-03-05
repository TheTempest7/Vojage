let listPart = document.querySelectorAll('.leftList__arrow');
console.log(listPart);
let explPart=document.querySelectorAll('.Explanation__item');
console.log(explPart);

function Indication(e){
    console.log(e.target);
    let alreadyRun=document.getElementsByClassName('leftList__indicated');
    console.log(alreadyRun);
    alreadyRun[0].classList.remove('leftList__indicated');
    e.target.parentNode.parentNode.parentNode.classList.add('leftList__indicated');
}

function Disconnection(e){
    let range=e.target.parentNode.parentNode.parentNode.classList;
    console.log(range);
    if(range[1]==='leftList__indicated'){
        let l=document.querySelector('.Explanation__item');
        l.classList.add('explanation__disable');}
    
}

for( let i=0;i < listPart.length;i++){
    let item = listPart[i];
    let point=explPart[i];
    console.log(explPart[i]);
    item.addEventListener('click', Indication);
    item.addEventListener('click', Disconnection);
}
