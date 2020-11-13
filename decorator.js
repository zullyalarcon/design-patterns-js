var User = function(name) {
    this.name = name;

    this.say = function() {
        console.log("User: " + this.name);
    };
}

var DecoratedUser = function(user, lastname, city) {
    this.user = user;
    this.name = user.name;
    this.lastName = lastname;
    this.city = city;

    this.say = function() {
        console.log("Decorated User: " + this.name + ", " + this.lastName + ", " + this.city);
    };
}
 
function run() {
    var user = new User("Gustavo");
    user.say();

    var decorated = new DecoratedUser(user, "Cerati", "Ciudad de la Furia");
    decorated.say();
}

run();