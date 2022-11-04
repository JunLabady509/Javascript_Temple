function words(str="") {
    // var t = str.trim();
    var s = str.split(" ");
    return s
}

var str = "bonjour salut ça va ?";
var res = words(str)
console.log(res)

function sentence(arr=[]) {
    return arr.join(" ")
}

var arr = ["salut","ca","va","?"]
var sen = sentence( arr)
console.log(sen)

function yell(str="") {
    return str.toUpperCase()
}

var upp = yell(str)
console.log(upp)

function whisper(str="") {
    return "*"+str.toLowerCase()+"*"
}

function capitalize(str=""){
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

var cap = capitalize(str)
console.log(cap)
