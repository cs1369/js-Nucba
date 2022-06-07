let ingredientes=["harina","levadura","agua","salsa","queso","jamon","cebolla","calabreza","aceituna","oregano"];


function pizza(ingredientes){
    let ingPar=[];
    let ingImpar=[];
    for(let lista of ingredientes){
        if(lista.length%2==0){
            ingPar.push(lista);
        }
        else{
            ingImpar.push(lista);
        }
    }
    console.log(`Los ingredientes pares son: ${ingPar}`);
    console.log(`Los ingredientes impares son: ${ingImpar}`);
}
pizza(ingredientes);