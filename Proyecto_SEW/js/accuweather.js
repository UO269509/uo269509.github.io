"use strict";

class Meteo{

    constructor(){
        this.pantallaCompleta();
        this.api_key = 'QFKtbIN6HTQrtH9Gr0q3elidi9lREsES';
        this.base_city = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search';
        this.base_weather = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.query = '?apikey=';
        this.andOperator = '&q=';
    }

    buscarCiudad(latitud, longitud){
        $.ajax(
            {
                dataType: "json",
                url: this.base_city + this.query + this.api_key + this.andOperator + latitud + ',' + longitud,
                method: 'GET',
                success: function(datos)
                        {
                            var ciudad = datos[0];
                            this.cargarDatos(ciudad.Key);
                        },
                error:function()
                    {
                        $("h2").html("¡Tenemos problemas! No se puede obtener su localización");
                    }
            }
        );
    }

    cargarDatos(locationKey){
        $.ajax(
            {
                dataType: "json",
                url: this.base_weather + locationKey + this.query + this.api_key,
                method: 'GET',
                success: function(datos)
                        {
                            var tiempo = datos[0];

                        },
                error:function()
                    {
                        $("h2").html("¡Tenemos problemas! No se puede cargar los datos meteorológicos");
                    }
            }
        );
    }

    pantallaCompleta(){
        document.addEventListener("keydown", function(e) {
            if (e.key === 'Enter') {
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
}

var meteo = new Meteo();