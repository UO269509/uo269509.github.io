"use strict";

class MapaKML{

    constructor(){
    }

    calcularTamañoArchivos() {
        if (window.File && window.FileReader && window.FileList && window.Blob) {  
            var archivo = document.getElementById("subirArchivos").files[0];
            this.cargarArchivos(archivo);
        }else{
            document.write("<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>");
        } 
    }

    cargarArchivos(file){
        var lector = new FileReader();
        lector.onload = function (evento) {

            var map = new google.maps.Map(document.getElementById('mapa'), {
                center: new google.maps.LatLng(43.257753, -5.823688),
                zoom: 8,
                mapTypeId: 'terrain'
              });

            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(lector.result, "text/xml");
            var documento = xmlDoc.getElementsByTagName("kml")[0].getElementsByTagName("Document")[0];
            var placeMarks = documento.getElementsByTagName("Placemark");

            for (var i = 0; i < placeMarks.length; i++) {
                var color = documento.getElementsByTagName("Style")[0].getElementsByTagName("LineStyle")[0].getElementsByTagName("color")[0].textContent;
                var width = documento.getElementsByTagName("Style")[0].getElementsByTagName("LineStyle")[0].getElementsByTagName("width")[0].textContent;
                var coords = documento.getElementsByTagName("coordinates")[i].textContent;
                var coordLines = coords.split("\n");
                coordLines = coordLines.splice(1,coordLines.length - 2);
                var flightPlanCoordinates = [];
 
                coordLines.forEach(function (a) {
                    var coordVals = a.split(",");
                    var marker = new google.maps.Marker({ 
                        position: { lat: parseFloat(coordVals[0]), lng: parseFloat(coordVals[1]) }, 
                        map: map, 
                        title: "" 
                    });
                    flightPlanCoordinates.push({lat: parseFloat(coordVals[0]), lng: parseFloat(coordVals[1])});
                });
 
                var flightPath = new google.maps.Polyline({
                    path: flightPlanCoordinates,
                    geodesic: true,
                    strokeColor: color,
                    strokeOpacity: 1.0,
                    strokeWeight: parseFloat(width)
                  });
 
                  flightPath.setMap(map);
 
            }
        }      
        lector.readAsText(file);

    }
}

var miMapa = new MapaKML();