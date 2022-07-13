const pizzas = [{
    id:1,
    nombre:"Muzarella",
    ingredientes:["salsa","queso","aceitunas"],
    precio: 500
},
{
    id:2,
    nombre:"Especial",
    ingredientes:["salsa","queso","aceitunas","jamon"],
    precio: 900 
},
{
    id:3,
    nombre:"Calabreza",
    ingredientes:["salsa","queso","aceitunas","cebolla"],
    precio: 700
},
{
    id:4,
    nombre:"Bondiola",
    ingredientes:["salsa","queso","aceitunas","bondiola"],
    precio: 850
},
{
    id:5,
    nombre:"Ternera",
    ingredientes:["salsa","queso","aceitunas","ternera"],
    precio: 1000
},
{
    id:6,
    nombre:"anana",
    ingredientes:["salsa","queso","aceitunas","anana"],
    precio: 600
}
];

const consultar= document.querySelector(".consulta");
const pizzah2 = document.querySelector(".pizza");
const precioh4 = document.querySelector(".precio");
const error = document.querySelector(".error");

consultar.addEventListener("click",()=>{
    let numeroPizza = document.getElementById("numero-de-pizza").value;
    if(numeroPizza !== "" && numeroPizza>0 && numeroPizza<= pizzas.length){
        for (let pizza of pizzas) {
            if(pizza.id == numeroPizza){
                pizzah2.textContent = pizza.nombre;
                precioh4.textContent = pizza.precio;
            }
        }
        error.style.display = "none";
    }else{
      error.style.display = "block";
    }
});