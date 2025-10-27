// Seleciona os elementos
const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');

// Abre e fecha o menu ao clicar no ícone
hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburguer.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

const overlay = document.createElement('div');
overlay.classList.add('menu-overlay');
document.body.appendChild(overlay);

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  hamburguer.classList.remove('active');
  navMenu.classList.remove('active');
  overlay.classList.remove('active');
});

// FAQ

  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      header.classList.toggle("active");
      const content = header.nextElementSibling;
      if (header.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });

// Formulário 

const form = document.getElementById('contato');
const mensagemStatus = document.getElementById('mensagem_status');

form.addEventListener('submit', function (e) {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (nome === '' || email === '' || mensagem === '') {
    e.preventDefault();
    mensagemStatus.textContent = 'Por favor, preencha todos os campos.';
    mensagemStatus.style.color = 'red';
  } else {
    mensagemStatus.textContent = 'Enviando...';
    mensagemStatus.style.color = 'blue';
  }
});
