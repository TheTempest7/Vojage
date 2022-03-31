const popupLinks=document.querySelectorAll('.popupLink');
const body=document.querySelector('body');
const lockPadding=document.querySelectorAll('.lockPadding');/*   (фиксированные элиенты которые не нужно двигать при появлении popup-а) */ 

let unlock= true;
const timeout=800;


if(popupLinks.length>0){
    for(let i=0;i<popupLinks.length;i++){
        const popupLink=popupLinks[i];
        popupLink.addEventListener('click',function(e){
            const popupName=popupLink.children[0].getAttribute('href').replace('#','');
            const curentPopup=document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        })
    }
}
const popupCloseIcon=document.querySelectorAll('.closePopup');
if(popupCloseIcon.length>0){
    for(let i=0;i<popupCloseIcon.length;i++){
        const el=popupCloseIcon[i];
        el.addEventListener('click',function(e){
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup){
    if(curentPopup && unlock){
        const popupActive=document.querySelector('.popup.open');
        if(popupActive){
            popupClose(popupActive,false);
        } else{
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click',function(e){
            if(!e.target.closest('.popup__content')){
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive,doUnlock=true){
    if(unlock){
        popupActive.classList.remove('open');
        if(doUnlock){
            bodyUnLock();
        }
    }
} 

function bodyLock(){
    const lockPaddingValue=window.innerWidth-document.querySelector('.wrapper').offsetWidth+'px';
    if(lockPadding.length>0){
        for(let i=0;i<lockPaddingValue.length;i++){
            const el=lockPadding[i];
            if(el){
                el.style.paddingRight=lockPaddingValue;
            }
            
        }
    }
    
    body.style.paddingRight=lockPaddingValue;
    body.classList.add('lock');

    unlock=false;
    setTimeout(function(){
        unlock=true;
    },timeout);
}
function bodyUnLock(){
    setTimeout(function(){
        if(lockPadding.length>0){
            for(let i=0;i<lockPadding.length;i++){
                const el =lockPadding[i];
                el.style.paddingRight='0px';
            }
            body.style.paddingRight='0px';
        }
    },timeout);
    body.classList.remove('lock');
    body.style.paddingRight='0px';
    unlock=false;
    setTimeout(function(){
        unlock=true;
    }, timeout);
}


document.addEventListener('keydown',function(e){
    if(e.code==='Escape'){
        const popupActive=document.querySelector('.popup.open');
        popupClose(popupActive);
    }
})