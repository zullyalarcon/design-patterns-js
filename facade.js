var Hipoteca = function (name) {
    this.name = name;
}
 
Hipoteca.prototype = {
    applyFor: function (amount) {
        var result = "aprobado";
        if (!new Bank().verify(this.name, amount)) {
            result = "denegado";
        } else if (!new Credit().get(this.name)) {
            result = "denegado";
        } else if (!new Background().check(this.name)) {
            result = "denegado";
        }
        return this.name + " le han " + result + " " + amount + " de Hipoteca";
    }
}
 
var Bank = function () {
    this.verify = (name, amount) => {
        if (amount < 100000){
        	return false;
        }
        return true;
    }
}
 
var Credit = function () {
    this.get = (name) => {
        // logica
        return true;
    }
}

var Background = function () {
    this.check = (name) => {
        // logica
        return true;
    }
}

function run() {
    var hipoteca = new Hipoteca("Luis Papa");
    var result = hipoteca.applyFor("100000");

    console.log(result);
}

run();
