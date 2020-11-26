"use strict";

class Meteo {
    constructor(){
       //this.apikey = "47b790fd0fc41878c80c57c9846132cb";
        this.my_apikey = "185f53ff2b01b3a94b5746274e7d94e8";
        this.ciudad = "Oviedo";
        this.ciudad1 = "Cudillero";
        this.ciudad2 = "Tuñón";
        this.ciudad3 = "Villazones";
        this.ciudad4 = "Lugones";
        this.tipo = "&mode=xml";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.correcto = "¡Todo correcto! XML recibido de <a href='http://openweathermap.org'>OpenWeatherMap</a>";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.tipo + this.unidades + this.idioma + "&APPID=" + this.my_apikey;
        this.url1 = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad1 + this.tipo + this.unidades + this.idioma + "&APPID=" + this.my_apikey;
        this.url2 = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad2 + this.tipo + this.unidades + this.idioma + "&APPID=" + this.my_apikey;
        this.url3 = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad3 + this.tipo + this.unidades + this.idioma + "&APPID=" + this.my_apikey;
        this.url4 = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad4 + this.tipo + this.unidades + this.idioma + "&APPID=" + this.my_apikey;
    }

    cargarDatos(urls){
        $.ajax({
            dataType: "xml",
            url: urls,
            method: 'GET',
            success: function(datos){

                    var ciudad = $('city',datos).attr("name");
                    var longitud = $('coord',datos).attr("lon");
                    var latitud = $('coord',datos).attr("lat");
                    var pais = $('country',datos).text();
                    var amanecer = $('sun',datos).attr("rise");
                    var minutosZonaHoraria = new Date().getTimezoneOffset();
                    var amanecerMiliSeg = Date.parse(amanecer) - (minutosZonaHoraria * 60 * 1000);
                    var amanecerLocal = (new Date(amanecerMiliSeg)).toLocaleTimeString("es-ES");
                    var oscurecer = $('sun',datos).attr("set");          
                    var oscurecerMiliSeg = Date.parse(oscurecer) - (minutosZonaHoraria * 60 * 1000);
                    var oscurecerLocal = (new Date(oscurecerMiliSeg)).toLocaleTimeString("es-ES");
                    var temperatura = $('temperature',datos).attr("value");
                    var temperaturaMin = $('temperature',datos).attr("min");
                    var temperaturaMax = $('temperature',datos).attr("max");
                    var temperaturaUnit = $('temperature',datos).attr("unit");
                    var humedad = $('humidity',datos).attr("value");
                    var humedadUnit = $('humidity',datos).attr("unit");
                    var presion = $('pressure',datos).attr("value");
                    var presionUnit = $('pressure',datos).attr("unit");
                    var velocidadViento = $('speed',datos).attr("value");
                    var nombreViento = $('speed',datos).attr("name");
                    var direccionViento = $('direction',datos).attr("value");
                    var codigoViento = $('direction',datos).attr("code");
                    var nombreDireccionViento = $('direction',datos).attr("name");
                    var nubosidad = $('clouds',datos).attr("value");
                    var nombreNubosidad = $('clouds',datos).attr("name");
                    var visibilidad = $('visibility',datos).attr("value");
                    var precipitacionValue = $('precipitation',datos).attr("value");
                    var precipitacionMode = $('precipitation',datos).attr("mode");
                    var descripcion = $('weather',datos).attr("value");
                    var icon = $('weather',datos).attr("icon");
                    var horaMedida = $('lastupdate',datos).attr("value");
                    var horaMedidaMiliSeg = Date.parse(horaMedida) - (minutosZonaHoraria * 60 * 1000);
                    var horaMedidaLocal = (new Date(horaMedidaMiliSeg)).toLocaleTimeString("es-ES");
                    var fechaMedidaLocal = (new Date(horaMedidaMiliSeg)).toLocaleDateString("es-ES");

                    var stringDatos = "<ul><li>Ciudad: " + ciudad + "</li>";
                    stringDatos += "<li>Longitud: " + longitud + " grados</li>";
                    stringDatos += "<li>Latitud: " + latitud + " grados</li>";
                    stringDatos += "<li>País: " + pais + "</li>";
                    stringDatos += "<li>Amanece a las: " + amanecerLocal + "</li>";
                    stringDatos += "<li>Oscurece a las: " + oscurecerLocal + "</li>";
                    stringDatos += "<li>Temperatura: " + temperatura + " grados Celsius</li>";
                    stringDatos += "<li>Temperatura mínima: " + temperaturaMin + " grados Celsius</li>";
                    stringDatos += "<li>Temperatura máxima: " + temperaturaMax + " grados Celsius</li>";
                    stringDatos += "<li>Temperatura (unidades): " + temperaturaUnit + "</li>";
                    stringDatos += "<li>Humedad: " + humedad + " " + humedadUnit + "</li>";
                    stringDatos += "<li>Presión: " + presion + " " + presionUnit + "</li>";
                    stringDatos += "<li>Velocidad del viento: " + velocidadViento + " metros/segundo</li>";
                    stringDatos += "<li>Nombre del viento: " + nombreViento + "</li>";
                    stringDatos += "<li>Dirección del viento: " + direccionViento + " grados</li>";
                    stringDatos += "<li>Código del viento: " + codigoViento + "</li>";
                    stringDatos += "<li>Nombre del viento: " + nombreDireccionViento + "</li>";
                    stringDatos += "<li>Nubosidad: " + nubosidad + "</li>";
                    stringDatos += "<li>Nombre nubosidad: " + nombreNubosidad + "</li>";
                    stringDatos += "<li>Visibilidad: " + visibilidad + " metros</li>";
                    stringDatos += "<li>Precipitación valor: " + precipitacionValue + "</li>";
                    stringDatos += "<li>Precipitación modo: " + precipitacionMode + "</li>";
                    stringDatos += "<li>Descripción: " + descripcion + "</li>";
                    stringDatos += "<li>Hora de la medida: " + horaMedidaLocal + "</li>";
                    stringDatos += "<li>Fecha de la medida: " + fechaMedidaLocal + "</li></ul>";
                    stringDatos += "<img src=\"https://openweathermap.org/img/w/" + icon + ".png\" alt=\"Imagen meteorológica\" /></a>";

                    $("#" + ciudad).html(stringDatos);
                },
            error:function(){
                $("h3").html("¡Tenemos problemas! No puedo obtener XML de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
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
        this.cargarDatos(this.url3);
        this.cargarDatos(this.url4);
        $("button").attr("disabled","disabled");
    }

}

var meteo = new Meteo();