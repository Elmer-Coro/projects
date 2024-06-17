function mostrarArticulo(id) {
  // Ocultar todas las tarjetas
  let tarjetas = document.querySelectorAll(".card");
  let container = document.getElementById("container");
  tarjetas.forEach(function (tarjeta) {
    tarjeta.style.display = "none";
  });

  // Mostrar el artículo seleccionado
  var articulo = document.getElementById(id);
  articulo.style.display = "block";
  container.style.display = "block";
}

function cerrarArticulo(id) {
  var articulo = document.getElementById(id);
  let container = document.getElementById("container");

  articulo.style.display = "none";
  // Mostrar todas las tarjetas nuevamente
  var tarjetas = document.querySelectorAll(".card");
  tarjetas.forEach(function (tarjeta) {
    tarjeta.style.display = "block";
  });
  container.style.display = "grid";
}
