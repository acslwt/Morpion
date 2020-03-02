function getRandomInt(max){

  return Math.floor(Math.random() * Math.floor(max));

}

function blanchir(){

  for(let i=0,c=buttons.length;i<c;i++){

    buttons[i].style.backgroundColor='white';

  }
}

function recommencer(){

  for(let i=0,c=buttons.length;i<c;i++){

    buttons[i].innerHTML='';
    buttons[i].style.backgroundColor='white';


  }
  vainq=0;
  t=0;
  actu.removeChild(reset);
  text.innerHTML="A TOI DE JOUER !!";
}

function jouer(){

  for(let i=0,c=buttons.length;i<c;i++){

    buttons[i].addEventListener('mouseover',function(){

      if(vainq==0)
      {

        buttons[i].style.backgroundColor='#6C6B6B';

      }

    });

    buttons[i].addEventListener('mousedown',function(){

      if(vainq==0){

        buttons[i].style.backgroundColor='#454545';

      }

    });

    buttons[i].addEventListener('mouseup',function(){

      if(vainq==0)
      {

        buttons[i].style.backgroundColor='#6C6B6B';

      }

    });

    buttons[i].addEventListener('mouseout',function(){

      if(vainq==0)
      {

        buttons[i].style.backgroundColor='white';

      }

    });

    buttons[i].addEventListener('click',function(){

      if(vainq==0){

        if(this.innerHTML=='X' || this.innerHTML=='O'){

          text.innerHTML='Case déjà pleine !'
          text.style.color='red';

        }

        else{

          t++;

          this.style.color='red';
          this.innerHTML='X';
          text.innerHTML='';
          text.style.color='black';

          if(buttons[0].innerHTML=='X' && buttons[1].innerHTML=='X' && buttons[2].innerHTML=='X'){

            vainq=1;
            blanchir();scoreX++;score.innerHTML='Score : '+scoreX+' - '+scoreO;
            reset.innerHTML='RECOMMENCER';actu.appendChild(reset);
            text.innerHTML='Le joueur X a gagné !';
            buttons[0].style.backgroundColor='#8EED5F';
            buttons[1].style.backgroundColor='#8EED5F';
            buttons[2].style.backgroundColor='#8EED5F';

          }else if(buttons[0].innerHTML=='X' && buttons[3].innerHTML=='X' && buttons[6].innerHTML=='X'){

            vainq=1;
            blanchir();scoreX++;score.innerHTML='Score : '+scoreX+' - '+scoreO;
            reset.innerHTML='RECOMMENCER';actu.appendChild(reset);
            text.innerHTML='Le joueur X a gagné !';
            buttons[0].style.backgroundColor='#8EED5F';
            buttons[3].style.backgroundColor='#8EED5F';
            buttons[6].style.backgroundColor='#8EED5F';

          }else if(buttons[0].innerHTML=='X' && buttons[4].innerHTML=='X' && buttons[8].innerHTML=='X'){

            vainq=1;
            blanchir();scoreX++;score.innerHTML='Score : '+scoreX+' - '+scoreO;
            reset.innerHTML='RECOMMENCER';actu.appendChild(reset);
            text.innerHTML='Le joueur X a gagné !';
            buttons[0].style.backgroundColor='#8EED5F';
            buttons[4].style.backgroundColor='#8EED5F';
            buttons[8].style.backgroundColor='#8EED5F';

          }else if(buttons[1].innerHTML=='X' && buttons[4].innerHTML=='X' && buttons[7].innerHTML=='X'){

            vainq=1;
            blanchir();scoreX++;score.innerHTML='Score : '+scoreX+' - '+scoreO;
            reset.innerHTML='RECOMMENCER';actu.appendChild(reset);
            text.innerHTML='Le joueur X a gagné !';
            buttons[1].style.backgroundColor='#8EED5F';
            buttons[4].style.backgroundColor='#8EED5F';
            buttons[7].style.backgroundColor='#8EED5F';

          }else if(buttons[2].innerHTML=='X' && buttons[4].innerHTML=='X' && buttons[6].innerHTML=='X'){

            vainq=1;
            blanchir();scoreX++;score.innerHTML='Score : '+scoreX+' - '+scoreO;
            reset.innerHTML='RECOMMENCER';actu.appendChild(reset);
            text.innerHTML='Le joueur X a gagné !';
            buttons[2].style.backgroundColor='#8EED5F';
            buttons[4].style.backgroundColor='#8EED5F';
            buttons[6].style.backgroundColor='#8EED5F';

          }else if(buttons[2].innerHTML=='X' && buttons[5].innerHTML=='X' && buttons[8].innerHTML=='X'){

            vainq=1;
            blanchir();scoreX++;score.innerHTML='Score : '+scoreX+' - '+scoreO;
            reset.innerHTML='RECOMMENCER';actu.appendChild(reset);
            text.innerHTML='Le joueur X a gagné !';
            buttons[2].style.backgroundColor='#8EED5F';
            buttons[5].style.backgroundColor='#8EED5F';
            buttons[8].style.backgroundColor='#8EED5F';

          }else if(buttons[3].innerHTML=='X' && buttons[4].innerHTML=='X' && buttons[5].innerHTML=='X'){

            vainq=1;
            blanchir();scoreX++;score.innerHTML='Score : '+scoreX+' - '+scoreO;
            reset.innerHTML='RECOMMENCER';actu.appendChild(reset);
            text.innerHTML='Le joueur X a gagné !';
            buttons[3].style.backgroundColor='#8EED5F';
            buttons[4].style.backgroundColor='#8EED5F';
            buttons[5].style.backgroundColor='#8EED5F';

          }else if(buttons[6].innerHTML=='X' && buttons[7].innerHTML=='X' && buttons[8].innerHTML=='X'){

            vainq=1;
            blanchir();scoreX++;score.innerHTML='Score : '+scoreX+' - '+scoreO;
            reset.innerHTML='RECOMMENCER';actu.appendChild(reset);
            text.innerHTML='Le joueur X a gagné !';
            buttons[6].style.backgroundColor='#8EED5F';
            buttons[7].style.backgroundColor='#8EED5F';
            buttons[8].style.backgroundColor='#8EED5F';

          }else if (t==5) {

            vainq=1;
            blanchir();
            score.innerHTML='Score : '+scoreX+' - '+scoreO;
            text.innerHTML='MATCH NUL';
            reset.innerHTML='RECOMMENCER';actu.appendChild(reset);

          }


          if(t<5 && vainq==0){
            do{

              rand=getRandomInt(9);

            }while(buttons[rand].innerHTML);

            buttons[rand].style.color='blue';
            buttons[rand].innerHTML='O';

            if(buttons[0].innerHTML=='O' && buttons[1].innerHTML=='O' && buttons[2].innerHTML=='O')
            {

              vainq=1;
              blanchir();scoreO++;score.innerHTML='Score : '+scoreX+' - '+scoreO;
              reset.innerHTML='RECOMMENCER';actu.appendChild(reset);
              text.innerHTML='Le joueur O a gagné !';
              buttons[0].style.backgroundColor='#8EED5F';
              buttons[1].style.backgroundColor='#8EED5F';
              buttons[2].style.backgroundColor='#8EED5F';

            }else if(buttons[0].innerHTML=='O' && buttons[3].innerHTML=='O' && buttons[6].innerHTML=='O'){

              vainq=1;
              blanchir();scoreO++;score.innerHTML='Score : '+scoreX+' - '+scoreO;
              reset.innerHTML='RECOMMENCER';actu.appendChild(reset);
              text.innerHTML='Le joueur O a gagné !';
              buttons[0].style.backgroundColor='#8EED5F';
              buttons[3].style.backgroundColor='#8EED5F';
              buttons[6].style.backgroundColor='#8EED5F';

            }else if(buttons[0].innerHTML=='O' && buttons[4].innerHTML=='O' && buttons[8].innerHTML=='O'){

              vainq=1;
              blanchir();scoreO++;score.innerHTML='Score : '+scoreX+' - '+scoreO;
              reset.innerHTML='RECOMMENCER';actu.appendChild(reset);
              text.innerHTML='Le joueur O a gagné !';
              buttons[0].style.backgroundColor='#8EED5F';
              buttons[4].style.backgroundColor='#8EED5F';
              buttons[8].style.backgroundColor='#8EED5F';

            }else if(buttons[1].innerHTML=='O' && buttons[4].innerHTML=='O' && buttons[7].innerHTML=='O'){

              vainq=1;
              blanchir();scoreO++;score.innerHTML='Score : '+scoreX+' - '+scoreO;
              reset.innerHTML='RECOMMENCER';actu.appendChild(reset);
              text.innerHTML='Le joueur O a gagné !';
              buttons[1].style.backgroundColor='#8EED5F';
              buttons[4].style.backgroundColor='#8EED5F';
              buttons[7].style.backgroundColor='#8EED5F';

            }else if(buttons[2].innerHTML=='O' && buttons[4].innerHTML=='O' && buttons[6].innerHTML=='O'){

              vainq=1;
              blanchir();scoreO++;score.innerHTML='Score : '+scoreX+' - '+scoreO;
              reset.innerHTML='RECOMMENCER';actu.appendChild(reset);
              text.innerHTML='Le joueur O a gagné !';
              buttons[2].style.backgroundColor='#8EED5F';
              buttons[4].style.backgroundColor='#8EED5F';
              buttons[6].style.backgroundColor='#8EED5F';

            }else if(buttons[2].innerHTML=='O' && buttons[5].innerHTML=='O' && buttons[8].innerHTML=='O'){

              vainq=1;
              blanchir();scoreO++;score.innerHTML='Score : '+scoreX+' - '+scoreO;
              reset.innerHTML='RECOMMENCER';actu.appendChild(reset);
              text.innerHTML='Le joueur O a gagné !';
              buttons[2].style.backgroundColor='#8EED5F';
              buttons[5].style.backgroundColor='#8EED5F';
              buttons[8].style.backgroundColor='#8EED5F';

            }else if(buttons[3].innerHTML=='O' && buttons[4].innerHTML=='O' && buttons[5].innerHTML=='O'){

              vainq=1;
              blanchir();scoreO++;score.innerHTML='Score : '+scoreX+' - '+scoreO;
              reset.innerHTML='RECOMMENCER';actu.appendChild(reset);
              text.innerHTML='Le joueur O a gagné !';
              buttons[3].style.backgroundColor='#8EED5F';
              buttons[4].style.backgroundColor='#8EED5F';
              buttons[5].style.backgroundColor='#8EED5F';

            }else if(buttons[6].innerHTML=='O' && buttons[7].innerHTML=='O' && buttons[8].innerHTML=='O'){

              vainq=1;
              blanchir();scoreO++;score.innerHTML='Score : '+scoreX+' - '+scoreO;
              reset.innerHTML='RECOMMENCER';actu.appendChild(reset);
              text.innerHTML='Le joueur O a gagné !';
              buttons[6].style.backgroundColor='#8EED5F';
              buttons[7].style.backgroundColor='#8EED5F';
              buttons[8].style.backgroundColor='#8EED5F';

            }

          }
        }

      }

    });
    reset.addEventListener('click',function(){

      recommencer();

    })

  }

}

let reset=document.createElement('button');
reset.style.fontSize='25px';

let scoreX=0;
let scoreO=0;
let score=document.getElementById('score');
let buttons=document.getElementsByTagName('button');
let text=document.getElementById('textjeu');
let actu=document.getElementById('actu');
let rand,t=0;
let vainq=0;

jouer();
