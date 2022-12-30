var botonAbrirPoupop = document.getElementById('boton_estudios'),
     overlay = document.getElementById('overlay'),
     poupop = document.getElementById('poupop'),
     botoncerrar_poupop = document.getElementById('cerrar_poupop');

botonAbrirPoupop.addEventListener('click', function () {
     overlay.classList.add('active');
     poupop.classList.add('active');
});

botoncerrar_poupop.addEventListener('click', function () {
     overlay.classList.remove('active');
     poupop.classList.add('active');
});
