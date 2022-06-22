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
let nombres = " ";
console.log("Pizzas con Id Impar:")
for(let pizza of pizzas){
    if(pizza.id%2 !== 0){
        console.log(` Pizza de ${pizza.nombre}`);
    }
}
for(let pizza of pizzas){
    if(pizza.precio < 600){
        console.log(` La Pizza de ${pizza.nombre} cuesta $${pizza.precio}`);
    }
}
console.log("Tenemos las siguientes pizzas:");
for(let pizza of pizzas){
    console.log(` Pizza de ${pizza.nombre}`);
}
console.log("Precios:");
for(let pizza of pizzas){
    console.log(` $${pizza.precio}`);
}
console.log("Nombre y Precios:");
for(let pizza of pizzas){
    console.log(` La Pizza de ${pizza.nombre} cuesta $${pizza.precio}`);
}

