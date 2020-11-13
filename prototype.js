var Usuario = {
    firstName : 'María',
    lastName : 'Rodriguez',
    emailId : 'maria@gmail.com',
    age : 30,
    getFullName: function (){
        return user.firstName + " " + user.lastName;
    }
} 

var user = Object.create(Usuario);

// access new object properties
console.log('Usuario : ', user.getFullName());