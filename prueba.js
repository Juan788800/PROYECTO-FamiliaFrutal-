
  // 1. Seleccionamos tu botón de 3 rayas
  const botonHamburguesa = document.querySelector('.header__menu');
  
  // 2. Seleccionamos el contenedor que se debe desplegar
  const menuCortina = document.querySelector('.header__menu-desplegable');

  // 3. Escuchamos el clic en el botón
  botonHamburguesa.addEventListener('click', () => {
    // Le ponemos o quitamos la clase .is-active al menú para que cambie su opacidad
    menuCortina.classList.toggle('is-active');
    
    // Opcional: También se la ponemos al botón por si quieres animar las rayas a una "X"
    botonHamburguesa.classList.toggle('is-active');
  });
