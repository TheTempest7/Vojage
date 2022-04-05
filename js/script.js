let listPart = document.querySelectorAll('.leftList__arrow');

let explPart=document.getElementsByClassName('Explanation__item');

const elemNumbers={};



function Disconnection(e){
    let listPart = document.querySelectorAll('.leftList__arrow');

    let explPart=document.getElementsByClassName('Explanation__item');

    let range=e.target.parentNode.parentNode.parentNode.classList;
    console.log( range[1]);
    let thatNumber= +(e.target.id);
    let alreadyRun=document.querySelector('.leftList__indicated');
    console.log(thatNumber);
    console.log(alreadyRun);

    if(range[1]!=='leftList__indicated'){
        for(i=0;i<explPart.length;i++){
            item=  explPart[i];
            console.log(item);
            item.classList.add('explanation__disable');
            
        }
        explPart[thatNumber].classList.remove('explanation__disable');
    }
    else{
        console.log('already pressed')    }
    
       
        alreadyRun.classList.remove('leftList__indicated');
        e.target.parentNode.parentNode.parentNode.classList.add('leftList__indicated');
        
}

for( let i=0;i < listPart.length;i++){
    let item = listPart[i];
    
    item.addEventListener('click', Disconnection);
   
    
}



/**let l=document.querySelector('.Explanation__item');
        l.classList.add('explanation__disable');
        function Indication(e){
    let alreadyRun=document.querySelector('.leftList__indicated');
    alreadyRun.classList.remove('leftList__indicated');
    e.target.parentNode.parentNode.parentNode.classList.add('leftList__indicated');
} 



let explFather=document.querySelector('.Explanation__body');
let explPart=explFather.children;*/