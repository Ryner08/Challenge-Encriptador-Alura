function encriptar(){
    
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    // i = es para que tome letras mayusculas y minusculas (img)
    // g = toma en cuenta toda la linea o la oracion (img)
    // m = tome en cuenta multiples lineas (img)

    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;

    document.getElementById("botonCopiar").style.display="show";
    document.getElementById("botonCopiar").style.display="inherit";

    document.getElementById("textoDesencriptado").style.display="show";
    document.getElementById("textoDesencriptado").style.display="inherit";

    document.getElementById("imagenMuneco").style.display= "none";
    document.getElementById("subtitulo").style.display="none";
    document.getElementById("parrafo").style.display="none";

}

function desencriptar(){
    
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    // i = es para que tome letras mayusculas y minusculas (img)
    // g = toma en cuenta toda la linea o la oracion (img)
    // m = tome en cuenta multiples lineas (img)

    var textoDesencriptado = frase.replace(/enter/img, "e");
    var textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    var textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    var textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    var textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoDesencriptado;

}

function copiar(){

    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");

}