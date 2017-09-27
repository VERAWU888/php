//ch9-93: keyCode-點擊鍵盤，發射火箭

var body = document.body;

function goRocket(e){
    switch(e.keyCode){
        case 49:
            document.querySelector('.rocket-1').style.bottom = '2000px'
            break;
        case 50:
            document.querySelector('.rocket-2').style.bottom = '2000px'
            break;
        case 51: 
            document.querySelector('.rocket-3').style.bottom = '2000px'
            break;
    }
}


body.addEventListener('keydown',goRocket,false)