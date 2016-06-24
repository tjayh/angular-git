var teejaysApp = {
    firstname:"teejay",
    lastname:"hidalgo",
    message:"hello world",
    getWholeName: function(){
        return this.firstname+' '+this.lastname;
    },
    response:"success"
}

function getname(firstname,lastname){
    var firstname = firstname;
    var lastname = lastname;
    return firstname+'-'+lastname;
}

console.log(getname('teejay','hidalgo'));