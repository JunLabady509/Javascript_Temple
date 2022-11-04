function id(arg){
    return arg
}

var arg = "Coucou"
var myArg = id(arg)
console.log(myArg)

function getLength(string = [9,10,12,14]){
    return string.length
}

var string = [9,10,12,14,19,34,45];
var MyString = getLength(string);
console.log(MyString)

