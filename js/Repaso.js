//alert("holaaaa");

// var nombre = "Vladimir Paz";
// var altura = 190;
// var concat = nombre + " " + altura
// document.write(concat);

// var datos = document.getElementById("datos");
// datos.innerHTML= `
//     <h1>Mi nombre es ${nombre}</h1>
//     <h4>mido ${altura}</h4>
// `;

// if(altura > 90){
//     datos.innerHTML = `<h1>
//     eres alto
//     </h1>`
// }else{
//     datos.innerHTML = `<h1>
//     eres bajito</h1>`
// }

// for(var i =0; i <= 2020; i++){
//     datos.innerHTML += "<h2> Estamos en el año:"+i;
// }

function MuestraNombre(nombre, altura){
    var misdatos = document.getElementById("datos");
    datos.innerHTML= `
        <h1>Mi nombre es ${nombre}</h1>
        <h4>mido ${altura}</h4>
    `;  
   // return misdatos();
}
function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraNombre("Vladimir", 164);
}

imprimir();

var nombres = ['Victor','Antonio','Joaquin'];
document.write('<h1>Listado de nombres </h1>')
// for (i =0; i < nombres.length; i++){
//     document.write(nombres[i]+'<br/>');
// }
nombres.forEach(function(nombre){
    document.write(nombre + '<br/>');
})