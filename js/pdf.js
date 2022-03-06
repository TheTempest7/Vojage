let numberValue=document.querySelector('.Pdf__input');
console.log(numberValue);
let btn=document.querySelector('.Pdf__link');

let data =[];
let numberFilter = '/(\+?7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/';

function Validation(e){
    
    let cost=numberValue.value;

    if(numberTest(cost)){
        data.push(cost);
    }
    else{e.preventDefault();
        alert('Please check your phone number and press the button again');
    }
    function numberTest(cost){
        return (/(\+?7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/.test(cost));
    }
}


btn.addEventListener('click',Validation)