const filtroTipo = document.getElementById("filtroTipo");
const filtroPrecio = document.getElementById("filtroPrecio");
const productos = document.querySelectorAll(".producto");

function filtrar() {
    productos.forEach(producto => {
        const tipo = producto.dataset.tipo;
        const precio = producto.dataset.precio;

        const tipoValido = filtroTipo.value === "todos" || filtroTipo.value === tipo;
        const precioValido = filtroPrecio.value === "todos" || filtroPrecio.value === precio;

        producto.style.display = (tipoValido && precioValido) ? "block" : "none";
    });
}

filtroTipo.addEventListener("change", filtrar);
filtroPrecio.addEventListener("change", filtrar);
