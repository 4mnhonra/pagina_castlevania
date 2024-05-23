const miTitulo = document.querySelector("h1");
miTitulo.textContent = "!Hola Perras!";

//definiendo variables
let nombre_Variable;
nombre_Variable = "Juanito";


//condicionales
let helado = "Arequipe";
if (helado == "Arequipe") {
    alert ("Si, amo el helado es de arequipe");
    } else if (helado == "Chocolate"){
    alert ("si, el helado es de chocolate");}

//Funciones
let nombre_Variable2 = document.querySelector("h1")
function multiplica(num1,num2){
    let resultado = num1*num2;  
    return resultado;
}
multiplica(5,3);
multiplica(8,3);

//eventos  
document.querySelector("html").onclick = function(){
    //alert("Deja de picarme, maldito insecto")
 }

 let miImagen = document.getElementById('999');
miImagen.onclick = function(){
    miImagen.src = "img/leonore.jpg";
}
    

