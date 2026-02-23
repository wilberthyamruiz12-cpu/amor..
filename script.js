const flowersContainer = document.querySelector('.flowers');

function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  
  // Escoge un emoji de flor o corazón al azar
  const emojis = ['🌸', '🌹', '💐', '❤️', '✨'];
  flower.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  // Posición aleatoria en la pantalla
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = (5 + Math.random() * 5) + 's';
  flower.style.fontSize = (20 + Math.random() * 30) + 'px';

  flowersContainer.appendChild(flower);

  // Borrar después de que flote
  setTimeout(() => flower.remove(), 8000);
}

setInterval(createFlower, 300);