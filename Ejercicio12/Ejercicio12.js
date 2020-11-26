"use strict";

class Archivo{

    constructor(){
    }

    calcularTamañoArchivos() {
        if (window.File && window.FileReader && window.FileList && window.Blob) {  
            var nBytes = 0;
            var archivos = document.getElementById("subirArchivos").files;
            var nArchivos = archivos.length;
            for (var i = 0; i < nArchivos; i++) {
                nBytes += archivos[i].size;
            }
            var nombresTiposTamaños="";
            for (var i = 0; i < nArchivos; i++) {
                nombresTiposTamaños += "<p>Archivo[" + i +"] = "+ archivos[i].name  + " Tamaño: " + archivos[i].size +" bytes " + " Tipo: " + archivos[i].type + "</p>";
                nombresTiposTamaños += this.cargarArchivos(archivos[i], i);
            }
            document.getElementById('numero').innerHTML = nArchivos;
            document.getElementById('tamaño').innerHTML = nBytes + " bytes";
            document.getElementById('nombres').innerHTML = nombresTiposTamaños;
        }else{
            document.write("<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>");
        } 
    }

    cargarArchivos(file, number){
        var res = "<pre id=\"f" + number + "\"></pre>";
        var tipoTexto = /text.*/;
		var tipoAPP = /application.*/;
        if (file.type.match(tipoTexto) || file.type.match(tipoAPP)) {
            var lector = new FileReader();
            lector.onload = function (evento) {
                var aux = "#f" + number;
                $(aux).text(lector.result);
            }      
            lector.readAsText(file);
            return res;
        }else {
            return "Error : ¡¡¡ Archivo no válido !!!";
        } 
    }
}

var misArchivos = new Archivo();