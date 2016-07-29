var teejaysApp = {
    firstname:"teejay",
    lastname:"hidalgo",
    message:"hello world",
    getWholeName: function(name,last){
        return this.firstname+' '+last;
    },
    response:"success"
}

function getname(firstname,lastname){
    var firstname = firstname;
    var lastname = lastname;
    return firstname+'-'+lastname;
}
teejaysApp.firstname = 'john';
console.log(teejaysApp.getWholeName('teejay','hidalgo'));