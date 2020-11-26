"use strict";

class Image{
   
    constructor(){
        this.flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    }

    crearElemento(tipoElemento, texto, insertarAntesDe){
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }

    verImagenes(){   
        var e = document.getElementById('etiqueta').value;
        var n = parseInt(document.getElementById('number').value);   
        $("div").remove();
        this.crearElemento("div","","footer");
        $.getJSON(this.flickrAPI, 
                    {
                        tags: e,
                        tagmode: "any",
                        format: "json"
                    })
                .done(function(data) {
                        $.each(data.items, function(i,item ) {
                            $("<img>").attr( "src", item.media.m).appendTo( "div" );
                            if ( i === (n -1) ) {
                                    return false;
                                    }
                        });
            });
    }

}

var imagenes = new Image();