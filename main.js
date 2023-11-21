
function Producto(prenda, color, talle, modelo, precio) {
    this.prenda = prenda;
    this.color = color;
    this.talle = talle;
    this.modelo = modelo;
    this.precio = precio;
}

let tallesRemera = ["XS", "S", "M", "L", "XL", "XXL"];
let ProductoRemera1 = new Producto("remeras", "rosa", tallesRemera, "HappyInside", 29.99);
let ProductoRemera2 = new Producto("remeras", "negro", tallesRemera, "HappyInside", 34.99);
let ProductoRemera3 = new Producto("remeras", "blanco", tallesRemera, "BetterLuck", 39.99);
let ProductoRemera4 = new Producto("remeras", "negro", tallesRemera, "BrokenHeart", 27.99);
let ProductoRemera5 = new Producto("remeras", "negro", tallesRemera, "ChampagneProblems", 32.99);

let productos = [ProductoRemera1, ProductoRemera2, ProductoRemera3, ProductoRemera4, ProductoRemera5];

let tallesBuzo1 = ["S", "M", "L"];
let ProductoBuzo1 = new Producto("buzos", "azul", tallesBuzo1, "ComfyStyle", 49.99);
let tallesBuzo2 = ["XS", "M", "XL"];
let ProductoBuzo2 = new Producto("buzos", "gris", tallesBuzo2, "UrbanComfort", 54.99);

productos.push(ProductoBuzo1, ProductoBuzo2);

let prendasBuscadas = prompt("¿Qué prenda buscas?").toLowerCase();
const prendasFiltradasPorPrenda = productos.filter(producto => producto.prenda.includes(prendasBuscadas));

if (prendasFiltradasPorPrenda.length > 0) {
    let talleBuscado = prompt("¿Qué talle buscas?").toUpperCase();
    const productosFiltrados = prendasFiltradasPorPrenda.filter(producto => producto.talle.includes(talleBuscado));
    console.log(productosFiltrados);
} else if(prendasFiltradasPorPrenda.length < 0){
    console.log("No se encontro la prenda, porfavor eliga una opcion valida")
}
