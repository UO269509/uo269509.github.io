"use strict";

class Geolocalizacion{
   
    constructor(){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.verErrores.bind(this));
    }

    getPosicion(posicion){
        this.enseñar = true;
        this.mensaje = "Se ha realizado correctamente la petición de geolocalización";
        this.longitud = posicion.coords.longitude; 
        this.latitud = posicion.coords.latitude;  
        this.precision = posicion.coords.accuracy;
        this.altitud = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo = posicion.coords.heading;
        this.velocidad = posicion.coords.speed;       
    }

    verErrores(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.enseñar = false;
            this.mensaje = "El usuario no permite la petición de geolocalización"
            break;
        case error.POSITION_UNAVAILABLE:
            this.enseñar = false;
            this.mensaje = "Información de geolocalización no disponible"
            break;
        case error.TIMEOUT:
            this.enseñar = false;
            this.mensaje = "La petición de geolocalización ha caducado"
            break;
        case error.UNKNOWN_ERROR:
            this.enseñar = false;
            this.mensaje = "Se ha producido un error desconocido"
            break;
        }
    }

    getLongitud(){
        return this.longitud;
    }
    getLatitud(){
        return this.latitud;
    }
    getAltitud(){
        return this.altitud;
    }

    mostrar(elemento){
        var ubicacion = document.getElementById(elemento);
        if(this.enseñar){
            var datos='<h2>'+ this.mensaje + '</h2>';
            datos+='<p>Longitud: '+ this.longitud +' grados</p>'; 
            datos+='<p>Latitud: '+ this.latitud +' grados</p>';
            datos+='<p>Precisión de la latitud y longitud: '+ this.precision +' metros</p>';
            if(this.altitud != null){
            datos+='<p>Altitud: '+ this.altitud +' metros</p>';
            }else{
                datos+='<p>Altitud: no disponible</p>';
            }
            if(this.precisionAltitud != null){
            datos+='<p>Precisión de la altitud: '+ this.precisionAltitud +' metros</p>'; 
            }else{
                datos+='<p>Precisión de la altitud: no disponible</p>'; 
            }
            if(this.rumbo != null){
            datos+='<p>Rumbo: '+ this.rumbo +' grados</p>'; 
            }else{
                datos+='<p>Rumbo: 0 grados</p>';
            }
            if(this.velocidad != null){
                datos+='<p>Velocidad: '+ this.velocidad +' metros/segundo</p>';
            }else{
                datos+='<p>Velocidad: 0 metros/segundo</p>';
            }
                ubicacion.innerHTML = datos;
        }else{
            var datos='<h2>'+ this.mensaje + '</h2>';
            ubicacion.innerHTML = datos;
        }
    }
}

var miPosicion = new Geolocalizacion();