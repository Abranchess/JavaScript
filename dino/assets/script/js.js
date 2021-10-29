const sauro = document.querySelector('.sauro');
const bg = document.querySelector('.bg');
let pulaboy = false;
let position = 0;

function lidakeyup (event){
    if  (event.keyCode === 32){
        if(!pulaboy){ 
            pulapirata(); 
        }
              
    }
}

function pulapirata(){
    
    
    pulaboy = true;

    let upIntervalo = setInterval(() => {
      if(position >= 150){
      clearInterval(upIntervalo);
      
      let desceIntervalo = setInterval(() =>{
          if(position <= 0){
              clearInterval(desceIntervalo);
              pulaboy = false;
          }else{
      position -= 20;
      sauro.style.bottom = position + 'px';
          }
       }, 20);
      }else{
        position += 20;
        sauro.style.bottom = position + 'px';

      } 
       
    }, 20);

}

function criacatus() {
    const cactus = document.createElement('div');
    let cacposition = 1000;
    let randomTime = Math.random() * 6000;
    cactus.classList.add('cactus');
    bg.appendChild(cactus);
    cactus.style.left = 1000 + 'px';

    let esquerdaIntervalo = setInterval(() =>{ 
        if (cacposition < -60){
            clearInterval(esquerdaIntervalo);
            bg.removeChild(cactus);
        }else if(cacposition > 0 && cacposition < 60 && position < 60){
            clearInterval(esquerdaIntervalo);
            document.body.innerHTML = ' <h1 class= "game-over">YOU LOSE PIVETI</h1>';
        }
         else{
            cacposition -= 10;
            cactus.style.left = cacposition + 'px';
     }
    }, 20);
    setTimeout(criacatus, randomTime);
}


criacatus();
document.addEventListener('keyup' , lidakeyup);