"use strict";

class Procesar {

    constructor() {
        
    }

    procesarDatos() {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            var file = document.getElementById("subirArchivos").files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                var xmlDoc = $.parseXML(reader.result);
                var reseñas = $(xmlDoc).find("reseña");
                var counter = 0;
                for( var i = 1; i < reseñas.length + 1; i++)
                {
                    var reseña = reseñas[i - 1];
                    $(document.getElementById(i)).before("<h1>"+ reseña.attributes[0].nodeValue + "</h1>");
                    //$("#viaje" + i).append(reseña.attributes[0].nodeValue);
                    $("#nombre" + i).append("Nombre: " + reseña.children[0].innerHTML);
                    $("#correo" + i).append("Correo: " + reseña.children[1].innerHTML);
                    $("#procedencia" + i).append("Procedencia: " + reseña.children[2].innerHTML);
                    $("#hotel" + i).append("Hotel: " + reseña.children[3].innerHTML);
                    $("#puntuacion_hotel" + i).append("Puntuación del hotel: " + reseña.children[4].innerHTML);
                    $("#reseña" + i).append("Reseña: " + reseña.children[5].innerHTML);
                    $("#lugares" + i).append("Lugares:");
                    var lugares = $(xmlDoc).find("lugar");
                    for( var j = 1; j < lugares.length - 1; j++)
                    {
                        var lugar = lugares[counter++];
                        $("#nombre_lugar" + i + j).append(lugar.attributes[0].nodeValue);
                        $("#reseña_lugar" + i + j).append("Reseña: " + lugar.children[0].innerHTML);
                        $("#puntuacion_lugar" + i + j).append("Puntuación: " + lugar.children[1].innerHTML);
                        var imagen = "<img src='../images/" + lugar.children[2].innerHTML + "' alt='Imagen del paisaje' height='205' width='512' />";
                        $("#imagen" + i + j).append(imagen);
                    }
                }
            };
            reader.readAsText(file);
        }else{
            document.write("<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>");
        }
    }
}

var procesar = new Procesar();