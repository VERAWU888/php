
//screen, page, client
var screenX = document.querySelector('.screenX');        
var screenY = document.querySelector('.screenY');        
var pageX = document.querySelector('.pageX');        
var pageY = document.querySelector('.pageY');        
var clientX = document.querySelector('.clientX');        
var clientY = document.querySelector('.clientY');        


var mouseImg = document.querySelector('.mouseImg');

function getPosition(e) {                 
  screenX.textContent = e.screenX;                    
  screenY.textContent = e.screenY;                    
  pageX.textContent = e.pageX;                   
  pageY.textContent = e.pageY;                     
  clientX.textContent = e.clientX;                   
  clientY.textContent = e.clientY;     
  
  mouseImg.style.left =e.clientX+'px';
  mouseImg.style.top =e.clientY+'px';             
}

var el = document.body;      
el.addEventListener('mousemove', getPosition, false); 