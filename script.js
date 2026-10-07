let historico = [];


function mostrar(id) {

  const paginas = document.querySelectorAll('.pagina');

  paginas.forEach(pagina => {

    if (pagina.classList.contains('ativa')) {

      historico.push(pagina.id);

    }

    pagina.classList.remove('ativa');

  });


  const paginaSelecionada = document.getElementById(id);

  if (paginaSelecionada) {

    paginaSelecionada.classList.add('ativa');

  }

}


function voltar() {

  let ultima = historico.pop();

  if (ultima) {

    document.querySelectorAll('.pagina').forEach(pagina => {

      pagina.classList.remove('ativa');

    });


    document.getElementById(ultima).classList.add('ativa');

  }

}


/* =========================
   MÚSICA
========================= */

let tocando = false;


function toggleMusica() {

  const musica = document.getElementById("musica");

  const icone = document.getElementById("icone-musica");


  if (tocando) {

    musica.pause();

    icone.innerHTML = "🎧";

  } else {

    musica.play();

    icone.innerHTML = "🐼";

  }


  tocando = !tocando;

}/* =========================
   IDIOMA
========================= */

function changeLanguage(language) {

  const elements = document.querySelectorAll('[data-pt][data-en]');

  elements.forEach(element => {

    element.textContent = element.getAttribute(`data-${language}`);

  });

  // Altera o idioma do HTML
  if (language === 'en') {
    document.documentElement.lang = 'en';
  } else {
    document.documentElement.lang = 'pt-BR';
  }

  // Salva a escolha do usuário
  localStorage.setItem('language', language);
}


/* =========================
   CARREGAR IDIOMA SALVO
========================= */

document.addEventListener('DOMContentLoaded', function() {

  const savedLanguage = localStorage.getItem('language') || 'pt';

  changeLanguage(savedLanguage);

});