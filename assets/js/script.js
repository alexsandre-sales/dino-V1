const dino = document.querySelector('.dino');
const fundo = document.querySelector('.fundo');
let pulando = false;
let posicao = 40;

function clickEspaco(event) {
  if (event.keyCode === 32) {
    if (!pulando) {
      pulo();
    }
  }
}

function pulo() {
  pulando = true;
  let saltoIntervalo = setInterval(() => {
    if (posicao >= 220) {
      clearInterval(saltoIntervalo);

      let descendo = setInterval(() => {
        if (posicao <= 40) {
          clearInterval(descendo);
          pulando = false;
        } else {
          posicao -= 20;
          dino.style.bottom = posicao + 'px';
        }
      }, 35);
    } else {
      posicao += 20;
      dino.style.bottom = posicao + 'px';
    }
  }, 20);
}

function criandoObstaculo() {
  const cacto = document.createElement('div');
  let cactusposicao = 1500;
  let randowTime = Math.random() * 7000;

  cacto.classList.add('cacto');
  cacto.style.left = 1500 + 'px';
  fundo.appendChild(cacto);

  let intervaloCactoVindo = setInterval(() => {
    if (cactusposicao < -60) {
      clearInterval(intervaloCactoVindo);
      fundo.removeChild(cacto);
    } else if (cactusposicao > 0 && cactusposicao < 60 && posicao < 60) {
      clearInterval(intervaloCactoVindo);
      document.body.innerHTML = '<h1 class="fim">Fim de jogo</h1>';
    } else {
      cactusposicao -= 10;
      cacto.style.left = cactusposicao + 'px';
    }
  }, 20);
  setTimeout(criandoObstaculo, randowTime);
}

document.addEventListener('keydown', clickEspaco);
criandoObstaculo();
