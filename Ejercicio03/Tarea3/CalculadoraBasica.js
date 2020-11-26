"use strict";

class CalculadoraBasica {
	
    constructor() {
        this.display = "";
        this.operation = "";
        this.memory = 0;
    }

    add(num) {
        this.operation += num;
        this.display += num;
        document.getElementById('pantalla').value = this.display;
    }

    operate(operator) {
        this.operation += operator;
        this.display = "";
    }

    compute() {
		try{
		document.getElementById('pantalla').value = eval(this.operation);
		this.display = "";
		this.operation = "";
		} catch(err){
			document.getElementById('pantalla').value = "ERROR";
		}
    }

    restart() {
        document.getElementById('pantalla').value = '0';
        this.display = "";
        this.operation = "";
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

var calculadora = new CalculadoraBasica();