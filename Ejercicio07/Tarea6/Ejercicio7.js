"use strict";

class Archivo {
    constructor(){
    }

    mostrar(){
        var aux ="section " + document.getElementById('mostrar').value;
        $(aux).show();
    }

    ocultar(){
        var aux = "section " + document.getElementById('ocultar').value;
        $(aux).hide();
    }

    cambiar(){
        var aux = "section " + document.getElementById('cambiar_elemento').value;
        var aux1 = document.getElementById('cambiar_texto').value;
        $(aux).text(aux1);
    }

    crearElemento(){
        var aux = document.getElementById('nuevo_elemento').value;
        var aux1 = "section " + document.getElementById('lugar_elemento').value;
        var elemento = document.createElement(aux); 
        elemento.innerHTML = "Esto es un ejemplo";
        $(aux1).before(elemento);
    }

    eliminar(){
        var aux = "section " + document.getElementById('borrar').value;
        $(aux).remove();
    }

    recorrer(){
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
        });
    }

    sumarTabla(){
        var fila = 0;
        var columna = 0;
        $("table tr").each(function(){
            fila += 1;
            columna = 0;
            $("tr td").each(function(){
                columna += 1;});
        });
        columna /= fila;
        document.getElementById('sumar').value = "Filas = " + fila + " Columnas = " + columna;
    }
}

var archivo = new Archivo();