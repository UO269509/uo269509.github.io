"use strict";

class CalculadoraAgua {
	
    constructor() {
        this.litros = '';
        this.individuos = '';
		this.porcentaje = '';
		this.precio = 0.86;
    }


    calcular() {
		try{
		this.litros = document.getElementById('litros').value;
        this.individuos = document.getElementById('individuos').value;
		this.porcentaje = document.getElementById('porcentaje').value;
		var l = parseFloat(this.litros)/1000;
		var i = parseInt(this.individuos);
		var p = parseFloat(this.porcentaje);
		var l_i = (l*i);
		var l_p = (l_i*p);
		var result = Math.round((l_i + l_p) * this.precio * 100)/100;
		if(result != NaN){
		document.getElementById('resultado').value = result + "€";
		}else{
			document.getElementById('resultado').value = "ERROR: TRY AGAIN";
		}
		} catch(err){
			document.getElementById('resultado').value = "ERROR: TRY AGAIN";
		}
    }
}

var calculadora = new CalculadoraAgua();