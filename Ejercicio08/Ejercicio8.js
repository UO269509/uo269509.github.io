"use strict";

class Meteo {
    constructor(){
       //this.apikey = "47b790fd0fc41878c80c57c9846132cb";
        this.my_apikey = "185f53ff2b01b3a94b5746274e7d94e8";
        this.ciudad = "Oviedo";
        this.ciudad1 = "Cudillero";
        this.ciudad2 = "Tuñón";
        this.codigoPais = "ES";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.correcto = "¡Todo correcto! JSON recibido de <a href='http://openweathermap.org'>OpenWeatherMap</a>";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.my_apikey;
        this.url1 = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad1 + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.my_apikey;
        this.url2 = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad2 + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.my_apikey;
    }

    cargarDatos(urls){
        $.ajax({
            dataType: "json",
            url: urls,
            method: 'GET',
            success: function(datos){
                    var stringDatos = "<ul><li>Ciudad: " + datos.name + "</li>";
                        stringDatos += "<li>País: " + datos.sys.country + "</li>";
                        stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                        stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
                        stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " grados Celsius</li>";
                        stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                        stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                        stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                        stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                        stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</li>";
                        stringDatos += "<li>Descripción: " + datos.weather[0].description + "</li>";
                        stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                        stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
                        stringDatos += "<img src=\"https://openweathermap.org/img/w/" + datos.weather[0].icon  + ".png\" alt=\"Imagen meteorológica\" /></a>";

                    $("#" + datos.name).html(stringDatos);
                },
            error:function(){
                $("h3").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
                }
        });
    }

    crearElemento(tipoElemento, texto, insertarAntesDe){
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }

    verDatos(){       
        this.crearElemento("h2","Datos","p");
        this.crearElemento("h3",this.correcto,"p");
        this.cargarDatos(this.url);
        this.cargarDatos(this.url1);
        this.cargarDatos(this.url2);
        $("button").attr("disabled","disabled");
    }

}

var meteo = new Meteo();