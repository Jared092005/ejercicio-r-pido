console.log("hola");

let cuentaA = 5;
let cuentaB = 10;

//gran total cuenta A
cuentaA = cuentaA + cuentaB;

//resta de lo que tiene cuenta A con la B
cuentaB = cuentaA - cuentaB;

//resta de dinero con la cuenta A con el total de la B
cuentaA = cuentaA - cuentaB;
console.log(`El nuevo valor de la cuenta A es ${cuentaA}`);

//validador digital
/* let nivelJugador = parseInt(prompt(`Qué nivel eres?`));
let puntosJugador = parseInt(prompt(`Ingresa tu cantidad de puntos:`));
let paseVip = prompt(`Tienes el pase Vip? (si/no)`);

function validadorDigital(nivel, puntos, pase) {
  if (nivel >= 20) {
    if (puntos >= 100 || pase !== "no") {
      console.log(`estás dentro`);
    } else {
      console.log(`Lo sentimos, no estás dentro`);
    }
  } else {
    console.log(`Nivel insuficiente`);
  }
} */

/* validadorDigital(nivelJugador, puntosJugador, paseVip); */

//simulador de combate
let puntosDeVida;
let monstruo;

function calcularVida(vida, dano) {
  vida = parseInt(prompt(`Ingrese los puntos de salud que tienes?`));
  for (let i = 0; i < 3; i++) {
    dano = parseInt(prompt(`Cantidad de daño del monstruo`));
    vida = vida - dano;
  }
  if (vida <= 10) {
    alert(`¡Peligro crítico!`);
  } else {
    alert(`Sobreviviste!!`);
  }
}

calcularVida(puntosDeVida, monstruo);
