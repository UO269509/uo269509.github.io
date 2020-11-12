"use strict";

class PilaLIFO {
	
    constructor() {
        this.display = '';
        this.pila = new Array();
		this.index = -1;
    }

    add(num) {
		this.display += num;
		if(this.index == -1){
			this.apilar();
			document.getElementById('pantalla').innerHTML = this.mostrar();
		}else{
			this.pila[this.index] = this.display;
			document.getElementById('pantalla').innerHTML = this.mostrar();
		}
	}

	apilar(){
		try{
			if(this.display != '.'){
				this.pila.push(this.display);
				this.index += 1;
				document.getElementById('pantalla').innerHTML = this.mostrar();
			}
		}catch(err){}
	}
	
	enter(){
		try{
		this.display = '';
		this.index += 1;
		document.getElementById('pantalla').innerHTML = this.mostrar();
		}catch(err){}
	}
            
	desapilar(){
		if(this.index != -1){
		this.index -= 1;
		return (this.pila.pop());
		}
	}
	
	mostrar(){
		var stringPila = "<ul>";
		for (var i in this.pila) 
			stringPila += "<li>" + this.pila[i] + "</li>";
		stringPila += "</ul>"
		return stringPila;
	}

    restart() {
		this.display = '';
		this.pila[this.index] = this.display;
        document.getElementById('pantalla').innerHTML = this.mostrar();
    }
}

class CalculadoraRPN extends PilaLIFO {
	
    function(func) {
		if(func == '+')
		{
			var temp = this.desapilar();
			var temp2 = this.desapilar();
			if(temp != undefined || temp2 != undefined){
			this.display = (parseFloat(temp2) + parseFloat(temp));
			this.apilar();
			document.getElementById('pantalla').value = this.mostrar();
			this.display = '';
			}
		}
		if(func == '-')
		{
			var temp = this.desapilar();
			var temp2 = this.desapilar();
			if(temp != undefined || temp2 != undefined){
			this.display = (parseFloat(temp2) - parseFloat(temp));
			this.apilar();
			document.getElementById('pantalla').value = this.mostrar();
			this.display = '';
			}
		}
		if(func == '*')
		{
			var temp = this.desapilar();
			var temp2 = this.desapilar();
			if(temp != undefined || temp2 != undefined){
			this.display = (parseFloat(temp2) * parseFloat(temp));
			this.apilar();
			document.getElementById('pantalla').value = this.mostrar();
			this.display = '';
			}
		}
		if(func == '/')
		{
			var temp = this.desapilar();
			var temp2 = this.desapilar();
			if(temp != undefined || temp2 != undefined){
			this.display = (parseFloat(temp2) / parseFloat(temp));
			this.apilar();
			document.getElementById('pantalla').value = this.mostrar();
			this.display = '';
			}
		}
        if(func == 'sin')
		{
			var temp = this.desapilar();
			if(temp != undefined){
			this.display = Math.sin(parseFloat(temp));
			this.apilar();
			document.getElementById('pantalla').value = this.mostrar();
			this.display = '';
			}
		}
		if(func == 'cos')
		{
			var temp = this.desapilar();
			if(temp != undefined){
			this.display = Math.cos(parseFloat(temp));
			this.apilar();
			document.getElementById('pantalla').value = this.mostrar();
			this.display = '';
			}
		}
		if(func == 'tan')
		{
			var temp = this.desapilar();
			if(temp != undefined){
			this.display = Math.tan(parseFloat(temp));
			this.apilar();
			document.getElementById('pantalla').value = this.mostrar();
			this.display = '';
			}
		}
    }
}

var calculadora = new CalculadoraRPN();