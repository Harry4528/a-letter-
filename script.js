function empezar() {
  const nombre = document.getElementById("nombre").value.trim();
  if (nombre === "") {
    alert("Por favor, escribe tu nombre 🥹");
    return;
  }

  document.querySelector(".container").style.display = "none";
  document.getElementById("pregunta").style.display = "block";
  document.getElementById("saludo").textContent = `Hola ${nombre}, tengo algo que preguntarte...`;
}

function respuesta(opcion) {
  if (opcion === 'si') {
    document.getElementById("pregunta").innerHTML = `
      <h1>¡Siiiii! :D 💖</h1>
      <p>Me haces tan feliz, mi amor. Este es solo el comienzo de algo precioso. 💕</p>
    `;
    document.getElementById("carta").classList.add("visible");
  } else {
    alert("No puedes decir que no... 😢");
  }
}