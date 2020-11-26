"use strict";

class CalculadoraBasica {
	
    constructor() {
        this.display = '';
        this.operation = '';
        this.memory = 0;
    }

    add(num) {
		if(num == 'pi')
		{
        this.operation += Math.PI;
        this.display += Math.PI;
        document.getElementById('pantalla').value = this.display;
		} else{
			if(num == 'e')
			{
				this.operation += Math.E;
				this.display += Math.E;
				document.getElementById('pantalla').value = this.display;
			} else{
				this.operation += num;
				this.display += num;
				document.getElementById('pantalla').value = this.display;
			}
		}
    }

    operate(operator) {
        this.operation += operator;
        this.display = '';
    }

    compute() {
        this.display = eval(this.operation);
        document.getElementById('pantalla').value = this.display;
        this.display = '';
        this.operation = '';
    }

    restart() {
        document.getElementById('pantalla').value = '0';
        this.display = '';
        this.operation = '';
    }

    getMemory() {
        this.add(this.memory);
    }

    memorySubstract() {
        this.memory = eval(this.memory + "-" + this.display);
    }

    memoryAdd() {
        this.memory = eval(this.memory + "+" + this.display);
    }
}

class CalculadoraCientifica extends CalculadoraBasica {
	
    function(func) {
        if(func == 'sin')
		{
			var temp = this.operation;
			this.operation = Math.sin(temp);
			this.display = this.operation;
			document.getElementById('pantalla').value = this.display;
		}
		if(func == 'cos')
		{
			var temp = this.operation;
			this.operation = Math.cos(temp);
			this.display = this.operation;
			document.getElementById('pantalla').value = this.display;
		}
		if(func == 'tan')
		{
			var temp = this.operation;
			this.operation = Math.tan(temp);
			this.display = this.operation;
			document.getElementById('pantalla').value = this.display;
		}
		
		if(func == 'sqr')
		{
			var temp = this.operation;
			this.operation = Math.sqrt(temp);
			this.display = this.operation;
			document.getElementById('pantalla').value = this.display;
		}
		
		if(func == '10^')
		{
			var temp = this.operation;
			this.operation = Math.pow(10,temp);
			this.display = this.operation;
			document.getElementById('pantalla').value = this.display;
		}
		
		if(func == 'log')
		{
			var temp = this.operation;
			this.operation = Math.log(temp);
			this.display = this.operation;
			document.getElementById('pantalla').value = this.display;
		}
		
		if(func == 'exp')
		{
			var temp = this.operation;
			this.operation = Math.exp(temp);
			this.display = this.operation;
			document.getElementById('pantalla').value = this.display;
		}
		
		if(func == 'random')
		{
			var temp = this.operation;
			this.operation = Math.random();
			this.display = this.operation;
			document.getElementById('pantalla').value = this.display;
		}
		
		if(func == '1/x')
		{
			var temp = this.operation;
			var aux = '1/' + temp;
			this.operation = eval(aux);
			this.display = this.operation;
			document.getElementById('pantalla').value = this.display;
		}
    }
}

var calculadora = new CalculadoraCientifica();