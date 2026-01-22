const filtroModelo = document.getElementById("filtroModelo");
const filtroPrecio = document.getElementById("filtroPrecio");
const productos = document.querySelectorAll(".producto");

function filtrar() {
    productos.forEach(producto => {
        const modelo = producto.dataset.modelo;
        const precio = producto.dataset.precio;

        const modeloOk = filtroModelo.value === "todos" || filtroModelo.value === modelo;
        const precioOk = filtroPrecio.value === "todos" || filtroPrecio.value === precio;

        producto.style.display = (modeloOk && precioOk) ? "block" : "none";
    });
}

filtroModelo.addEventListener("change", filtrar);
filtroPrecio.addEventListener("change", filtrar);
