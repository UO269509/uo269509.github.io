"use strict";

class MapaKML {

    constructor() {
    }

    calcularTamañoArchivos() {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            var archivo = document.getElementById("subirArchivos").files[0];
            this.cargarArchivos(archivo);
        } else {
            document.write("<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>");
        }
    }

    cargarArchivos(file) {
        var lector = new FileReader();
        lector.onload = function (evento) {

            var jsonDoc = JSON.parse(lector.result);

            const map = new google.maps.Map(document.getElementById('mapa'), {
                center: new google.maps.LatLng(43.257753, -5.823688),
                zoom: 8,
                mapTypeId: 'terrain'
            });
            map.data.addGeoJson(jsonDoc);
        }
        lector.readAsText(file);
    }
    
}

var miMapa = new MapaKML();