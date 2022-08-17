const pizzas = [{
    id:1,
    nombre:"muzarella",
    ingredientes:["salsa","queso","aceitunas"],
    precio: 500
},
{
    id:2,
    nombre:"especial",
    ingredientes:["salsa","queso","aceitunas","jamon"],
    precio: 900 
},
{
    id:3,
    nombre:"calabreza",
    ingredientes:["salsa","queso","aceitunas","cebolla"],
    precio: 700
},
{
    id:4,
    nombre:"bondiola",
    ingredientes:["salsa","queso","aceitunas","bondiola"],
    precio: 850
},
{
    id:5,
    nombre:"ternera",
    ingredientes:["salsa","queso","aceitunas","ternera"],
    precio: 1000
},
{
    id:6,
    nombre:"anana",
    ingredientes:["salsa","queso","aceitunas","anana"],
    precio: 600
},
{
    id:7,
    nombre:"anana",
    ingredientes:["salsa","queso","aceitunas","anana"],
    precio: 600
}
];
const btnBuscar=document.getElementById("buscar");
const inputPizza = document.getElementById("inputBuscar");
let pizzasArray=[];
setLocalStorage();
getLocalStorage();
imprimir(pizzasArray);
function setLocalStorage(){
    localStorage.setItem("pizzas",JSON.stringify(pizzas));
}
function getLocalStorage(){
    pizzasArray = JSON.parse(localStorage.getItem("pizzas"));
}

function imprimir(valores){
    let renderHTML="";
    valores.forEach(pizza => renderHTML+=`
    <div class="card__pizza-content">
    <p class="card__pizza-name">Pizza: <span id="pizza">${pizza.nombre}</span></p>
    <img src="E4-js/img/porcion.jpg" alt="img-pizza" class="card__pizza-img">
    <span class="card__pizza-precio">$${pizza.precio}</span>
    <p class="card__pizza-ingrediente">Ingredicentes:</p>
    <span class="card__pizza-ingredientes-contenido">${pizza.ingredientes}</span>
</div>
    `);
    document.querySelector(".card__pizza-container").innerHTML=renderHTML;
}

btnBuscar.addEventListener("click",()=>{
    const pizzaFiltro = pizzasArray.filter(dato => dato.nombre == inputPizza.value);
    imprimir(pizzaFiltro);
});