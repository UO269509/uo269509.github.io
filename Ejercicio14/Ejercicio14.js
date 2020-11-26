"use strict";

class Archivo{

    constructor(){
        document.addEventListener("keydown", function(e) {
            if (e.keyCode == 13) {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen();
                } else {
                  if (document.exitFullscreen) {
                    document.exitFullscreen(); 
                  }
                }
            }
          }, false);
    }

    calcularArchivo() {
        if (window.File && window.FileReader && window.FileList && window.Blob) {  
            var archivo = document.getElementById("subirArchivos").files[0];
            var nombresTiposTamaños= this.cargarFotos(archivo);
            document.getElementById('archivo').innerHTML = nombresTiposTamaños;
        }else{
            document.write("<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>");
        } 
    }

    cargarFotos(file){
        var res = "<p id=\"fotos\"></p>";
        var tipoFile = /text.plain/;
        if (file.type.match(tipoFile)) {
            var lector = new FileReader();
            lector.onload = function () {

                var text = lector.result;
                var urls = text.split("\n");
                var aux = "";
                var number = 0;
                urls.forEach(function (a) {
                    aux += "<img src=\""+ a + "\" alt=\"Foto no disponible\"/>";
                    aux += "<img src=\""+ a + "\" alt=\"Foto no disponible\" id=\"" + number++ + "\"/><br>";
                });
                number = 0;
                $("#fotos").append(aux);

                urls.forEach(function (a) {
                    const image = document.getElementById(number++);
                    fetch(a)
                    .then(response => response.body)
                    .then(rs => rs.pipeThrough(new TransformStream(new GrayscalePNGTransformer())))
                    .then(rs => new Response(rs))
                    .then(response => response.blob())
                    .then(blob => URL.createObjectURL(blob))
                    .then(url => image.src = url)
                    .catch(console.error);
                });
            }      
            lector.readAsText(file);
            return res;
        }else {
            return "Error : ¡¡¡ Archivo no válido !!!";
        } 
    }
}

var misArchivos = new Archivo();