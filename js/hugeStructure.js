





window.addEventListener('resize',function(){
    let countPoint=document.querySelector('.backgr__bigBand').offsetWidth;

    let marginTarget=document.querySelector('.rightPattern');
    let marginTargetSecond=document.querySelector('.backgr__rightPatternSecondChild');

    marginTarget.style.transform=`translateY(155%) translateX(${countPoint}px)`;
    marginTargetSecond.style.transform=`translateY(160%) translateX(${countPoint}px)`;
    
})