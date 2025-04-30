function crearCorazon() {
  const corazon = document.createElement('div');
  corazon.classList.add('corazon');
  corazon.textContent = '💖';
  corazon.style.left = Math.random() * 100 + 'vw';
  corazon.style.top = '100vh';
  corazon.style.position = 'absolute';
  corazon.style.fontSize = (Math.random() * 10 + 20) + 'px';
  corazon.style.animation = 'flotar 5s linear forwards';
  corazon.style.pointerEvents = 'none'; // no bloquea interacción

  document.getElementById('corazones-container').appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 5000);
}

setInterval(crearCorazon, 300);