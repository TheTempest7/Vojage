function fisrt(){
    let firstStructure= document.querySelector('.linerDistingue__patterns');
    let expand =setInterval(function(){
        firstStructure.classList.add('moveItem');
    },5000)
    
    setTimeout(function(){
        let shrink =setInterval(function(){
            firstStructure.classList.remove('moveItem');
        },5000)
    },2500)
}
fisrt();



function second(){
    let secondStructure= document.querySelector('.linerDistingue3__patterns');
    let expandSecond =setInterval(function(){
        secondStructure.classList.add('moveItem');
    },5000)
    
    setTimeout(function(){
        let shrinkSecond =setInterval(function(){
            secondStructure.classList.remove('moveItem');
        },5000)
    },2500)
}
second();









