const targetElem=document.querySelector('.headBack__rightPattern');
const littleTargetElem=document.querySelector('.headBack__rightPatternSecondChild ');



const centranlPartList=document.querySelector('.centralPart__body3');/**(list from main screen) */
window.onload=function(){
    let wholeWidth=window.screen.width;
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
        centranlPartList.style.transform=`translateX(${blurPartOfHuge}px) translateY(${hugeHieght*0.7}px)`;
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


    /**-----(margin for main block)------- */
const mainBlock=document.body.querySelector('.main');

    if((wholeWidth<1440)&&(wholeWidth>1080)){
    mainBlock.style.marginTop=`${hugeHieght*0.35}px`
}
    else if((wholeWidth<=1080)&&(wholeWidth>759)){
        mainBlock.style.marginTop=`${hugeHieght*0.6}px`
    }
    else if((wholeWidth<=759)&&(wholeWidth>=570)){
        mainBlock.style.marginTop=`${hugeHieght*0.8}px`
    }
    else if((wholeWidth<570)&&(wholeWidth>360)){
        mainBlock.style.marginTop=`${hugeHieght*0.1}px`
    }
    else if(wholeWidth<=360){
        mainBlock.style.marginTop=`${hugeHieght*0.4}px`
    }
    else if(wholeWidth>1440){
        mainBlock.style.marginTop=`${hugeHieght*0.4}px`
    }
    /**----(width and transform for route structure)---- */
    let alongLine=document.body.querySelector('.map__bigPartThirdChild');
    let rotateLine=document.body.querySelector('.map__bigPartFoursChild');  
    if((wholeWidth<1230)&&(wholeWidth>=1145)){
        let differWholeWidth=1230-wholeWidth;
        alongLine.style.width=`${294-differWholeWidth}px`;
        rotateLine.style.transform=`rotate(90deg) translateX(-134px) translateY(${-1161+differWholeWidth}px)`;
    }
    else if((wholeWidth<1145)&&(wholeWidth>=759)){
        alongLine.style.width=`${294}px`;
        rotateLine.style.transform=`rotate(90deg) translateX(-134px) translateY(-1161px)`;
    }
    else if((wholeWidth<759)&&(wholeWidth>=674)){
        let differWholeWidth=759-wholeWidth;
        alongLine.style.width=`${294-differWholeWidth}px`;
        rotateLine.style.transform=`rotate(90deg) translateX(-134px) translateY(${-1161+differWholeWidth}px)`;
    }
    else if(wholeWidth<674){
        console.log(1231234);
        let differWholeWidth=674-wholeWidth;
        let upLine=document.body.querySelector('.map__littlePartFirstChild');
        let downLine=document.body.querySelector('.map__bigPartFirstChild');

        /**(next code seeking parties of tracery and translating them) */
        /**(up part with lower quantity of details) */
        let secondSmall=document.body.querySelector('.map__littlePartSecondChild');
        let thirdSmall=document.body.querySelector('.map__littlePartThirdChild');
        let fourthSmall=document.body.querySelector('.map__littlePartFoursChild');
        
        secondSmall.style.transform=`rotate(90deg) translate(-211px, ${-936+differWholeWidth}px)`;
        thirdSmall.style.transform=`translate(${952-differWholeWidth}px,-227px)`;
        fourthSmall.style.transform=`translate(${995-differWholeWidth}px,-236px)`; 
         /**(up part with lower quantity of details) */
          /**(down part with biger quantity of details) */
            let secondBig=document.body.querySelector('.map__bigPartSecondChild');
            let thirdBig=document.body.querySelector('.map__bigPartThirdChild');
            let fourthBig=document.body.querySelector('.map__bigPartFoursChild');
            let fivthBig=document.body.querySelector('.map__bigPartFivthChild');
            let sixthBig=document.body.querySelector('.map__bigPartSixthChild');


            secondBig.style.transform=`rotate(90deg) translate(-98.5px, ${-833+differWholeWidth}px)`;
            thirdBig.style.transform=`translate(${878.5-differWholeWidth}px, -145px)`;
            fourthBig.style.transform=`rotate(90deg) translateX(-134px) translateY(${-1076.5+differWholeWidth}px)`;
            fivthBig.style.transform=`rotate(90deg) translate(-166px, ${-981+differWholeWidth}px)`;
            sixthBig.style.transform=`translate(${993-differWholeWidth}px, -207px)` ;



           /**(down part with biger quantity of details) */  
        /**(up code seeking parties of tracery and translating them) */

        upLine.style.width=`${231-differWholeWidth}px`;
        downLine.style.width=`${158-differWholeWidth}px`;
        console.log('dsfsdf');
    }

    let smallAlongLine=document.body.querySelector('.map__lines');
    if((wholeWidth<1145)&&(wholeWidth>759)){
        let differWholeWidth=1145-wholeWidth;
        smallAlongLine.style.transform=`translateX(${-277-differWholeWidth*0.5}px) translateY(0px) rotate3d(1, 1, 1, 0deg)`;
    }
    else if((wholeWidth<=758)){
        let upLine=document.body.querySelector('.map__littlePartFirstChild');
        let downLine=document.body.querySelector('.map__bigPartFirstChild');
        smallAlongLine.style.transform=`translateX(-471px) translateY(0px) rotate3d(1, 1, 1, 0deg)`;
    }
}





window.addEventListener('resize',function(){
    let wholeWidth=window.screen.width;
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
        centranlPartList.style.transform=`translateX(${blurPartOfHuge}px) translateY(${hugeHieght*0.7}px)`;
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


    /**-----(margin for main block)------- */
const mainBlock=document.body.querySelector('.main');

    if((wholeWidth<1440)&&(wholeWidth>1080)){
    mainBlock.style.marginTop=`${hugeHieght*0.35}px`
}
    else if((wholeWidth<=1080)&&(wholeWidth>759)){
        mainBlock.style.marginTop=`${hugeHieght*0.6}px`
    }
    else if((wholeWidth<=759)&&(wholeWidth>=570)){
        mainBlock.style.marginTop=`${hugeHieght*0.8}px`
    }
    else if((wholeWidth<570)&&(wholeWidth>360)){
        mainBlock.style.marginTop=`${hugeHieght*0.1}px`
    }
    else if(wholeWidth<=360){
        mainBlock.style.marginTop=`${hugeHieght*0.4}px`
    }
    else if(wholeWidth>1440){
        mainBlock.style.marginTop=`${hugeHieght*0.4}px`
    }
    /**----(width and transform for route structure)---- */
    let alongLine=document.body.querySelector('.map__bigPartThirdChild');
    let rotateLine=document.body.querySelector('.map__bigPartFoursChild');  
    if((wholeWidth<1230)&&(wholeWidth>=1145)){
        let differWholeWidth=1230-wholeWidth;
        alongLine.style.width=`${294-differWholeWidth}px`;
        rotateLine.style.transform=`rotate(90deg) translateX(-134px) translateY(${-1161+differWholeWidth}px)`;
    }
    else if((wholeWidth<1145)&&(wholeWidth>=759)){
        alongLine.style.width=`${294}px`;
        rotateLine.style.transform=`rotate(90deg) translateX(-134px) translateY(-1161px)`;
    }
    else if((wholeWidth<759)&&(wholeWidth>=674)){
        let differWholeWidth=759-wholeWidth;
        alongLine.style.width=`${294-differWholeWidth}px`;
        rotateLine.style.transform=`rotate(90deg) translateX(-134px) translateY(${-1161+differWholeWidth}px)`;
    }
    else if(wholeWidth<674){
        console.log(1231234);
        let differWholeWidth=674-wholeWidth;
        let upLine=document.body.querySelector('.map__littlePartFirstChild');
        let downLine=document.body.querySelector('.map__bigPartFirstChild');

        /**(next code seeking parties of tracery and translating them) */
        /**(up part with lower quantity of details) */
        let secondSmall=document.body.querySelector('.map__littlePartSecondChild');
        let thirdSmall=document.body.querySelector('.map__littlePartThirdChild');
        let fourthSmall=document.body.querySelector('.map__littlePartFoursChild');
        
        secondSmall.style.transform=`rotate(90deg) translate(-211px, ${-936+differWholeWidth}px)`;
        thirdSmall.style.transform=`translate(${952-differWholeWidth}px,-227px)`;
        fourthSmall.style.transform=`translate(${995-differWholeWidth}px,-236px)`; 
         /**(up part with lower quantity of details) */
          /**(down part with biger quantity of details) */
            let secondBig=document.body.querySelector('.map__bigPartSecondChild');
            let thirdBig=document.body.querySelector('.map__bigPartThirdChild');
            let fourthBig=document.body.querySelector('.map__bigPartFoursChild');
            let fivthBig=document.body.querySelector('.map__bigPartFivthChild');
            let sixthBig=document.body.querySelector('.map__bigPartSixthChild');


            secondBig.style.transform=`rotate(90deg) translate(-98.5px, ${-833+differWholeWidth}px)`;
            thirdBig.style.transform=`translate(${878.5-differWholeWidth}px, -145px)`;
            fourthBig.style.transform=`rotate(90deg) translateX(-134px) translateY(${-1076.5+differWholeWidth}px)`;
            fivthBig.style.transform=`rotate(90deg) translate(-166px, ${-981+differWholeWidth}px)`;
            sixthBig.style.transform=`translate(${993-differWholeWidth}px, -207px)` ;



           /**(down part with biger quantity of details) */  
        /**(up code seeking parties of tracery and translating them) */

        upLine.style.width=`${231-differWholeWidth}px`;
        downLine.style.width=`${158-differWholeWidth}px`;
        console.log('dsfsdf');
    }

    let smallAlongLine=document.body.querySelector('.map__lines');
    if((wholeWidth<1145)&&(wholeWidth>759)){
        let differWholeWidth=1145-wholeWidth;
        smallAlongLine.style.transform=`translateX(${-277-differWholeWidth*0.5}px) translateY(0px) rotate3d(1, 1, 1, 0deg)`;
    }
    else if((wholeWidth<=758)){
        let upLine=document.body.querySelector('.map__littlePartFirstChild');
        let downLine=document.body.querySelector('.map__bigPartFirstChild');
        smallAlongLine.style.transform=`translateX(-471px) translateY(0px) rotate3d(1, 1, 1, 0deg)`;
    }
})


