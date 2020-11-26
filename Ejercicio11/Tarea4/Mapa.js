"use strict";

class Geo{

    constructor(){}

    initMap(){
        const oviedo = {lat: 43.3672702, lng: -5.8502461};
        const mapaOviedo = new google.maps.Map($('div')[0],{zoom: 8,center:oviedo});
        const marcador = new google.maps.Marker({position:oviedo,map:mapaOviedo});
    }
}

var geo = new Geo();