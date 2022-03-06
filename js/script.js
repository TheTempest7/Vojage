let listPart = document.querySelectorAll('.leftList__arrow');
console.log(listPart);
let explFather=document.querySelector('.Explanation__body');
let explPart=explFather.children;
console.log(explPart);
const elemNumbers={};

function Indication(e){
    let alreadyRun=document.querySelector('.leftList__indicated');
    alreadyRun.classList.remove('leftList__indicated');
    e.target.parentNode.parentNode.parentNode.classList.add('leftList__indicated');
}

function Disconnection(e){
    let range=e.target.parentNode.parentNode.parentNode.classList;
    console.log(range);
    let thatNumber= +(e.target.id);
    if(range[1]!=='leftList__indicated'){
        for(i=0;i<explPart.length;i++){
            item=  explPart[i];
            item.classList.add('explanation__disable');
            
        }
        explPart[thatNumber].classList.remove('explanation__disable');
    }
    else{
        console.log('already pressed')    }
}

for( let i=0;i < listPart.length;i++){
    let item = listPart[i];
    let point=explPart[i];
    item.addEventListener('click', Disconnection);
    item.addEventListener('click', Indication);
    
}



/**let l=document.querySelector('.Explanation__item');
        l.classList.add('explanation__disable'); */