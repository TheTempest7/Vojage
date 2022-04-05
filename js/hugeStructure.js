const targetElem=document.querySelector('.headBack__rightPattern');
const littleTargetElem=document.querySelector('.headBack__rightPatternSecondChild ');



const centranlPartList=document.querySelector('.centralPart__body3');/**(list from main screen) */
window.onload=function(){
    let wholeWidth=window.screen.width;
    console.log(wholeWidth);
    let hugeWidth=document.body.querySelector('.headBack__huge').offsetWidth;
    let bigBanWidth=document.body.querySelector('.headBack__bigBan').offsetWidth;
    let tinyWidth=document.body.querySelector('.headBack__tiny').offsetWidth;
    let blurPartOfHuge=document.body.querySelector('.headBack__2').offsetWidth;

    let hugeHieght=document.body.querySelector('.headBack__huge').offsetHeight;
    hugeHieght=hugeHieght-198.5;
    console.log( hugeHieght);
console.log( blurPartOfHuge);
    let sumTrans=hugeWidth+bigBanWidth+tinyWidth;
    sumTrans=sumTrans-100;
    let sumTrans2=sumTrans-500;
    /*(next code discribe nav list position)*/
    if(wholeWidth>1080){
        centranlPartList.style.transform=`translateX(${blurPartOfHuge}px) translateY(${hugeHieght*0.4}px)`;
    }
    else  if((wholeWidth<1080)&&(wholeWidth>860)){
        console.log('i am here')
        centranlPartList.style.transform=`translateX(${blurPartOfHuge}px) translateY(${hugeHieght*0.7}px)`;
        console.log('i am and here')
    }
    else   if(wholeWidth<=860){
        centranlPartList.style.transform=`translateX(${blurPartOfHuge*1.5}px) translateY(${hugeHieght*0.75}px)`
    }
    else{
        centranlPartList.style.transform=`translateX(${blurPartOfHuge}px) translateY(${hugeHieght*0.4}px)`;
    }
    
    
    targetElem.style.transform=`translateX(${sumTrans}px) translateY(${hugeHieght}px)`;/* (elem with low z-index)*/
    /*littleTargetElem.style.transform=`translateX(0px) translateY(0px);`;*/
}
window.addEventListener('resize',function(){
    let wholeWidth=window.screen.width;
    console.log(wholeWidth);
    let hugeWidth=document.body.querySelector('.headBack__huge').offsetWidth;
    let bigBanWidth=document.body.querySelector('.headBack__bigBan').offsetWidth;
    let tinyWidth=document.body.querySelector('.headBack__tiny').offsetWidth;
    let blurPartOfHuge=document.body.querySelector('.headBack__2').offsetWidth;

    let hugeHieght=document.body.querySelector('.headBack__huge').offsetHeight;
    hugeHieght=hugeHieght-198.5;

    let sumTrans=hugeWidth+bigBanWidth+tinyWidth;
    sumTrans=sumTrans-100;/*(next code discribe nav list position)*/
    if(wholeWidth>1080){
        centranlPartList.style.transform=`translateX(${blurPartOfHuge}px) translateY(${hugeHieght*0.4}px)`;
    }
    else  if((wholeWidth<1080)&&(wholeWidth>860)){
        console.log('i am here')
        centranlPartList.style.transform=`translateX(${blurPartOfHuge}px) translateY(${hugeHieght*0.7}px)`;
        console.log('i am and here')
    }
    else   if((wholeWidth<=860)&&(wholeWidth>758)){
        centranlPartList.style.transform=`translateX(${blurPartOfHuge*1.5}px) translateY(${hugeHieght*0.75}px)`;
    }
    else   if(wholeWidth<=758){ 
        centranlPartList.style.transform=`translateX(${blurPartOfHuge*0.45}px) translateY(${hugeHieght*0.75}px)`;
    }
    else{
        centranlPartList.style.transform=`translateX(${blurPartOfHuge}px) translateY(${hugeHieght*0.4}px)`;
    }
    
    
    targetElem.style.transform=`translateX(${sumTrans}px) translateY(${hugeHieght}px)`;/* (elem with low z-index)*/

})



            

