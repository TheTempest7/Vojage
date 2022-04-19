const targetElem=document.querySelector('.headBack__rightPattern');
const littleTargetElem=document.querySelector('.headBack__rightPatternSecondChild');




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
    if(wholeWidth>1500){
        centranlPartList.style.transform=`translateX(${blurPartOfHuge*0.8}px) translateY(${hugeHieght*0.4}px)`;
    }
    else if((wholeWidth>1200)&&(wholeWidth<=1500)){
        centranlPartList.style.transform=`translateX(${blurPartOfHuge*0.88}px) translateY(${hugeHieght*0.4}px)`;
    }
    else if((wholeWidth>1080)&&(wholeWidth<=1200)){
        centranlPartList.style.transform=`translateX(${blurPartOfHuge*0.93}px) translateY(${hugeHieght*0.4}px)`;
    }
    else if((wholeWidth<=1080)&&(wholeWidth>955)){
        centranlPartList.style.transform=`translateX(${blurPartOfHuge*0.93}px) translateY(${hugeHieght*0.77}px)`;
    }
    else  if((wholeWidth<=955)&&(wholeWidth>860)){
        centranlPartList.style.transform=`translateX(${blurPartOfHuge*0.97}px) translateY(${hugeHieght*0.8}px)`;
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
     /* (elem with hieger z-index)*/
  
    
    /*littleTargetElem.style.transform=`translateX(${xElem['left']-597}px) translateY(${xElem['top']}px)`;*/
    /**-----(margin for main block)------- */
const mainBlock=document.body.querySelector('.main');

    if((wholeWidth<1440)&&(wholeWidth>1080)){
    mainBlock.style.marginTop=`${hugeHieght*0.35}px`;
}
    else if((wholeWidth<=1080)&&(wholeWidth>759)){
        mainBlock.style.marginTop=`${hugeHieght*0.6}px`;
    }
    else if((wholeWidth<=759)&&(wholeWidth>=570)){
        mainBlock.style.marginTop=`${hugeHieght*0.8}px`;
    }
    else if((wholeWidth<570)&&(wholeWidth>360)){
        mainBlock.style.marginTop=`${hugeHieght*0.1}px`;
    }
    else if(wholeWidth<=360){
        mainBlock.style.marginTop=`${hugeHieght*(-0.25)}px`;
    }
    else if(wholeWidth>1440){
        mainBlock.style.marginTop=`${hugeHieght*0.4}px`;
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

       /**benefits huge stricture trasnform */
       let bigRounds=document.body.querySelector('.BenePatterns__rightPattern');
     
    
       if(wholeWidth<1115){
           let beneItem=document.body.querySelector('.Benefits__item').offsetWidth; 
           bigRounds.style.transform=`translate(${beneItem*2}px, -654px)` ;
           bigRounds.addEventListener('mouseenter',()=>{
               bigRounds.style.transform=`translate(${beneItem*2-50}px, -704px)` ;
           })
           bigRounds.addEventListener('mouseleave',()=>{
               bigRounds.style.transform=`translate(${beneItem*2}px, -654px)` ;
           })
       }
       /**benefits huge stricture trasnform */

       /**
      transform for five rounds structure in Cabin item (in last point )
     */
      let roundZoom=document.body.querySelector('.CabContnt__compicatedStructureThird');
      let transUnitForRoundZoom=document.body.querySelector('.CabContnt__footerThird').offsetWidth; 
    if((wholeWidth<1161)&&(wholeWidth>772)){
        
        
        console.log(transUnitForRoundZoom);
        console.log(roundZoom);

        roundZoom.style.transform=`translate(${transUnitForRoundZoom-20}px, 45px)`;
    }
    if(wholeWidth<=340){
        roundZoom.style.transform=`translate(${transUnitForRoundZoom-25}px, 25px)`;
    }
       /**
      transform for five rounds structure in Cabin item (in last point )
     */

               /**transform for longer structure on top of allIn block */
               let allInLongerStructure=document.body.querySelector('.allCentrCol__damnSticks');
               let allInShortStructure=document.body.querySelector('.allRghtCol__sticks');
               let firstRoundAllInStructure=document.body.querySelector('.allCentrCol__rightPattern2');
               let secondRoundAllInStructure=document.body.querySelector('.allRghtCol__rightPattern2');
               let allInCountPoint=document.body.querySelector('.allCentrCol__body').offsetWidth;
       
               if((wholeWidth<1165)&&(wholeWidth>1132)){
                allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.8)}px ,0px)`;
                allInShortStructure.style.transform=`translate( ${allInCountPoint*(-0.65)}px ,0px)`;
               }
               if((wholeWidth<=1132)&&(wholeWidth>1123)){
                allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.8)}px ,-19.5px)`;
                allInShortStructure.style.transform=`translate( ${allInCountPoint*(-0.65)}px ,0px)`;
               }
               if((wholeWidth<=1123)&&(wholeWidth>=1060)){
                allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.8)}px ,-39.5px)`;
                allInShortStructure.style.transform=`translate( ${allInCountPoint*(-0.65)}px ,0px)`;
                firstRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.8)}px ,-3.5px)`;
                secondRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.7)}px ,-3.5px)`; 
               }
               if(wholeWidth==1059){
                allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.8)}px ,-59.5px)`;
                allInShortStructure.style.transform=`translate( ${allInCountPoint*(-0.65)}px ,0px)`;
               }
               if((wholeWidth<=1058)&&(wholeWidth>=936)){
                allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.3)}px ,-0.5px)`;
                allInShortStructure.style.transform=`translate( ${allInCountPoint*(-0.25)}px ,0px)`;
                firstRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.7)}px ,-3.5px)`;
                secondRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.6)}px ,-3.5px)`;
               }
               if((wholeWidth<=936)&&(wholeWidth>=929)){
                allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.3)}px ,-20.5px)`;
                firstRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.7)}px ,-3.5px)`;
                secondRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.6)}px ,-3.5px)`;
               }
               if((wholeWidth<=928)&&(wholeWidth>=889)){
                allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.3)}px ,-39.5px)`;
                allInShortStructure.style.transform=`translate( ${allInCountPoint*(-0.1)}px ,0px)`;
                firstRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.7)}px ,-3.5px)`;
                secondRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.6)}px ,-3.5px)`;
               }
               if((wholeWidth<=888)&&(wholeWidth>=776)){
                allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.3)}px ,0.5px)`;
                allInShortStructure.style.transform=`translate( ${allInCountPoint*(-0.25)}px ,0px)`;
                firstRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.7)}px ,-3.5px)`;
                secondRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.6)}px ,-3.5px)`;
               }
               if((wholeWidth<=775)&&(wholeWidth>=769)){
                allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.3)}px ,-19.5px)`;
              
                
                secondRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.6)}px ,-3.5px)`;
               }
               if((wholeWidth<=768)&&(wholeWidth>=717)){
                allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.3)}px ,-39.5px)`;
                firstRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.7)}px ,-3.5px)`;
                secondRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.6)}px ,-3.5px)`;
               }
               if((wholeWidth<=716)&&(wholeWidth>=1)){
                allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.3)}px ,-59.5px)`;
               }
               if((wholeWidth<=630)&&(wholeWidth>=1)){
                firstRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.72)}px ,-3.5px)`;
                secondRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.72)}px ,-3.5px)`;
               }
            
            
            
              /**transform for longer structure on top of allIn block */

              /**margin for squad pictures in linerAdvertasing */
          if((wholeWidth<1250)&&(wholeWidth>545)){
            let linerAdverPic=document.body.querySelector('.linerDistingue__firstColumnChild').offsetWidth;
            console.log(linerAdverPic);
            linerAdverPic=linerAdverPic-260;
        let allFirstColumn=document.body.querySelectorAll('.linerDistingue__firstColumnChild');
        let allSecondColumn=document.body.querySelectorAll('.linerDistingue__secondColumnChild');
        allFirstColumn[1].style.marginTop=`${linerAdverPic}px`;
        allSecondColumn[1].style.marginTop=`${linerAdverPic}px`;
        allFirstColumn[3].style.marginTop=`${linerAdverPic}px`;
        allSecondColumn[3].style.marginTop=`${linerAdverPic}px`;

           /**italic style margin */
        let italicFirstColumn=document.body.querySelectorAll('.linerItalicStyle__firstColumnChild');
        let italicSecondColumn=document.body.querySelectorAll('.linerItalicStyle__secondColumnChild');

        italicFirstColumn[1].style.marginTop=`${linerAdverPic}px`;
        italicSecondColumn[1].style.marginTop=`${linerAdverPic}px`;
          /**italic style margin */
       
          }
           /**margin for squad pictures    in linerAdvertasing*/
          /**coordinator gold line  */
            
          if((wholeWidth<1230)&&(wholeWidth>1000)){
            let goldLine=document.body.querySelector('.coordDown__ring');
            let widthDiffer=1230-wholeWidth;
            goldLine.style.maxWidth=`${530-widthDiffer}px`;
        }
        else if(wholeWidth<1000){
            let goldLine=document.body.querySelector('.coordDown__ring');
            let widthDiffer=1000-wholeWidth;
            goldLine.style.maxWidth=`${800-widthDiffer}px`;
        }
       /**coordinator gold line  */
       /**reviews`s outdoor structure trasnform */
       if(wholeWidth<1230){
        let widthReferencePoints=document.body.querySelectorAll('.reviews__blueBack');
        let HeightReferencePoints=document.body.querySelectorAll('.reviews__item-body');
        
        let reviewOutdoorStructures=document.body.querySelectorAll('.reviews__pattern');
        let reviewIndoorStructures=document.body.querySelectorAll('.reviews__Indoorpattern');

        reviewOutdoorStructures[0].style.transform=`translate(${widthReferencePoints[0].offsetWidth-23}px,${HeightReferencePoints[0].offsetHeight-2*30-23}px)`;
        reviewOutdoorStructures[1].style.transform=`translate(${widthReferencePoints[1].offsetWidth-23}px,${HeightReferencePoints[1].offsetHeight-2*30-23}px)`;
        reviewOutdoorStructures[2].style.transform=`translate(${widthReferencePoints[2].offsetWidth-23}px,${HeightReferencePoints[2].offsetHeight-2*30-23}px)`;

        reviewIndoorStructures[0].style.transform=`translate(${widthReferencePoints[0].offsetWidth-23}px,${widthReferencePoints[0].offsetHeight-23}px)`;
        reviewIndoorStructures[1].style.transform=`translate(${widthReferencePoints[1].offsetWidth-23}px,${widthReferencePoints[1].offsetHeight-23}px)`;
        reviewIndoorStructures[2].style.transform=`translate(${widthReferencePoints[2].offsetWidth-23}px,${widthReferencePoints[2].offsetHeight-23}px)`;

       }
        

       /**reviews`s outdoor structure trasnform */
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
    if(wholeWidth>1500){
        centranlPartList.style.transform=`translateX(${blurPartOfHuge*0.8}px) translateY(${hugeHieght*0.4}px)`;
    }
    else if((wholeWidth>1200)&&(wholeWidth<=1500)){
        centranlPartList.style.transform=`translateX(${blurPartOfHuge*0.88}px) translateY(${hugeHieght*0.4}px)`;
    }
    else if((wholeWidth>1080)&&(wholeWidth<=1200)){
        centranlPartList.style.transform=`translateX(${blurPartOfHuge*0.93}px) translateY(${hugeHieght*0.4}px)`;
    }
    else if((wholeWidth<=1080)&&(wholeWidth>955)){
        centranlPartList.style.transform=`translateX(${blurPartOfHuge*0.93}px) translateY(${hugeHieght*0.77}px)`;
    }
    else  if((wholeWidth<=955)&&(wholeWidth>860)){
        centranlPartList.style.transform=`translateX(${blurPartOfHuge*0.97}px) translateY(${hugeHieght*0.8}px)`;
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
    
    const targetElem=document.querySelector('.headBack__rightPattern');
    const littleTargetElem=document.querySelector('.headBack__rightPatternSecondChild');

    targetElem.style.transform=`translateX(${sumTrans}px) translateY(${hugeHieght}px)`;/* (elem with low z-index)*/
    /**block with higher z-index */
    /*let countObject=targetElem.getBoundingClientRect();
    let countObject2=littleTargetElem.getBoundingClientRect();
    console.log(countObject);
    console.log(countObject2);

    littleTargetElem.style.transform=`translateX(${countObject.left-countObject2.left+99.25}px) translateY(${hugeHieght-142.5}px)`;*/

    /**-----(margin for main block)------- */
const mainBlock=document.body.querySelector('.main');

    if((wholeWidth<1440)&&(wholeWidth>1080)){
    mainBlock.style.marginTop=`${hugeHieght*0.35}px`;
}
    else if((wholeWidth<=1080)&&(wholeWidth>759)){
        mainBlock.style.marginTop=`${hugeHieght*0.6}px`;
    }
    else if((wholeWidth<=759)&&(wholeWidth>=570)){
        mainBlock.style.marginTop=`${hugeHieght*0.8}px`;
    }
    else if((wholeWidth<570)&&(wholeWidth>360)){
        mainBlock.style.marginTop=`${hugeHieght*0.1}px`;
    }
    else if(wholeWidth<=360){
        mainBlock.style.marginTop=`${hugeHieght*(-0.25)}px`;
    }
    else if(wholeWidth>1440){
        mainBlock.style.marginTop=`${hugeHieght*0.4}px`;
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





    /**benefits huge stricture trasnform */
    let bigRounds=document.body.querySelector('.BenePatterns__rightPattern');
     
    
    if(wholeWidth<1115){
        let beneItem=document.body.querySelector('.Benefits__item').offsetWidth; 
        bigRounds.style.transform=`translate(${beneItem*2}px, -654px)` ;
        bigRounds.addEventListener('mouseenter',()=>{
            bigRounds.style.transform=`translate(${beneItem*2-50}px, -704px)` ;
        })
        bigRounds.addEventListener('mouseleave',()=>{
            bigRounds.style.transform=`translate(${beneItem*2}px, -654px)` ;
        })
    }
    /**benefits huge stricture trasnform */


    /**
      transform for five rounds structure in Cabin item (in last point )
     */
      let roundZoom=document.body.querySelector('.CabContnt__compicatedStructureThird');
      let transUnitForRoundZoom=document.body.querySelector('.CabContnt__footerThird').offsetWidth; 
    if((wholeWidth<1161)&&(wholeWidth>772)){
        
        
        console.log(transUnitForRoundZoom);
        console.log(roundZoom);

        roundZoom.style.transform=`translate(${transUnitForRoundZoom-20}px, 45px)`;
    }
    if(wholeWidth<=340){
        roundZoom.style.transform=`translate(${transUnitForRoundZoom-25}px, 25px)`;
    }
       /**
      transform for five rounds structure in Cabin item (in last point )
     */

           /**transform for longer structure on top of allIn block */
           let allInLongerStructure=document.body.querySelector('.allCentrCol__damnSticks');
           let allInShortStructure=document.body.querySelector('.allRghtCol__sticks');
           let firstRoundAllInStructure=document.body.querySelector('.allCentrCol__rightPattern2');
           let secondRoundAllInStructure=document.body.querySelector('.allRghtCol__rightPattern2');
           let allInCountPoint=document.body.querySelector('.allCentrCol__body').offsetWidth;
   
           if((wholeWidth<1165)&&(wholeWidth>1132)){
            allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.8)}px ,0px)`;
            allInShortStructure.style.transform=`translate( ${allInCountPoint*(-0.65)}px ,0px)`;
           }
           if((wholeWidth<=1132)&&(wholeWidth>1123)){
            allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.8)}px ,-19.5px)`;
            allInShortStructure.style.transform=`translate( ${allInCountPoint*(-0.65)}px ,0px)`;
           }
           if((wholeWidth<=1123)&&(wholeWidth>=1060)){
            allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.8)}px ,-39.5px)`;
            allInShortStructure.style.transform=`translate( ${allInCountPoint*(-0.65)}px ,0px)`;
            firstRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.8)}px ,-3.5px)`;
            secondRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.7)}px ,-3.5px)`; 
           }
           if(wholeWidth==1059){
            allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.8)}px ,-59.5px)`;
            allInShortStructure.style.transform=`translate( ${allInCountPoint*(-0.65)}px ,0px)`;
           }
           if((wholeWidth<=1058)&&(wholeWidth>=936)){
            allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.3)}px ,-0.5px)`;
            allInShortStructure.style.transform=`translate( ${allInCountPoint*(-0.25)}px ,0px)`;
            firstRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.7)}px ,-3.5px)`;
            secondRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.6)}px ,-3.5px)`;
           }
           if((wholeWidth<=936)&&(wholeWidth>=929)){
            allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.3)}px ,-20.5px)`;
            firstRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.7)}px ,-3.5px)`;
            secondRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.6)}px ,-3.5px)`;
           }
           if((wholeWidth<=928)&&(wholeWidth>=889)){
            allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.3)}px ,-39.5px)`;
            allInShortStructure.style.transform=`translate( ${allInCountPoint*(-0.1)}px ,0px)`;
            firstRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.7)}px ,-3.5px)`;
            secondRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.6)}px ,-3.5px)`;
           }
           if((wholeWidth<=888)&&(wholeWidth>=776)){
            allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.3)}px ,0.5px)`;
            allInShortStructure.style.transform=`translate( ${allInCountPoint*(-0.25)}px ,0px)`;
            firstRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.7)}px ,-3.5px)`;
            secondRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.6)}px ,-3.5px)`;
           }
           if((wholeWidth<=775)&&(wholeWidth>=769)){
            allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.3)}px ,-19.5px)`;
          
            
            secondRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.6)}px ,-3.5px)`;
           }
           if((wholeWidth<=768)&&(wholeWidth>=717)){
            allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.3)}px ,-39.5px)`;
            firstRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.7)}px ,-3.5px)`;
            secondRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.6)}px ,-3.5px)`;
           }
           if((wholeWidth<=716)&&(wholeWidth>=1)){
            allInLongerStructure.style.transform=`translate( ${allInCountPoint*(-0.3)}px ,-59.5px)`;
           }
           if((wholeWidth<=630)&&(wholeWidth>=1)){
            firstRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.72)}px ,-3.5px)`;
            secondRoundAllInStructure.style.transform=`translate( ${allInCountPoint*(0.72)}px ,-3.5px)`;
           }
          /**transform for longer structure on top of allIn block */

          /**about liner adaptive trasform */
        const aboutLinerItems=document.body.querySelectorAll('.linerCards__rightSideStructure');
        
        let firstItemBar=document.body.querySelector('.abLinStructure__firstchild');
        let SecondItemBar=document.body.querySelector('.abLinStructure2__firstchild');
        let thirdItemBar=document.body.querySelector('.abLinStructure3__firstchild');
        
        if((wholeWidth<=1175)&&(wholeWidth>=1050)){
            differWholeWidth=1175-wholeWidth;
            firstItemBar.style.width=`${89-differWholeWidth}px`;
            aboutLinerItems[0].style.transform=`translate(${-89+(differWholeWidth)}px,55px)`;

            SecondItemBar.style.width=`${130-differWholeWidth}px`;
            aboutLinerItems[1].style.transform=`translate(${-89+(differWholeWidth)}px,55px)`;

            thirdItemBar.style.width=`${89-differWholeWidth}px`;
            aboutLinerItems[2].style.transform=`translate(${-89+(differWholeWidth)}px,55px)`;
        }
          /**about liner adaptive trasform */


          /**margin for squad pictures in linerAdvertasing */
          if((wholeWidth<1250)&&(wholeWidth>545)){
            let linerAdverPic=document.body.querySelector('.linerDistingue__firstColumnChild').offsetWidth;
            console.log(linerAdverPic);
            linerAdverPic=linerAdverPic-260;
        let allFirstColumn=document.body.querySelectorAll('.linerDistingue__firstColumnChild');
        let allSecondColumn=document.body.querySelectorAll('.linerDistingue__secondColumnChild');
        allFirstColumn[1].style.marginTop=`${linerAdverPic}px`;
        allSecondColumn[1].style.marginTop=`${linerAdverPic}px`;
        allFirstColumn[3].style.marginTop=`${linerAdverPic}px`;
        allSecondColumn[3].style.marginTop=`${linerAdverPic}px`;

           /**italic style margin */
        let italicFirstColumn=document.body.querySelectorAll('.linerItalicStyle__firstColumnChild');
        let italicSecondColumn=document.body.querySelectorAll('.linerItalicStyle__secondColumnChild');

        italicFirstColumn[1].style.marginTop=`${linerAdverPic}px`;
        italicSecondColumn[1].style.marginTop=`${linerAdverPic}px`;
          /**italic style margin */
       
          }
           /**margin for squad pictures    in linerAdvertasing*/


           /**coordinator gold line  */
            
            if((wholeWidth<1230)&&(wholeWidth>1000)){
                let goldLine=document.body.querySelector('.coordDown__ring');
                let widthDiffer=1230-wholeWidth;
                goldLine.style.maxWidth=`${530-widthDiffer}px`;
            }
            else if(wholeWidth<1000){
                let goldLine=document.body.querySelector('.coordDown__ring');
                let widthDiffer=1000-wholeWidth;
                goldLine.style.maxWidth=`${800-widthDiffer}px`;
            }
           /**coordinator gold line  */

           /**reviews`s outdoor structure trasnform */
           if(wholeWidth<1230){
            let widthReferencePoints=document.body.querySelectorAll('.reviews__blueBack');
            let HeightReferencePoints=document.body.querySelectorAll('.reviews__item-body');
            
            let reviewOutdoorStructures=document.body.querySelectorAll('.reviews__pattern');
            let reviewIndoorStructures=document.body.querySelectorAll('.reviews__Indoorpattern');

            reviewOutdoorStructures[0].style.transform=`translate(${widthReferencePoints[0].offsetWidth-23}px,${HeightReferencePoints[0].offsetHeight-2*30-23}px)`;
            reviewOutdoorStructures[1].style.transform=`translate(${widthReferencePoints[1].offsetWidth-23}px,${HeightReferencePoints[1].offsetHeight-2*30-23}px)`;
            reviewOutdoorStructures[2].style.transform=`translate(${widthReferencePoints[2].offsetWidth-23}px,${HeightReferencePoints[2].offsetHeight-2*30-23}px)`;

            reviewIndoorStructures[0].style.transform=`translate(${widthReferencePoints[0].offsetWidth-23}px,${widthReferencePoints[0].offsetHeight-23}px)`;
            reviewIndoorStructures[1].style.transform=`translate(${widthReferencePoints[1].offsetWidth-23}px,${widthReferencePoints[1].offsetHeight-23}px)`;
            reviewIndoorStructures[2].style.transform=`translate(${widthReferencePoints[2].offsetWidth-23}px,${widthReferencePoints[2].offsetHeight-23}px)`;

           }
            

           /**reviews`s outdoor structure trasnform */

           /**if(wholeWidth<1230){
            let revOutStrWidth=document.body.querySelector('.reviews__blueBack').offsetWidth;
            let revOutStrHieght=document.body.querySelector('.reviews__item-body').offsetHeight;

            

            let outDoorStructures=document.body.querySelectorAll('.reviews__pattern');
            outDoorStructures[0].style.transform=`translate(${revOutStrWidth-23}px,${revOutStrHieght-2*30-23}px)`;
            outDoorStructures[1].style.transform=`translate(${revOutStrWidth-23}px,${revOutStrHieght-2*30-23}px)`;
            outDoorStructures[2].style.transform=`translate(${revOutStrWidth-23}px,${revOutStrHieght-2*30-23}px)`;


            let revInStrWidth=revOutStrWidth;
            let revInStrHieght=document.body.querySelector('.reviews__blueBack').offsetHeight;

            let  inDoorStructures=document.body.querySelectorAll('.reviews__Indoorpattern');

            inDoorStructures[0].style.transform=`translate(${revInStrWidth-23}px,${revInStrHieght-23}px)`;
            inDoorStructures[1].style.transform=`translate(${revInStrWidth-23}px,${revInStrHieght-23}px)`;
            inDoorStructures[2].style.transform=`translate(${revInStrWidth-23}px,${revInStrHieght-23}px)`;

           } */
})


